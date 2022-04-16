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

const AdminUserDetailsRow = ({ user, update }) => {
  const [showBalance, setShowBalance] = useState(false);
  const [showROI, setShowROI] = useState(false);
  const [showDeposit, setShowDeposit] = useState(false);
  const [showReferral, setShowReferral] = useState(false);
  const [showWallet, setShowWallet] = useState(false);

  const handleApprove = async (e, type) => {
    e.preventDefault();
    switch (type) {
      case "balance":
        setShowBalance(true);
        break;
      case "ROI":
        setShowROI(true);
        break;
      case "deposit":
        setShowDeposit(true);
        break;
      case "referral":
        setShowReferral(true);
        break;
      case "wallet":
        setShowWallet(true);
        break;
      default:
        throw Error("User Detail Row");
    }
  };

  return (
    <>
      <DepositeModal
        open={() => setShowBalance(true)}
        close={() => {
          setShowBalance(false);
          update();
        }}
        show={showBalance}
        header="Update User Balance"
        label="User Balance"
        placeHolder="Enter User Balance"
        buttonText="Submit"
        backdropHeight={"100%"}
        updateUserBalance
        modalTop="60%"
        type="text"
        userID={user.user_id}
        successMessage="Balance Updated Successfully"
        defaultValue={user.current_balance}
      />
      <DepositeModal
        open={() => setShowROI(true)}
        close={() => {
          setShowROI(false);
          update();
        }}
        show={showROI}
        header="Update User ROI"
        label="User ROI"
        placeHolder="Enter User ROI"
        buttonText="Submit"
        backdropHeight={"100%"}
        updateUserROI
        modalTop="60%"
        type="text"
        userID={user.user_id}
        successMessage="ROI Updated Successfully"
        defaultValue={user.profit_gained}
      />
      <DepositeModal
        open={() => setShowDeposit(true)}
        close={() => {
          setShowDeposit(false);
          update();
        }}
        show={showDeposit}
        header="Update User Deposit"
        label="User Deposit"
        placeHolder="Enter User Deposit"
        buttonText="Submit"
        backdropHeight={"100%"}
        updateUserDeposit
        modalTop="60%"
        type="text"
        userID={user.user_id}
        successMessage="Total Deposits Updated Successfully"
        defaultValue={user.total_deposit}
      />
      <DepositeModal
        open={() => setShowReferral(true)}
        close={() => {
          setShowReferral(false);
          update();
        }}
        show={showReferral}
        header="Update User Referral"
        label="User Referral"
        placeHolder="Enter User Referral"
        buttonText="Submit"
        backdropHeight={"100%"}
        updateUserReferral
        modalTop="60%"
        type="text"
        userID={user.user_id}
        successMessage="Referral Bonus Updated Successfully"
        defaultValue={user.referral_bonus}
      />
      <DepositeModal
        open={() => setShowWallet(true)}
        close={() => {
          setShowWallet(false);
          update();
        }}
        show={showWallet}
        header="Update User Wallet"
        label="User Wallet"
        placeHolder="Enter User Wallet"
        buttonText="Submit"
        backdropHeight={"100%"}
        updateUserWallet
        modalTop="60%"
        type="text"
        userID={user.user_id}
        successMessage="User Wallet Updated Successfully"
      />
      <TableRow>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.current_balance || 0}</td>
        <td>
          <button onClick={(e) => handleApprove(e, "balance")}>Update</button>
        </td>
        <td>{user.profit_gained || 0}</td>
        <td>
          <button onClick={(e) => handleApprove(e, "ROI")}>Update</button>
        </td>
        <td>{user.total_deposit || 0}</td>
        <td>
          <button onClick={(e) => handleApprove(e, "deposit")}>Update</button>
        </td>
        <td>{user.referral_bonus || 0}</td>
        <td>
          <button onClick={(e) => handleApprove(e, "referral")}>Update</button>
        </td>
        <td>
          <button onClick={(e) => handleApprove(e, "wallet")}>Update</button>
        </td>
      </TableRow>
    </>
  );
};

export default AdminUserDetailsRow;
