import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BiLoaderAlt } from "react-icons/bi";
import axios from "axios";
import { connect } from "react-redux";
import { logUserOut, setUserDetails } from "./../../../redux/user/user.actions";

import UserPage from "../userPage.component";
import DashboardFooter from "../../../components/dashboardFooter/dashboardFooter.component";
import DashboardHeader from "../../../components/dashboardHeader/dashboardHeader.component";
import { useHistory } from "react-router-dom";
import { ROOT_URL } from "../../../constant";

const Container = styled.div`
  width: 100vw;
  position: relative;
  & > main {
    padding: 2rem 1rem;
    margin-bottom: 3rem;
    background-color: #fed383;
    h2 {
      font-size: 2rem;
      padding-left: 10px;
    }
  }
  @media screen and (min-width: 600px) {
    & > main > h2 {
      max-width: 870px;
      margin: 1rem auto;
    }
    form {
      max-width: 850px;
      margin: 0 auto;
      div.labels {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        label {
          width: 45%;
        }
      }
    }
  }
`;

const Form = styled.form`
  margin: 0 10px;
  label {
    display: block;
    margin-bottom: 1.5rem;
    span {
      display: block;
      margin-bottom: 5px;
      font-size: 1.2rem;
      font-weight: 400;
      color: black;
    }
    input {
      display: block;
      padding: 5px 10px;
      border-radius: 5px;
      border: solid 1px #aaa;
      font-size: 1rem;
      width: 100%;
      max-width: 325px;
    }
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
    width: 200px;
    &:disabled {
      background-color: #15193e;
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
  strong {
    display: block;
    font-size: 1rem;
    &.success {
      color: green;
    }
    &.error {
      color: red;
    }
  }
`;

const PaymentDetails = ({ userToken, logUserOut, setUserDetails }) => {
  const [showDrawer, toggleDrawer] = useState(false);
  const [bankDetails, setBankDetails] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory();

  const updateBankDetails = (e) => {
    const { name, value } = e.target;
    setBankDetails({ ...bankDetails, [name]: value });
  };

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

  useEffect(() => {}, [bankDetails]);

  const submitForm = async (e) => {
    e.preventDefault();
    if (!bankDetails.bitcoinWallet) {
      return;
    }
    setError("");
    setIsSubmitting(true);

    let url = `${ROOT_URL}/account/update`;
    let options = {
      headers: {
        "Content-Type": "application/json",
        csrf_token: userToken,
      },
      withCredentials: true,
    };
    const body = {
      wallet_address: bankDetails.bitcoinWallet,
    };

    try {
      let response = await axios.post(url, body, options);

      if (response.data.status === "Success") {
        setBankDetails({
          bankName: "",
          accountName: "",
          accountNo: "",
          bitcoinWallet: "",
        });
        setSuccess(true);
      }
    } catch (e) {
      console.log(e.response);
      if (e.response.status === 403) {
        setTimeout(() => logUserOut(), 500);
        history.push("/login");
      }
      setError("An Error Occurred");
    }
    setIsSubmitting(false);
  };

  return (
    <UserPage showDrawer={showDrawer}>
      <Container>
        <DashboardHeader showDrawer={showDrawer} toggleDrawer={toggleDrawer} />
        <main>
          <h2>Payment Details</h2>
          <Form>
            <div className="labels">
              <label htmlFor="bitcoinWallet">
                <span>Bitcoin Wallet Address</span>
                <input
                  value={bankDetails?.bitcoinWallet}
                  onChange={updateBankDetails}
                  id="bitcoinWallet"
                  name="bitcoinWallet"
                  type="text"
                />
              </label>
            </div>
            {success ? (
              <strong className="success">
                *Your details were uploaded successfully
              </strong>
            ) : error ? (
              <strong className="error">*{error}</strong>
            ) : (
              <strong>*Ensure all details above are filled in correctly</strong>
            )}

            {isSubmitting ? (
              <button disabled>
                <BiLoaderAlt />
              </button>
            ) : (
              <button onClick={submitForm}>Submit</button>
            )}

            <p>Contact Support For Alternative Payment</p>
          </Form>
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

export default connect(mapStateToProps, mapDispatchToProps)(PaymentDetails);
