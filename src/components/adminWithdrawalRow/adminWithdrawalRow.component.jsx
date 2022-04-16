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
    &.active {
      background-color: green;
    }
    &.inactive {
      background-color: red;
    }
    padding: 5px;
    text-align: center;
    border-radius: 10px;
    color: #fff;
    font-weight: 500;
  }
`;

const AdminWithdrawalRow = ({ withdrawal, adminToken, logAdminOut, user }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleApprove = async (e, id) => {
    e.preventDefault();
    setIsSubmitting(true);

    let url = `${ROOT_URL}/admin/user/withdrawal/approve`;
    let options = {
      headers: {
        "Content-Type": "application/json",
        admin_csrf_token: adminToken,
      },
      withCredentials: true,
    };

    const body = {
      withdrawal_id: id,
    };

    try {
      let response = await axios.put(url, body, options);

      if (response.data.status === "Success") {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
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

  const reqDate = new Date(withdrawal.request_date);

  const appDate = new Date(withdrawal.dateofapproval);

  return (
    <TableRow>
      <td>£{withdrawal.amount}</td>
      <td>{reqDate.toDateString()}</td>
      <td>
        <div className={`${withdrawal.is_confirmed ? "active" : "inactive"}`}>
          {withdrawal.is_confirmed ? "verified" : "unverified"}
        </div>
      </td>
      <td>{withdrawal.dateofapproval ? appDate.toDateString() : "Nil"}</td>
      {!user ? (
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
            <button onClick={(e) => handleApprove(e, withdrawal.id)}>
              Approve
            </button>
          )}
        </td>
      ) : (
        <></>
      )}
    </TableRow>
  );
};

const mapStateToProps = (state) => ({
  adminToken: state.admin.adminToken,
});

const mapDispatchToProps = (dispatch) => ({
  logAdminOut: () => dispatch(logAdminOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminWithdrawalRow);
