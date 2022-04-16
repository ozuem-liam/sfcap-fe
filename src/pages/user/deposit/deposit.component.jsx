import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { connect } from "react-redux";

import UserPage from "../userPage.component";
import DashboardFooter from "../../../components/dashboardFooter/dashboardFooter.component";
import DashboardHeader from "../../../components/dashboardHeader/dashboardHeader.component";
import DepositeModal from "../../../components/depositeModal/depositeModal.component";
import { useHistory } from "react-router-dom";
import { logUserOut, setUserDetails } from "../../../redux/user/user.actions";
import { ROOT_URL } from "../../../constant";

const Container = styled.div`
  width: 100vw;
  position: relative;
  & > main {
    padding: 2rem 1rem;
    background-color: #fed383;
    min-height: 520px;
    padding-bottom: 4rem;
    h2 {
      font-size: 2rem;
    }
    div.verified {
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
    button {
      border: none;
      font-size: 1rem;
      padding: 10px 1rem;
      background-color: #00b4ae;
      border: none;
      border-radius: 5px;
      margin-top: 10px;
      color: white;
    }
  }
  @media screen and (min-width: 768px) {
    & > main {
      padding: 2rem;
      padding-bottom: 4rem;
    }
  }
`;

const TableContainer = styled.div`
  background-color: #fff;
  width: 100%;
  overflow-x: auto;
  border-radius: 5px;
  background-color: #262626;

  th,
  td {
    padding: 10px;
    text-align: center;
    color: #fff;
  }
  table {
    width: 100%;
  }
  @media screen and (min-width: 1200px) {
  }
`;

const Deposit = ({ userToken, logUserOut, setUserDetails }) => {
  const [showDrawer, toggleDrawer] = useState(false);
  const [show, setShow] = useState(false);
  const [deposits, setDeposits] = useState([]);
  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);
  const history = useHistory();

  useEffect(() => {
    if (!userToken) {
      history.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const getDeposits = async () => {
      let url = `${ROOT_URL}/deposits`;
      let options = {
        headers: {
          "Content-Type": "application/json",
          csrf_token: userToken,
        },
        withCredentials: true,
      };
      try {
        let response = await axios.get(url, options);

        if (response.status === 200) {
          setDeposits(response.data);
        }
        url = `${ROOT_URL}/dashboard`;

        response = await axios.get(url, options);
        if (response.data.status === "Success") {
          setUserDetails(response.data);
        }
      } catch (e) {
        if (e.response.status === 403) {
          setTimeout(() => logUserOut(), 500);
          history.push("/login");
        }
      }
    };
    getDeposits();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UserPage showDrawer={showDrawer}>
      <Container>
        <DepositeModal
          open={handleOpen}
          close={handleClose}
          show={show}
          header="Deposit"
          label="Amount"
          placeHolder="Enter Amount"
          buttonText="Submit"
          backdropHeight={"100%"}
          modalBottom="40vh"
        />
        <DashboardHeader showDrawer={showDrawer} toggleDrawer={toggleDrawer} />
        <main>
          <h2>Processed / Pending Deposits</h2>
          <TableContainer>
            <table>
              <thead>
                <tr>
                  <th>Amount</th>
                  <th>Hash Key</th>
                  <th>Payment Mode</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {}
                {deposits.map((deposit, index) => (
                  <tr key={index}>
                    <td>{deposit.amount_paid}</td>
                    <td>{deposit.hash_key}</td>
                    <td>{deposit.payment_mode}</td>
                    <td>
                      <div
                        className={`verified ${
                          deposit.is_confirmed ? "active" : "inactive"
                        }`}
                      >
                        {deposit.is_confirmed ? "Verified" : "Pending"}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableContainer>
          <button onClick={handleOpen}> Make New Deposit </button>
        </main>
        <DashboardFooter drawerOpen={showDrawer} />
      </Container>
    </UserPage>
  );
};

const mapStateToProps = (state) => ({
  userToken: state.user?.userToken,
});

const mapDispatchToProps = (dispatch) => ({
  logUserOut: () => dispatch(logUserOut()),
  setUserDetails: (userDetails) => dispatch(setUserDetails(userDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Deposit);
