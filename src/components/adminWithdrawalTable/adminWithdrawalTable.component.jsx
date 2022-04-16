import React from "react";
import styled from "styled-components";
import AdminWithdrawalRow from "./../../components/adminWithdrawalRow/adminWithdrawalRow.component";

const TableContainer = styled.div`
  background-color: #fff;
  width: 100%;
  overflow-x: auto;
  border-radius: 5px;
  background-color: #262626;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  th,
  td {
    padding: 10px;
    text-align: center;
    color: #fff;
  }
  table {
    width: 100%;
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
    &:disabled {
      background-color: #15193e;
      &.success {
        background-color: green;
        svg {
          animation: none;
        }
      }
      &.error {
        background-color: red;
        svg {
          animation: none;
        }
      }
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
  @media screen and (min-width: 1200px) {
  }
`;

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

const AdminWithdrawalTable = ({ withdrawals, user }) => {
  return (
    <TableContainer>
      <table>
        <thead>
          <TableRow>
            <th>Amount</th>
            <th>Request Date</th>
            <th>Status</th>
            <th>Approval Date</th>
            {!user ? <th>Action</th> : <></>}
          </TableRow>
        </thead>
        <tbody>
          {withdrawals.map((withdrawal, index) => (
            <AdminWithdrawalRow
              key={index}
              user={user}
              withdrawal={withdrawal}
            />
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
};

export default AdminWithdrawalTable;
