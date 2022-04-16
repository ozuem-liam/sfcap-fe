import React, { useState } from "react";
import styled from "styled-components";
import { BiLoaderAlt } from "react-icons/bi";
import axios from "axios";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { logUserOut } from "../../redux/user/user.actions";
import { ROOT_URL } from "../../constant";

const Form = styled.form``;

const UserKYCForm = ({ userToken, logUserOut }) => {
  const [idFilePath, setIDFilePath] = useState("");
  const [idFinalFile, setIDFinalFile] = useState("");
  const [passportFilePath, setPassportFilePath] = useState("");
  const [passportFinalFile, setPassportFinalFile] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const history = useHistory();

  const idHandleChange = (e) => {
    setIDFilePath(e.target.value);
    setIDFinalFile(e.target.files[0]);
  };

  const passportHandleChange = (e) => {
    setPassportFilePath(e.target.value);
    setPassportFinalFile(e.target.files[0]);
  };

  const submitImage = async (e) => {
    e.preventDefault();
    if (!idFinalFile || !passportFinalFile) {
      return;
    } else {
      setError(false);
    }
    setIsSubmitting(true);
    let idLink = "";
    let passportLink = "";
    const CLOUDINARY_URL =
      "	https://api.cloudinary.com/v1_1/stripeoption/upload";
    const CLOUDINARY_UPLOAD_PRESET = "uor1vxdt";
    let formData = new FormData();
    let date = new Date().getTime().toString();
    date = "KYCId" + date;
    formData.append("file", idFinalFile, date);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    try {
      let response = await axios.post(CLOUDINARY_URL, formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      idLink = response.data.secure_url;

      formData.delete("file");

      let date = new Date().getTime().toString();
      date = "KYCPport" + date;
      formData.append("file", passportFinalFile, date);

      response = await axios.post(CLOUDINARY_URL, formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      passportLink = response.data.secure_url;

      let url = `${ROOT_URL}/kyc`;
      let options = {
        headers: {
          "Content-Type": "application/json",
          csrf_token: userToken,
        },
        withCredentials: true,
      };
      const body = {
        card: idLink,
        passport: passportLink,
      };

      response = await axios.post(url, body, options);

      if (response.data.status === "Success") {
        setSuccess(true);
        setIDFilePath("");
        setIDFinalFile("");
        setPassportFilePath("");
        setPassportFinalFile("");
      }
    } catch (e) {
      if (e.response.status === 403) {
        setTimeout(() => logUserOut(), 500);
        history.push("/login");
      }
      setError(true);
    }
    setIsSubmitting(false);
  };

  return (
    <Form>
      <label htmlFor="picture">
        <span>ID Card</span>
        <input
          id="picture"
          name="picture"
          type="file"
          value={idFilePath}
          onChange={idHandleChange}
        />
      </label>
      <label htmlFor="picture">
        <span>Passport Photograph</span>
        <input
          id="picture"
          name="picture"
          type="file"
          value={passportFilePath}
          onChange={passportHandleChange}
        />
      </label>
      {error ? <strong className="success">*An error occurred</strong> : <></>}
      {success ? (
        <strong className="success">
          KYC Images uploaded successfully. The Admin will review them shortly.
        </strong>
      ) : (
        <strong>*Ensure you select both files</strong>
      )}
      {isSubmitting ? (
        <button disabled>
          <BiLoaderAlt />
        </button>
      ) : (
        <button onClick={submitImage}>Upload</button>
      )}
    </Form>
  );
};

const mapStateToProps = (state) => ({
  userToken: state.user.userToken,
});

const mapDispatchToProps = (dispatch) => ({
  logUserOut: () => dispatch(logUserOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserKYCForm);
