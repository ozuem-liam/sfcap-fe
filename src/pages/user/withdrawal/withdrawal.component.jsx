import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import axios from "axios";

import UserPage from "../userPage.component";
import DashboardFooter from "../../../components/dashboardFooter/dashboardFooter.component";
import DashboardHeader from "../../../components/dashboardHeader/dashboardHeader.component";
import WithdrawalMethodTable from "../../../components/withdrawalMethodTable/withdrawalMethodTable.component";
import DepositeModal from "../../../components/depositeModal/depositeModal.component";
import { useHistory } from "react-router-dom";
import { setUserDetails, logUserOut } from "../../../redux/user/user.actions";
import AdminWithdrawalTable from "../../../components/adminWithdrawalTable/adminWithdrawalTable.component";
import { ROOT_URL } from "../../../constant";

const Container = styled.div`
  width: 100vw;
  position: relative;
  & > main {
    padding: 2rem 1rem;
    padding-bottom: 4rem;
    margin-bottom: 3rem;
    background-color: #fed383;
    h2 {
      font-size: 2rem;
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
  @media screen and (min-width: 800px) {
    & > main {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      h2 {
        display: block;
        width: 100%;
      }
      .conts {
        width: 48%;
        &.with {
          h2 {
            margin-top: 2.1rem;
          }
        }
      }
    }
  }
`;

const TableContainer = styled.div`
  background-color: #fff;
  width: 100%;
  padding: 10px;
  overflow-x: auto;
  border-radius: 5px;
  margin-bottom: 2rem;
`;

const WithdrawalTable = styled.div`
  padding: 2rem 1rem;
  margin-bottom: 3rem;
  h2 {
    font-size: 2rem;
  }
  button {
    border: none;
    font-size: 1rem;
    padding: 10px 0.5rem;
    background-color: blue;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
    color: white;
  }
  @media screen and (min-width: 800px) {
    h2 {
      display: block;
      width: 100%;
      margin-top: 0;
    }
  }
`;

const Withdrawal = ({ userToken, setUserDetails, logUserOut, userID }) => {
  const [showDrawer, toggleDrawer] = useState(false);
  const [show, setShow] = useState(false);
  const [withdrawals, setWithdrawals] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (!userToken) {
      history.push("/login");
    } else {
      const getWithdrawalData = async () => {
        let url = `${ROOT_URL}/withdrawals`;
        const options = {
          headers: {
            "Content-Type": "application/json",
            csrf_token: userToken,
          },
          withCredentials: true,
        };

        try {
          let response = await axios.get(url, options);
          if (response.status === 200) {
            setWithdrawals(response.data);
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
      getWithdrawalData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UserPage showDrawer={showDrawer}>
      <Container>
        <DepositeModal
          open={() => setShow(true)}
          close={() => setShow(false)}
          backdropHeight={"100%"}
          modalBottom="30vh"
          show={show}
          header="Withdrawal"
          label="Amount"
          placeHolder="Enter Amount"
          buttonText="Submit"
          withdraw
        />
        <DashboardHeader showDrawer={showDrawer} toggleDrawer={toggleDrawer} />
        <main>
          <div className="conts with">
            <h2>Withdrawal Methods</h2>
            <TableContainer>
              <WithdrawalMethodTable
                title="Bitcoin"
                rows={[
                  {
                    info: "Minimum Amount",
                    amount: "£100",
                  },
                  {
                    info: "Maximum Amount",
                    amount: "£1,000,000",
                  },
                  {
                    info: "Charges (Fixed)",
                    amount: "£10",
                  },
                  {
                    info: "Trader Commission",
                    amount: "15% of Profit",
                  },
                  {
                    info: "Duration",
                    amount: "3 Working Days",
                  },
                ]}
              />
              <button onClick={() => setShow(true)}>
                {" "}
                Withdraw in Bitcoin{" "}
              </button>
            </TableContainer>
          </div>

          <WithdrawalTable className="conts">
            <h2>Pending Withdrawals</h2>
            <AdminWithdrawalTable withdrawals={withdrawals} user />
          </WithdrawalTable>
        </main>
        <DashboardFooter drawerOpen={showDrawer} />
      </Container>
    </UserPage>
  );
};

const mapStateToProps = (state) => ({
  userToken: state.user?.userToken,
  userID: state.user?.userDetails?.user_id,
});

const mapDispatchToProps = (dispatch) => ({
  setUserDetails: (userDetails) => dispatch(setUserDetails(userDetails)),
  logUserOut: () => dispatch(logUserOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Withdrawal);
