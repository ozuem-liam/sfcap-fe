import React, { useState } from "react";
import { BiLoaderAlt } from "react-icons/bi";
import { GiCheckMark } from "react-icons/gi";
import axios from "axios";
import { connect } from "react-redux";
import styled from "styled-components";
import { logAdminOut } from "../../redux/admin/admin.actions";
import { useHistory } from "react-router-dom";
import { ROOT_URL } from "../../constant";

const TableRow = styled.tr`
  div {
    background-color: ${({ status }) => (status ? "green" : "red")};
    padding: 5px;
    text-align: center;
    border-radius: 10px;
    color: #fff;
    font-weight: 500;
  }
`;

const AdminKYCRow = ({ kyc, adminToken, logAdminOut }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleApprove = async (e, user_id) => {
    e.preventDefault();
    setIsSubmitting(true);

    let url = `${ROOT_URL}/admin/user/kyc/approve`;
    let options = {
      headers: {
        "Content-Type": "application/json",
        admin_csrf_token: adminToken,
      },
      withCredentials: true,
    };

    const body = {
      user_id,
    };

    try {
      let response = await axios.put(url, body, options);
      if (response.data.status === "Success") {
        setSuccess(true);
      }
    } catch (e) {
      if (e.response.status === 403) {
        setTimeout(() => logAdminOut(), 500);
        history.push("/admin/login");
      }
      setError(true);
      setTimeout(() => setError(false), 3000);
    }

    setIsSubmitting(false);
  };

  return (
    <TableRow>
      <td>{kyc.name}</td>
      <td>
        {kyc.valid_id_card ? (
          <a href={kyc.valid_id_card} target="_blank" rel="noopener noreferrer">
            <img src={kyc.valid_id_card} alt="id card" />
          </a>
        ) : (
          <></>
        )}
      </td>
      <td>
        {kyc.user_facial_passport ? (
          <a
            href={kyc.user_facial_passport}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={kyc.user_facial_passport} alt="passport" />
          </a>
        ) : (
          <></>
        )}
      </td>
      <td>
        {isSubmitting ? (
          <button disabled>
            <BiLoaderAlt />
          </button>
        ) : success ? (
          <button className="success" disabled>
            {" "}
            <GiCheckMark />{" "}
          </button>
        ) : error ? (
          <button className="error" disabled>
            Error!
          </button>
        ) : (
          <button onClick={(e) => handleApprove(e, kyc.user_id)}>
            Approve
          </button>
        )}
      </td>
    </TableRow>
  );
};

const mapStateToProps = (state) => ({
  adminToken: state.admin.adminToken,
});

const mapDispatchToProps = (dispatch) => ({
  logAdminOut: () => dispatch(logAdminOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminKYCRow);
