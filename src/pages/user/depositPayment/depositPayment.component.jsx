import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { BiLoaderAlt } from "react-icons/bi";
import axios from "axios";

import UserPage from "../userPage.component";
import DashboardFooter from "../../../components/dashboardFooter/dashboardFooter.component";
import DashboardHeader from "../../../components/dashboardHeader/dashboardHeader.component";
import PaymentMethod from "../../../components/paymentMethod/paymentMethod.component";
import { logUserOut } from "../../../redux/user/user.actions";
import { ROOT_URL } from "../../../constant";

const Container = styled.div`
  width: 100vw;
  position: relative;
  div.help {
    background-color: #323340;
    width: 100%;
    padding: 1rem;
    p {
      display: block;
      color: white;
      font-weight: 600;
    }
    a {
      color: green;
      display: block;
      font-weight: 600;
    }
  }
  & > main {
    padding: 2rem 1rem;
    padding-bottom: 6rem;
    background-color: #fed383;
    & > h2 {
      font-size: 1.2rem;
    }

    strong {
      font-size: 1.4rem;
      color: #ab003c;
    }
    p {
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
  }
  @media screen and (min-width: 700px) {
    & > main {
      display: flex;
      justify-content: space-between;
      div.top,
      form {
        width: 45%;
      }
      div.top {
        padding-top: 4rem;
        padding-left: 2rem;
      }
    }
  }
`;

const Proof = styled.form`
  position: relative;
  div.success,
  div.failure {
    background-color: green;
    padding: 0.5rem;
    position: sticky;
    border-radius: 0;
    top: 0;
    right: 0;
    border-bottom: solid 4px darkgreen;
    width: 300px;
    strong {
      font-size: 1.2rem;
      color: white;
    }
  }
  div.failure {
    background-color: red;
    border-bottom: solid 4px darkred;
  }
  h2 {
    font-size: 2rem;
  }
  button {
    border: none;
    font-size: 16px;
    padding: 10px 1rem;
    background-color: #00b4ae;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
    color: white;
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
      width: 250px;
      font-size: 1rem;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
      &#payment {
        padding: 0;
      }
    }
  }
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: solid 1px #ced4da;
    border-radius: 10px;
    span {
      font-size: 16px;
      padding: 10px;
    }
  }
  strong {
    display: block;
    text-align: center;
  }
`;

const DepositPayment = (props) => {
  const [showDrawer, toggleDrawer] = useState(false);
  const [hash, setHash] = useState("");
  const [finalFile, setFinalFile] = useState("");
  const [filePath, setFilePath] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const { userPackage, userToken, wallet, logUserOut } = props;
  const amount = props.location?.state?.amount;

  const handleChange = (e) => {
    setFilePath(e.target.value);
    setFinalFile(e.target.files[0]);
  };

  const submitPayment = async (e) => {
    e.preventDefault();
    // if (!userPackage) {
    //   return setPackageError(true);
    // } else {
    //   setPackageError(false);
    // }
    if (!finalFile || !hash || !amount) {
      return;
    }
    setError("");
    setIsSubmitting(true);
    setPaymentStatus("");

    let imageLink = "";
    const CLOUDINARY_URL =
      "	https://api.cloudinary.com/v1_1/stripeoption/upload";
    const CLOUDINARY_UPLOAD_PRESET = "uor1vxdt";
    let formData = new FormData();

    let date = new Date().getTime().toString();
    date = "PayProof" + date;
    formData.append("file", finalFile, date);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    let url = `${ROOT_URL}/payment/proof`;
    let options = {
      headers: {
        "Content-Type": "application/json",
        csrf_token: userToken,
      },
      withCredentials: true,
    };

    try {
      let response = await axios.post(CLOUDINARY_URL, formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      imageLink = response.data.secure_url;
      const body = userPackage
        ? {
            payment_mode: "Bitcoin",
            hash_key: hash,
            package_type: userPackage,
            amount_paid: amount,
            screenshot: imageLink,
          }
        : {
            payment_mode: "Bitcoin",
            hash_key: hash,
            //package_type: userPackage,
            amount_paid: amount,
            screenshot: imageLink,
          };

      response = await axios.post(url, body, options);
      console.log(response);
      if (response.data.status === "Success") {
        setPaymentStatus("success");
        setTimeout(() => history.push("/user/deposit"), 3000);
      }
    } catch (e) {
      console.log(e.response);
      if (
        e.response.data.status === "Unauthorized" ||
        e.response.status === 401
      ) {
        setError(e.response.data.message);
      } else if (e.response.status === 403) {
        setTimeout(() => logUserOut(), 500);
        history.push("/login");
      } else {
        setPaymentStatus("failure");
      }
    }

    setIsSubmitting(false);
  };

  useEffect(() => {
    if (!userToken) {
      history.push("/login");
    }
    if (!amount && userToken) {
      history.push("/user/deposit");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <UserPage showDrawer={showDrawer}>
      <Container>
        <DashboardHeader showDrawer={showDrawer} toggleDrawer={toggleDrawer} />
        <div className="help">
          <p>
            Having Issues Buying any Cryptocurrency [Bitcoin] Kindly Buy From{" "}
          </p>
          <a
            href="http://changelly.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://changelly.com
          </a>
        </div>
        <main>
          <div className="top">
            <strong>
              You are to pay £{amount} using your preferred payment method below
            </strong>
            <div className="methods">
              <PaymentMethod title="Bitcoin Wallet" walletAddress={wallet} />
            </div>
          </div>
          <hr></hr>
          <Proof>
            {paymentStatus ? (
              paymentStatus === "success" ? (
                <div className="success">
                  <strong>Submission of Payment Proof Successful</strong>
                </div>
              ) : (
                <div className="failure">
                  <strong>Submission of Payment Proof Unsuccessful</strong>
                </div>
              )
            ) : (
              <></>
            )}
            {error ? (
              <div className="failure">
                <strong>{error}</strong>
              </div>
            ) : (
              <></>
            )}
            <h2>Proof of Payment Verification</h2>
            <label htmlFor="hashKey">
              <span>Hash Key</span>
              <input
                value={hash}
                onChange={(e) => setHash(e.target.value)}
                id="hashKey"
                name="hashKey"
                type="text"
              />
            </label>
            <label htmlFor="amount">
              <span>Amount To Be Paid</span>
              <input
                id="amount"
                name="amount"
                type="number"
                disabled
                value={amount}
              />
            </label>

            <label htmlFor="payment">
              <span>Proof of Payment</span>
              <input
                id="payment"
                accept=".png,.jpg,.jpeg"
                name="payment"
                type="file"
                value={filePath}
                onChange={handleChange}
              />
            </label>
            {isSubmitting ? (
              <button disabled>
                <BiLoaderAlt />
              </button>
            ) : (
              <button onClick={submitPayment}> Submit Payment</button>
            )}
          </Proof>
        </main>
        <DashboardFooter drawerOpen={showDrawer} />
      </Container>
    </UserPage>
  );
};

const mapStateToProps = (state) => ({
  userPackage: state.user?.userDetails?.current_plan,
  userToken: state.user?.userToken,
  wallet: state.user?.userDetails?.wallet,
});

const mapDispatchToProps = (dispatch) => ({
  logUserOut: () => dispatch(logUserOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DepositPayment);
