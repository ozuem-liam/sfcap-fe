import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { connect } from "react-redux";
import axios from "axios";

import UserPage from "../userPage.component";
import DashboardFooter from "../../../components/dashboardFooter/dashboardFooter.component";
import DashboardHeader from "../../../components/dashboardHeader/dashboardHeader.component";
import { useHistory } from "react-router-dom";
import { setUserDetails, logUserOut } from "../../../redux/user/user.actions";
import { ROOT_URL } from "../../../constant";

const Container = styled.div`
  width: 100vw;
  position: relative;
  & > main {
    padding: 2rem;
    padding-bottom: 5rem;
    background-color: #fed383;
    min-height: 540px;
    div.center {
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      div {
        text-align: center;
      }
    }
    h2 {
      font-size: 2rem;
    }
    p.wallet {
      span {
        &:first-child {
          font-size: 1.4rem;
          color: blue;
          text-decoration: underline;
          cursor: pointer;
          margin-bottom: 10px;
        }
        &:last-child {
          font-size: 1rem;
          display: block;
        }
      }
    }
    p.info {
      span {
        display: block;
        font-weight: 600;
        &:first-child {
          font-size: 1.2rem;
          margin-bottom: 1rem;
        }
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

  th,
  td {
    padding: 10px;
    text-align: center;
    color: #fff;
  }
  table {
    width: 100%;
  }
`;

const Referrals = ({
  referral,
  referralCode,
  userToken,
  setUserDetails,
  logUserOut,
}) => {
  const [showDrawer, toggleDrawer] = useState(false);
  const [hint, setHint] = useState(1);
  const [referrals, setReferrals] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (!userToken) {
      history.push("/login");
    } else {
      const getData = async () => {
        let url = `${ROOT_URL}/refers`;
        const options = {
          headers: {
            "Content-Type": "application/json",
            csrf_token: userToken,
          },
          withCredentials: true,
        };

        try {
          let response = await axios.get(url, options);
          console.log(response);
          if (response.status === 200) {
            setReferrals(response.data);
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
      getData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (e) => {
    setHint(2);
    setTimeout(() => {
      setHint(1);
    }, 5000);
  };
  return (
    <UserPage showDrawer={showDrawer}>
      <Container>
        <DashboardHeader showDrawer={showDrawer} toggleDrawer={toggleDrawer} />
        <main>
          <div className="center">
            <div>
              <h2>Referral Link</h2>
              <p className="info">
                <span>Follow these 3 simple steps:</span>
                <span>1. Invite a friend</span>
                <span>
                  2. Ask your referral to get through to us through our live
                  chat; send us your referral Id.
                </span>
                <span>3. Get 5% commission of referral's total deposit.</span>
              </p>
              <p className="wallet">
                <CopyToClipboard text={referralCode} onCopy={handleClick}>
                  <span>{referralCode}</span>
                </CopyToClipboard>
                {hint === 1 ? (
                  <span>Click to copy referral link</span>
                ) : (
                  <span>Copied</span>
                )}
              </p>
              {referrals[0] ? (
                <TableContainer>
                  <table>
                    <thead>
                      <tr>
                        <th>Referee Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      {referrals.map((referral, index) => (
                        <tr key={index}>
                          <td>{referral.email}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </TableContainer>
              ) : (
                <strong> No Data Available</strong>
              )}
            </div>
          </div>
        </main>
        <DashboardFooter drawerOpen={showDrawer} />
      </Container>
    </UserPage>
  );
};

const mapStateToProps = (state) => ({
  referral: state.user?.userDetails?.referral,
  referralCode: state.user?.userDetails?.referral_code,
  userToken: state.user?.userToken,
});

const mapDispatchToProps = (dispatch) => ({
  setUserDetails: (userDetails) => dispatch(setUserDetails(userDetails)),
  logUserOut: () => dispatch(logUserOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Referrals);
