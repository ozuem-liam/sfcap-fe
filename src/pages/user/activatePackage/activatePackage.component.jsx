import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import UserPage from "../userPage.component";
import DashboardFooter from "../../../components/dashboardFooter/dashboardFooter.component";
import DashboardHeader from "../../../components/dashboardHeader/dashboardHeader.component";
import DashboardPackage from "../../../components/dashboardPackage/dashboardPackage.component";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { setUserDetails, logUserOut } from "../../../redux/user/user.actions";
import { ROOT_URL } from "../../../constant";

const Container = styled.div`
  width: 100vw;
  position: relative;
  & > main {
    padding: 2rem 1rem;
    padding-bottom: 4rem;
    background-color: #fed383;

    h2 {
      font-size: 2rem;
      max-width: 1250px;
      margin-left: auto;
      margin-right: auto;
    }
    div.package-container {
      max-width: 1250px;
      margin-left: auto;
      margin-right: auto;
      strong {
        display: block;
        font-size: 1.4rem;
        margin-bottom: 2rem;
      }
    }
  }
  @media screen and (min-width: 700px) {
    & > main {
      div.package-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        & > strong {
          width: 100%;
          display: block;
        }
      }
    }
  }
`;

const ActivatePackage = ({ userToken, logUserOut, setUserDetails }) => {
  const [showDrawer, toggleDrawer] = useState(false);
  const history = useHistory();
  useEffect(() => {
    if (!userToken) {
      history.push("/login");
    } else {
      const getDashboardData = async () => {
        const url = `${ROOT_URL}/api/dashboard`;
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
        <DashboardHeader showDrawer={showDrawer} toggleDrawer={toggleDrawer} />
        <main>
          <h2>Activate Package</h2>
          <div className="package-container">
            <strong>
              DISCLAIMER: Every package has a duration of 1 month (20 working
              days). The 10 exempted days are due to the market closure on
              Saturdays and Sundays.
            </strong>
            <DashboardPackage
              title="Plan 1"
              price={{
                min: 500,
                max: 5000,
                interest: "100% Monthly ROI",
                roi: 1,
              }}
              traders={0}
              startState={true}
              color="#b37502"
              first
              plan_type="plan1"
            />

            <DashboardPackage
              title="Plan 2"
              price={{
                min: 5000,
                max: 10000,
                interest: "125% Monthly ROI",
                roi: 1.25,
              }}
              traders={5}
              startState={false}
              color="#b37502"
              plan_type="plan2"
            />

            <DashboardPackage
              title="Plan 3"
              price={{
                min: 10000,
                max: 50000,
                interest: "150% Monthly ROI",
                roi: 1.5,
              }}
              traders={7}
              startState={false}
              color="#b37502"
              plan_type="plan3"
            />

            <DashboardPackage
              title="Plan 4"
              price={{
                min: 50000,
                max: 100000,
                interest: "200% Monthly ROI",
                roi: 2.0,
              }}
              traders={10}
              startState={false}
              color="#b37502"
              plan_type="plan4"
            />

            <DashboardPackage
              title="Plan 5"
              price={{
                min: 100000,
                max: 500000,
                interest: "300% Monthly ROI",
                roi: 3.0,
              }}
              traders={15}
              startState={false}
              durationOptions={["5 days"]}
              color="#b37502"
              plan_type="plan5"
            />

            <DashboardPackage
              title="Plan 6"
              price={{
                min: 500000,
                max: 1000000,
                interest: "400% Monthly ROI",
                roi: 4.0,
              }}
              traders={-1}
              startState={false}
              color="#b37502"
              last
              plan_type="plan6"
            />
          </div>
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
  setUserDetails: (userDetails) => dispatch(setUserDetails(userDetails)),
  logUserOut: () => dispatch(logUserOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ActivatePackage);
