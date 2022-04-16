import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import axios from "axios";

import UserPage from "../userPage.component";
import DashboardFooter from "../../../components/dashboardFooter/dashboardFooter.component";
import DashboardHeader from "../../../components/dashboardHeader/dashboardHeader.component";
import { Link, useHistory } from "react-router-dom";
import { setUserDetails, logUserOut } from "../../../redux/user/user.actions";
import { ROOT_URL } from "../../../constant";

const Container = styled.div`
  width: 100vw;
  position: relative;
  & > main {
    padding: 2rem 1rem;
    padding-bottom: 5rem;
    background-color: #fed383;
    min-height: 490px;
    h2 {
      font-size: 2rem;
      padding-left: ${({ active }) => (active ? "" : "1rem")};
      max-width: 1050px;
      margin-left: auto;
      margin-right: auto;
    }
    div.package-container {
      padding-left: 1rem;
      strong {
        font-size: 1.2rem;
        display: block;
      }
      a {
        display: inline-block;
        text-decoration: none;
        font-size: 1rem;
        padding: 10px 1rem;
        background-color: #00b4ae;
        border: none;
        border-radius: 5px;
        margin-top: 10px;
        color: white;
      }
    }
  }
`;

const TableContainer = styled.div`
  background-color: #fff;
  width: 100%;
  overflow-x: auto;
  border-radius: 5px;
  background-color: #262626;
  max-width: 1050px;
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

const CurrentPackage = ({
  active_plans,
  userToken,
  logUserOut,
  setUserDetails,
}) => {
  const [showDrawer, toggleDrawer] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (!userToken) {
      history.push("/login");
    } else {
      const getDashboardData = async () => {
        const url = `${ROOT_URL}/dashboard`;
        const options = {
          headers: {
            "Content-Type": "application/json",
            csrf_token: userToken,
          },
          withCredentials: true,
        };

        try {
          const response = await axios.get(url, options);
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
      getDashboardData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UserPage showDrawer={showDrawer}>
      <Container active={active_plans}>
        <DashboardHeader showDrawer={showDrawer} toggleDrawer={toggleDrawer} />
        <main>
          <h2>Current Package</h2>
          {active_plans ? (
            <TableContainer>
              <table>
                <thead>
                  <tr>
                    <th>Amount</th>
                    <th>Duration</th>
                    <th>Status</th>
                    <th>ROI Rate</th>
                    <th>Date Created</th>
                  </tr>
                </thead>
                <tbody>
                  {active_plans.map((plan, index) => {
                    const date = new Date(plan.datecreated);
                    return (
                      <TableRow status={plan.is_active} key={index}>
                        <td>{plan.amount}</td>
                        <td>{plan.duration} days</td>
                        <td>
                          <div>{plan.is_active ? "Active" : "Inactive"}</div>
                        </td>
                        <td>{plan.roi_rate * 100}%</td>
                        <td>{date.toDateString()}</td>
                      </TableRow>
                    );
                  })}
                </tbody>
              </table>
            </TableContainer>
          ) : (
            <div className="package-container">
              <strong>You do not have an active plan</strong>
              <Link to="/user/activatepackage">Please Choose A Plan</Link>
            </div>
          )}
        </main>
        <DashboardFooter drawerOpen={showDrawer} />
      </Container>
    </UserPage>
  );
};

const mapStateToProps = (state) => ({
  active_plans: state.user?.userDetails?.active_plans,
  userToken: state.user?.userToken,
});

const mapDispatchToProps = (dispatch) => ({
  setUserDetails: (userDetails) => dispatch(setUserDetails(userDetails)),
  logUserOut: () => dispatch(logUserOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentPackage);
