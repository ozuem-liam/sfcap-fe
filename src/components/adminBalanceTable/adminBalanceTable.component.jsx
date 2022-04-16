import React from "react";
import styled from "styled-components";

import AdminBalanceRow from "./../../components/adminBalanceRow/adminBalanceRow.component";

const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  border-radius: 5px;
  background-color: #262626;
  max-width: 1200px;
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

const AdminBalanceTable = ({ balances }) => {
  return (
    <TableContainer>
      <table>
        <thead>
          <tr>
            <th>Amount Paid</th>
            <th>Hash Key</th>
            <th>Payment Mode</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {balances.map((balance, index) => (
            <AdminBalanceRow balance={balance} key={index} />
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
};

export default AdminBalanceTable;
