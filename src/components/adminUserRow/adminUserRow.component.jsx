import React, { useState } from "react";
import styled from "styled-components";
import DepositeModal from "./../../components/depositeModal/depositeModal.component";

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

const AdminUserRow = ({ user }) => {
  const [show, setShow] = useState(false);

  const handleApprove = async (e) => {
    e.preventDefault();
    return setShow(true);
  };

  const date = new Date(user.signupdate);

  return (
    <>
      <DepositeModal
        open={() => setShow(true)}
        close={() => setShow(false)}
        // style={{position:"absolute"}}
        show={show}
        header="Update Walllet Address"
        label="Wallet Address"
        placeHolder="Enter Wallet Address"
        buttonText="Submit"
        backdropHeight={"100%"}
        updateWallet
        modalTop="30vh"
        type="text"
        userID={user.user_id}
      />
      <TableRow>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.phone_number ? user.phone_number : "--"}</td>
        <td>
          {user.account?.wallet_address ? user.account?.wallet_address : "--"}
        </td>
        <td>{date.toDateString()}</td>
        <td>
          <div className={`${user.is_email_verified ? "active" : "inactive"}`}>
            {user.is_email_verified ? "verified" : "unverified"}
          </div>
        </td>
        <td>
          <div className={`${user.is_verified ? "active" : "inactive"}`}>
            {user.is_verified ? "verified" : "unverified"}
          </div>
        </td>
        <td>
          <button onClick={handleApprove}>Update</button>
        </td>
      </TableRow>
    </>
  );
};

export default AdminUserRow;
