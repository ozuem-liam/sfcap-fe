import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import UserPage from "../userPage.component";
import DashboardInfoComponent from "../../../components/dashboardInfo/dashboardInfo.component";
import InteractiveChart from "../../../components/interactiveChart/interactiveChart.component";
import DashboardFooter from "../../../components/dashboardFooter/dashboardFooter.component";

import DashboardHeader from "../../../components/dashboardHeader/dashboardHeader.component";
import DashboardCard from "../../../components/dashboardCard/dashboardCard.component";
import { useHistory } from "react-router-dom";
import { setUserDetails, logUserOut } from "../../../redux/user/user.actions";
import axios from "axios";
import { ROOT_URL } from "../../../constant";

const Container = styled.div`
  width: 100vw;
  position: relative;
  & > main {
    padding: 2rem 1rem;
    margin-bottom: 3rem;
  }
  @media screen and (min-width: 768px) {
    & > main {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2rem;
    }
    div.chartCont {
      padding: 0 2rem;
    }
  }
`;

const CardChild = styled.div`
  header {
    padding: 5px 1rem;
  }
  div#tradingview_f8d95 {
    width: 100% !important;
  }
  div#tradingview_f8d95 > div {
    width: 100% !important;
  }
  div#tradingview_f8d95 > div > div {
    width: 100% !important;
  }
`;

const UserDashboard = ({
  currentBalance,
  totalDeposits,
  referralBonus,
  profit,
  userToken,
  setUserDetails,
  logUserOut,
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
      <Container>
        <DashboardHeader
          dashboard
          showDrawer={showDrawer}
          toggleDrawer={toggleDrawer}
        />

        <main>
          <DashboardInfoComponent
            bgColor="#17a2b8"
            afterBgColor="#1491a5"
            amount={currentBalance}
            info="current balance"
          />

          <DashboardInfoComponent
            bgColor="#28a745"
            afterBgColor="#23963d"
            amount={totalDeposits}
            info="total deposits"
          />

          <DashboardInfoComponent
            bgColor="#ffc107"
            afterBgColor="#e5ad06"
            amount={profit}
            info="profit gained (ROI)"
          />

          <DashboardInfoComponent
            bgColor="#dc3545"
            afterBgColor="#c52f3d"
            amount={referralBonus}
            info="referral bonus"
          />
        </main>
        <div className="chartCont">
          <DashboardCard className="chart">
            <CardChild>
              <header>
                <h2>Interactive Area Chart</h2>
                <p>Real Time Trade In Progress</p>
              </header>
              <InteractiveChart />
            </CardChild>
          </DashboardCard>
        </div>
        <DashboardFooter drawerOpen={showDrawer} />
      </Container>
    </UserPage>
  );
};

const mapStateToProps = (state) => ({
  currentBalance: state.user?.userDetails?.balance,
  totalDeposits: state.user?.userDetails?.total_deposits,
  referralBonus: state.user?.userDetails?.referral_bonus
    ? state.user?.userDetails?.referral_bonus
    : 0,
  profit: state.user?.userDetails?.profit,
  userToken: state.user?.userToken,
});

const mapDispatchToProps = (dispatch) => ({
  setUserDetails: (userDetails) => dispatch(setUserDetails(userDetails)),
  logUserOut: () => dispatch(logUserOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);
