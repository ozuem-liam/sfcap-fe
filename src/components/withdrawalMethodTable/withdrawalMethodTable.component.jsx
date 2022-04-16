import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border-radius: 5px;

  h2 {
    font-size: 1.2rem;
    display: block;
    margin-bottom: 10px;
  }
  table,
  tr,
  td {
    border-collapse: collapse;
  }
  table {
    width: 100%;
  }
`;

const Table = styled.table`
  td {
    padding: 10px;
  }
  tr:nth-child(even) {
    background-color: #ccc;
  }
`;

const WithdrawalMethodTable = ({ title, rows }) => {
  return (
    <Container>
      <h2>{title}</h2>
      <Table>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{row.info}</td>
              <td>{row.amount}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default WithdrawalMethodTable;
