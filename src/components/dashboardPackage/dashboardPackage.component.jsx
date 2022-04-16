import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import { connect } from "react-redux";
import { BiLoaderAlt } from "react-icons/bi";

import plus from "./../../assets/add.svg";
import minus from "./../../assets/minus.svg";
import { useHistory } from "react-router-dom";
import { logUserOut } from "../../redux/user/user.actions";
import { ROOT_URL } from "../../constant";

const PackageContainer = styled.article`
  margin-bottom: 2rem;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  header {
    padding: 1rem;
    border-radius: 0.5rem 0.5rem 0 0;
    background-color: ${({ color }) => (color ? color : "")};
    display: flex;
    justify-content: space-between;
    align-items: center;
    strong {
      color: #fff;
      font-size: 1.4rem;
    }
    img {
      width: 30px;
    }
  }
  div.info {
    padding: 1rem;
    text-align: center;
    border: solid 1px ${({ color }) => (color ? color : "")};
    border-top: none;
    border-radius: 0 0 0.5rem 0.5rem;
    p,
    label {
      color: ${({ color }) => (color ? color : "")};
      font-weight: 500;
      font-size: 1.2rem;
    }
    p {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    label {
      display: block;
      margin-bottom: 5px;
      text-align: center;
      span {
        display: block;
      }
    }
    input {
      display: inline-block;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
    }
    input,
    select {
      padding: 5px 10px;
      font-size: 1rem;
      margin-bottom: 1rem;
      border-radius: 5px;
      border: solid 1px #767676;
    }
    select {
      padding: 5px 1.5rem;
      option {
        background-color: ${({ color }) => (color ? color : "")};
        color: #fff;
      }
    }
    strong {
      color: ${({ color }) => (color ? color : "")};
      font-size: 1rem;
      display: block;
      text-align: center;
    }
    button {
      border: none;
      display: inline-block;
      margin-left: auto;
      margin-right: auto;
      width: 150px;
      font-size: 1rem;
      padding: 10px 1rem;
      background-color: ${({ color }) => (color ? color : "")};
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
  }
  @media screen and (min-width: 700px) {
    width: 45%;
  }
  @media screen and (min-width: 1100px) {
    width: 30%;
  }
`;

const DashboardPackage = ({
  price,
  title,
  color,
  startState,
  userToken,
  traders,
  logUserOut,
  first,
  last,
  plan_type,
}) => {
  const [showPackage, togglePackage] = useState(startState || false);
  const [amount, setAmount] = useState(price.min);
  const [amountError, setAmountError] = useState(false);
  const [insufficientBalance, setInsufficientBalance] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const history = useHistory();

  const submitForm = async (e) => {
    e.preventDefault();
    if (amount < price.min || amount > price.max) {
      return setAmountError(true);
    } else {
      setAmountError(false);
      setError(false);
      setInsufficientBalance(false);
    }

    setIsSubmitting(true);

    const body = {
      roi_rate: price.roi,
      amount,
      plan_type,
    };

    let url = `${ROOT_URL}/user/activate_package`;
    let options = {
      headers: {
        "Content-Type": "application/json",
        csrf_token: userToken,
      },
      withCredentials: true,
    };

    try {
      let response = await axios.post(url, body, options);
      if (response.data.status === "Success") {
        setInsufficientBalance(false);
        setSuccess(true);
      }
    } catch (e) {
      if (e.response.status === 403) {
        setTimeout(() => logUserOut(), 500);
        history.push("/login");
      }
      if (e.response.status === 401) {
        setInsufficientBalance(true);
      } else {
        setError(true);
      }
    }

    setIsSubmitting(false);
  };

  return (
    <PackageContainer open={showPackage} color={color}>
      <header>
        <strong>{title}</strong>
        <img
          onClick={() => togglePackage(!showPackage)}
          src={showPackage ? minus : plus}
          alt="open"
        />
      </header>
      <SlideDown className={"my-dropdown-slidedown"}>
        {showPackage ? (
          <div className="info">
            <p>
              <span>Minimum</span>
              <span>£{price.min}</span>
            </p>
            {!last ? (
              <p>
                <span>Maximum</span>
                <span>
                  {price.max === Number.MAX_SAFE_INTEGER
                    ? "Above £10000"
                    : `£${price.max}`}
                </span>
              </p>
            ) : (
              <></>
            )}

            <p>
              <span>ROI</span>
              <span>{price.interest}</span>
            </p>
            <p>
              <span>Traders</span>
              <span>
                {traders === 0
                  ? "No free traders"
                  : traders === -1
                  ? "Unlimited free traders"
                  : `${traders} free traders`}
              </span>
            </p>
            <form>
              {first ? (
                <label>
                  An additional £150 would be added to your fee as this package
                  does not come with a free trader
                </label>
              ) : (
                <></>
              )}

              <label htmlFor="amount">
                Enter Amount <span> (£{price.min} default ) </span>
              </label>
              <input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                type="number"
                id="amount"
                name="amount"
              />
              {success ? (
                <strong>This package has been activated successfully</strong>
              ) : (
                <></>
              )}
              {amountError ? (
                <strong>The amount entered is not fit for this plan.</strong>
              ) : (
                <></>
              )}
              {insufficientBalance ? (
                <strong>Insufficient Funds</strong>
              ) : (
                <></>
              )}
              {error ? (
                <strong>An error occured. Please try again shortly</strong>
              ) : (
                <></>
              )}
              {isSubmitting ? (
                <button disabled>
                  <BiLoaderAlt />
                </button>
              ) : (
                <button onClick={submitForm}> Join Plan </button>
              )}
            </form>
          </div>
        ) : (
          <></>
        )}
      </SlideDown>
    </PackageContainer>
  );
};

const mapStateToProps = (state) => ({
  userToken: state.user.userToken,
});

const mapDispatchToProps = (dispatch) => ({
  logUserOut: () => dispatch(logUserOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPackage);
