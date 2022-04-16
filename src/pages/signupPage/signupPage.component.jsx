import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { BiLoaderAlt } from "react-icons/bi";

import countries from "./countries.js";
import { ROOT_URL as BASE_BACKEND_URL } from "../../constant";

const Container = styled.div`
.index-nav-wrap-pc {
  margin: 0 auto;
  position: relative;
}
.logo {
  position: absolute;
  top: 30px;
  left: 11%;
  width: 100px;
  height: 4.2rem;
  cursor: pointer;
}

.login-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
.login-content>div:last-child {
  flex: 1 1 55%;
}
.content-wrap-pc {
  min-height: 492px;
}
/* background-color: #4d57c1; */
background-image: linear-gradient(
    rgba(0, 180, 174, 0.5),
    rgba(0, 180, 174, 0.5)
  ),
  url("https://images.unsplash.com/photo-1591994843349-f415893b3a6b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80");
background-repeat: no-repeat;
background-size: cover;
padding: 2rem 1rem;

  div.success,
  div.failure {
    color: green;
    width: 100%
    padding: 0.5rem;
    position: relative;
    border-bottom: solid 4px darkgreen;
    z-index: 12;
    strong {
      font-size: 0.8rem;
      color: green;
      display: flex;
    }
  }
  div.failure {
    color: red;
    border-bottom: solid 4px darkred;
    strong {
      font-size: 0.8rem;
      color: red;
      display: flex;
    }
  }
  form {
    background-color: white;
    margin-top: 4rem;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    padding: 1rem;
    width: 100%;
    text-align: center;
    header {
      font-size: 2.3rem;
      color: #007CFF;
      text-align: center;
      margin-bottom: 2rem;
      font-weight: 500;
      text-transform: uppercase;
    }
    label {
      display: block;
      margin-bottom: 1rem;
      &.remember {
        display: flex;
        align-items: center;
        input {
          display: inline-block;
          width: auto;
          margin-right: 5px;
        }
        span {
          margin: 0;
        }
      }
      span {
        font-size: 1rem;
        display: block;
        margin-bottom: 5px;
        text-align: left;
      }
      input, 
      select {
        font-size: 1rem;
        padding: 0.5rem 1rem;
        border: none;
        border: solid 1px #ddd;
        border-radius: 6px;
        width: 100%;
        &:focus {
          outline: none;
          border: solid 1px #007CFF;
        }
      
      }
      &.note {
        text-align: left;
        span {
          color: red;
          display: inline;
        }
      }
    }
    & > button {
      background-color: #007CFF;
      display: inline-block;
      margin-top: 1rem;
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      border: none;
      color: white;
      border-radius: 5px;
      width: 200px;
      padding: 0.7rem 1rem;
      font-weight: 500;
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
    div {
      p {
        margin: 10px 0;
      }
      a {
        color: #007CFF;
        text-decoration: none;
      }
      button {
        color: #007CFF;
        padding: 0;
        margin: 0;
        border: none;
        background-color: transparent;
        font-size: 1rem;
      }
    }
  }

  @media screen and (min-width: 600px) {
    form {
      padding: 2rem;
    }
  }
`;

const SignupPage = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [passwordError, setPasswordError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [signupStatus, setSignUpStatus] = useState("");

  const history = useHistory();

  const countryOptions = countries.map((country, index) => (
    <option key={index} value={country}>
      {country}
    </option>
  ));

  const updateUserInfo = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    if (
      !userInfo.name ||
      !userInfo.email ||
      !userInfo.phonenumber ||
      !userInfo.password ||
      !userInfo.confirmPassword ||
      !userInfo.country
    ) {
      setSignUpStatus("fail");
      return;
    }

    setIsSubmitting(true);
    const details = { ...userInfo };
    delete details["confirmPassword"];

    if (userInfo.referralId) {
      details["ref_id"] = userInfo.referralId;
    }

    const url = `${BASE_BACKEND_URL}/register`;
    const options = {
      headers: { "Content-Type": "application/json" },
    };

    try {
      const response = await axios.post(url, details, options);
      if (response.status.toString().charAt(0) === "2") {
        window.scrollTo(0, 0);
        setSignUpStatus("success");
        setTimeout(() => history.push("/login"), 3000);
      }
    } catch (e) {
      setSignUpStatus("fail");
    }

    setIsSubmitting(false);
  };

  useEffect(() => {}, [userInfo]);

  useEffect(() => {
    if (userInfo?.password !== userInfo?.confirmPassword) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  }, [userInfo?.password, userInfo?.confirmPassword]);

  return (
    <Container>
      <div>
      <div className="login-content">
      <div className="content-wrap-pc">
      <div>
      <form>
        <header>Sign Up As A Member</header>
        {signupStatus ? (
        signupStatus === "success" ? (
          <div className="success">
            <strong>Signed Up Successfully</strong>
            <strong>Check your email for a confirmation message</strong>
          </div>
        ) : (
          <div className="failure">
            <strong>Signup Unsuccessful</strong>
          </div>
        )
      ) : (
        <></>
      )}
        <label htmlFor="name">
          <span>*Full Name</span>
          <input
            value={userInfo?.name}
            onChange={updateUserInfo}
            id="name"
            name="name"
            type="text"
          />
        </label>
        <label htmlFor="email">
          <span>*Email</span>
          <input
            value={userInfo?.email}
            onChange={updateUserInfo}
            id="email"
            name="email"
            type="email"
          />
        </label>
        <label htmlFor="phone">
          <span>*Phone No.</span>
          <input
            value={userInfo?.phonenumber}
            onChange={updateUserInfo}
            id="phone"
            name="phonenumber"
            type="tel"
          />
        </label>
        <label htmlFor="password">
          <span>*Password</span>
          <input
            value={userInfo?.password}
            onChange={updateUserInfo}
            id="password"
            name="password"
            type="password"
          />
        </label>
        <label htmlFor="confirmPassword">
          <span>*Confirm Password</span>
          <input
            value={userInfo?.confirmPassword}
            onChange={updateUserInfo}
            id="confirmPassword"
            name="confirmPassword"
            type="password"
          />
        </label>
        <label htmlFor="referralId">
          <span>Referral ID</span>
          <input
            value={userInfo?.ref_id}
            onChange={updateUserInfo}
            id="referralId"
            name="ref_id"
            type="text"
          />
        </label>
        <label htmlFor="country">
          <span>*Country</span>
          <select
            value={userInfo?.country}
            onChange={updateUserInfo}
            id="country"
            name="country"
          >
            <option value="select country" hidden defaultValue>
              Select the country
            </option>
            {countryOptions}
          </select>
        </label>
        <label className="note">
          <span>*</span> All fields with * are required
        </label>
        {passwordError ? (
          <label className="note">
            <span>*</span> Password Mismatch
          </label>
        ) : (
          <></>
        )}

        {isSubmitting ? (
          <button disabled>
            <BiLoaderAlt />
          </button>
        ) : (
          <button onClick={submitForm}><span>Sign Up</span></button>
        )}

        <div>
          <p>
            Already have an account? <Link to="/login">Log In</Link>
          </p>
        </div>
      </form>
      </div>
      </div>
      </div>
      </div>
    </Container>
  );
};

export default SignupPage;
