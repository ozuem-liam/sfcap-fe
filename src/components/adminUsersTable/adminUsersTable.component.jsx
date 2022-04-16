import React from "react";
import styled from "styled-components";
import AdminUserRow from "./../../components/adminUserRow/adminUserRow.component";

const TableContainer = styled.div`
  background-color: #fff;
  width: 100%;
  overflow-x: auto;
  border-radius: 5px;
  background-color: #262626;
  max-width: 1450px;
  margin-left: auto;
  margin-right: auto;

  img {
    width: 100px;
    height: 100px;
  }

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

const AdminUsersTable = ({ users }) => {
  return (
    <TableContainer>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>User Wallet Address</th>
            <th>Signup Date</th>
            <th>Email Status</th>
            <th>Account Status</th>
            <th>Update Admin Wallet Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <AdminUserRow user={user} key={index} />
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
};

export default AdminUsersTable;
