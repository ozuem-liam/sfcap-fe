import React from "react";
import { BiPound as PoundSign } from "react-icons/bi";
import { TableContainer } from "./table.styles";

const Table = () => {
  const tableHeadRow = [
    {
      ln: "#",
      name: "NAME",
      amountPaid: "AMOUNT PAID",
      address: "ADDRESS",
      paymentMethod: "PAYMENT METHOD",
      status: "STATUS",
      key: 0,
    },
  ];
  const tableDataRows = [
    {
      ln: 1,
      name: "Mitchelle",
      amountPaid: 380000,
      address: "Th7jv9dtscvktsSKzNWk7LwN...",
      paymentMethod: "Bitcoin",
      status: "Paid",
      key: 0,
    },
    {
      ln: 2,
      name: "Nathan",
      amountPaid: 490000,
      address: "17NtyGynJJtdjsyreThk7LwN...",
      paymentMethod: "Bitcoin",
      status: "Paid",
      key: 1,
    },
    {
      ln: 3,
      name: "Gabriel",
      amountPaid: 450000,
      address: "1hGMhyVGTgsjn5SKzNWk7LwN...",
      paymentMethod: "Bitcoin",
      status: "Paid",
      key: 2,
    },
    {
      ln: 4,
      name: "Minna",
      amountPaid: 315000,
      address: "HtjcNtyGyngkfbSKzNWk7LwN...",
      paymentMethod: "Bitcoin",
      status: "Paid",
      key: 3,
    },
    {
      ln: 5,
      name: "John",
      amountPaid: 430050,
      address: "HMdigdbjHj98u5SKzNWk7LwN...",
      paymentMethod: "Bitcoin",
      status: "Paid",
      key: 4,
    },
    {
      ln: 6,
      name: "Karen",
      amountPaid: 201000,
      address: "GtjvhGSTbk8uy5SKzNWk7LwN...",
      paymentMethod: "Bitcoin",
      status: "Paid",
      key: 5,
    },
  ];

  return (
    <TableContainer>
      <div className="wrapper">
        {tableHeadRow.map(
          ({ ln, key, name, amountPaid, address, paymentMethod, status }) => (
            <div className="header row" key={key}>
              <div className="lnColumn head">
                <strong>{ln}</strong>
              </div>
              <div className="nameColumn head">
                <strong>{name}</strong>
              </div>
              <div className="amountPaidColumn head">
                <strong>{amountPaid}</strong>
              </div>
              <div className="addressColumn head">
                <strong>{address}</strong>
              </div>
              <div className="paymentMethodColumn head">
                <strong>{paymentMethod}</strong>
              </div>
              <div className="statusColumn head">
                <strong>{status}</strong>
              </div>
            </div>
          )
        )}
        <div className="container">
          {tableDataRows.map(
            ({ ln, key, name, amountPaid, address, paymentMethod, status }) => (
              <div key={key} className="dataRow row">
                <div className="lnColumn data">
                  <span>{ln}</span>
                </div>
                <div className="nameColumn data">
                  <span>{name}</span>
                </div>
                <div className="amountPaidColumn data">
                  <span>{amountPaid}</span>
                </div>
                <div className="addressColumn data">
                  <span>{address}</span>
                </div>
                <div className="paymentMethodColumn data">
                  <span> <PoundSign />{paymentMethod}</span>
                </div>
                <div className="statusColumn data">
                  <span>{status}</span>
                </div>
              </div>
            )
          )}
        </div>
        <div className="footer">
          <p>
            * This is a complete data of all paid withdrawals made to our active
            investments.
          </p>
        </div>
      </div>
    </TableContainer>
  );
};
export default Table;
