import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { connect } from "react-redux";

import UserPage from "../userPage.component";
import DashboardFooter from "../../../components/dashboardFooter/dashboardFooter.component";
import DashboardHeader from "../../../components/dashboardHeader/dashboardHeader.component";
import { useHistory } from "react-router-dom";
import { logUserOut, setUserDetails } from "../../../redux/user/user.actions";
import { ROOT_URL } from "../../../constant";

const Container = styled.div`
  width: 100vw;
  position: relative;
  & > main {
    padding: 2rem 1rem;
    padding-bottom: 5rem;
    background-color: #fed383;
    min-height: 540px;
    h2 {
      font-size: 2rem;
      max-width: 1050px;
      margin-left: auto;
      margin-right: auto;
    }
    button {
      border: none;
      font-size: 1rem;
      padding: 10px 1rem;
      background-color: blue;
      border: none;
      border-radius: 5px;
      margin-top: 10px;
      color: white;
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

const Transaction = ({ userToken, logUserOut, setUserDetails }) => {
  const [showDrawer, toggleDrawer] = useState(false);
  const [ROIs, setROI] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (!userToken) {
      history.push("/login");
    } else {
      const getRoi = async () => {
        let url = `${ROOT_URL}/roi`;
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
            setROI(response.data);
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
      getRoi();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UserPage showDrawer={showDrawer}>
      <Container>
        <DashboardHeader showDrawer={showDrawer} toggleDrawer={toggleDrawer} />
        <main>
          <h2>Return Of Investment (ROI)</h2>
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
                {ROIs.map((roi, index) => {
                  const date = new Date(roi.datecreated);
                  return (
                    <TableRow status={roi.is_active} key={index}>
                      <td>{roi.amount}</td>
                      <td>{roi.duration} days</td>
                      <td>
                        <div>{roi.is_active ? "Active" : "Inactive"}</div>
                      </td>
                      <td>{roi.roi_rate * 100}%</td>
                      <td>{date.toDateString()}</td>
                    </TableRow>
                  );
                })}
              </tbody>
            </table>
          </TableContainer>
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

export default connect(mapStateToProps, mapDispatchToProps)(Transaction);
