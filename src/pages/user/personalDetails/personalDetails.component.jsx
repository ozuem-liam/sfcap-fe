import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { connect } from "react-redux";
import {
  setUserAvatar,
  logUserOut,
  setUserDetails,
} from "../../../redux/user/user.actions";
import { BiLoaderAlt } from "react-icons/bi";

import UserPage from "../userPage.component";
import DashboardFooter from "../../../components/dashboardFooter/dashboardFooter.component";
import DashboardHeader from "../../../components/dashboardHeader/dashboardHeader.component";
import DashboardCard from "../../../components/dashboardCard/dashboardCard.component";

import user from "./../../../assets/user.svg";
import UserKYCForm from "../../../components/userKYCForm/userKYCForm.component";
import { useHistory } from "react-router-dom";
import { ROOT_URL } from "../../../constant";

const Container = styled.div`
  width: 100vw;
  position: relative;
  & > main {
    padding: 2rem 1rem;
    margin-bottom: 3rem;
    h2 {
      font-size: 2rem;
      padding-left: 1rem;
    }
  }
  @media screen and (min-width: 700px) {
    & > main > h2 {
      max-width: 810px;
      margin: 0 auto 1rem;
      font-size: 2.5rem;
    }
  }
`;

const CardChild = styled.div`
  padding: 1rem;
  text-align: center;
  img {
    display: block;
    margin: 2rem auto;
    padding: 5px;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    border: solid 2px #ccc;
  }
  input {
    display: none;
  }
  strong {
    &.success {
      color: green;
    }
    display: block;
  }

  label {
    display: block;
    margin-bottom: 1.5rem;
    span {
      display: block;
      margin-bottom: 5px;
      font-size: 1.2rem;
      font-weight: 400;
      color: black;
    }
    input {
      display: block;
      padding: 5px 10px;
      border-radius: 5px;
      border: solid 1px #aaa;
      width: 250px;
      font-size: 1rem;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
      padding: 0;
      margin: 0 auto;
    }
  }
  button {
    border: none;
    font-size: 16px;
    padding: 10px 1rem;
    background-color: #00b4ae;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
    color: white;
    width: 150px;
    &:disabled {
      background-color: #15193e;
      svg {
        animation: rotateLoader 1s linear infinite;
      }
    }

    @keyframes rotateLoader {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
  @media screen and (min-width: 700px) {
    img {
      margin: 1rem auto;
    }
  }
`;

const PersonalDetails = ({
  userToken,
  setUserAvatar,
  avatar,
  logUserOut,
  setUserDetails,
  kycVerified,
}) => {
  const [showDrawer, toggleDrawer] = useState(false);
  const [finalFile, setFinalFile] = useState("");
  const [filePath, setFilePath] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(null);
  const [success, setSuccess] = useState(false);
  const history = useHistory();

  const handleChange = (e) => {
    setFilePath(e.target.value);
    setFinalFile(e.target.files[0]);
  };

  useEffect(() => {
    if (!userToken) {
      history.push("/login");
    } else {
      const getDashboardData = async () => {
        const url = `${ROOT_URL}/api/dashboard`;
        const options = {
          headers: {
            "Content-Type": "application/json",
            csrf_token: userToken,
          },
          withCredentials: true,
        };

        try {
          const response = await axios.get(url, options);
          if (response.data.status === "Success") {
            setUserDetails(response.data);
          }
        } catch (e) {
          if (e.response.status === 403) {
            setTimeout(() => logUserOut(), 500);
            history.push("/login");
          }
        }
      };
      getDashboardData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submitImage = async (e) => {
    e.preventDefault();
    if (!finalFile) {
      return;
    }
    setIsSubmitting(true);
    let imageLink = "";
    const CLOUDINARY_URL =
      "	https://api.cloudinary.com/v1_1/stripeoption/upload";
    const CLOUDINARY_UPLOAD_PRESET = "uor1vxdt";
    let formData = new FormData();

    let date = new Date().getTime().toString();
    date = "Profile" + date;
    formData.append("file", finalFile, date);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    try {
      let response = await axios.post(CLOUDINARY_URL, formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      imageLink = response.data.secure_url;
      let url = `${ROOT_URL}/api/user/update_avatar`;
      let options = {
        headers: {
          "Content-Type": "application/json",
          csrf_token: userToken,
        },
        withCredentials: true,
      };
      const body = {
        avatar: imageLink,
      };

      response = await axios.put(url, body, options);

      if (response.data.status === "Success") {
        setUserAvatar(imageLink);
        setSuccess(true);
        setFilePath("");
        setFinalFile("");
      }
    } catch (e) {
      if (e.response.status === 403) {
        setTimeout(() => logUserOut(), 500);
        history.push("/login");
      }
    }
    setIsSubmitting(false);
  };

  return (
    <UserPage showDrawer={showDrawer}>
      <Container>
        <DashboardHeader showDrawer={showDrawer} toggleDrawer={toggleDrawer} />
        <main>
          <h2>Profile</h2>
          <DashboardCard personal>
            <CardChild>
              <img src={avatar ? avatar : user} alt="user" />
              <label htmlFor="picture">
                <span>Profile Picture</span>
                <input
                  id="picture"
                  name="picture"
                  type="file"
                  value={filePath}
                  onChange={handleChange}
                />
              </label>
              {success ? (
                <strong className="success">
                  *Profile Picture uploaded successfully
                </strong>
              ) : (
                <></>
              )}
              {isSubmitting ? (
                <button disabled>
                  <BiLoaderAlt />
                </button>
              ) : (
                <button onClick={submitImage}>Upload</button>
              )}
            </CardChild>

            <CardChild>
              {!kycVerified ? (
                <>
                  <hr></hr>
                  <UserKYCForm />
                </>
              ) : (
                <></>
              )}
            </CardChild>
          </DashboardCard>
        </main>
        <DashboardFooter drawerOpen={showDrawer} />
      </Container>
    </UserPage>
  );
};

const mapStateToProps = (state) => ({
  userToken: state.user?.userToken,
  avatar: state.user?.userDetails?.avatar,
  kycVerified: state.user?.userDetails?.is_verified,
});

const mapDispatchToProps = (dispatch) => ({
  setUserAvatar: (avatarLink) => dispatch(setUserAvatar(avatarLink)),
  logUserOut: () => dispatch(logUserOut()),
  setUserDetails: (userDetails) => dispatch(setUserDetails(userDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonalDetails);
