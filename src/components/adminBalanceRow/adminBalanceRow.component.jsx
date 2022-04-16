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

const AdminBalanceRow = ({ balance, adminToken, logAdminOut }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleApprove = async (e, user_id, amount_paid, proof_id) => {
    e.preventDefault();
    setIsSubmitting(true);

    let url = `${ROOT_URL}/admin/user/updatebalance`;
    let options = {
      headers: {
        "Content-Type": "application/json",
        admin_csrf_token: adminToken,
      },
      withCredentials: true,
    };

    const body = {
      user_id,
      amount_paid,
      proof_id,
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
      <td>£{balance.amount_paid}</td>
      <td>{balance.hash_key}</td>
      <td>{balance.package_type ? balance.package_type : "No Package"}</td>
      <td>
        <a href={balance.screenshot} target="_blank" rel="noopener noreferrer">
          <img src={balance.screenshot} alt="screenshot" />
        </a>
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
          <button
            onClick={(e) =>
              handleApprove(e, balance.user_id, balance.amount_paid, balance.id)
            }
          >
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminBalanceRow);
