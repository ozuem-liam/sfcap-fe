/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { BiLoaderAlt } from "react-icons/bi";
import { connect } from "react-redux";
import {
  setAdminTokens,
  setAdminWithdrawals,
} from "./../../../redux/admin/admin.actions";
import { ROOT_URL } from "../../../constant";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  /* background-color: #4d57c1; */
  background-image: linear-gradient(
      rgba(0, 180, 174, 0.5),
      rgba(0, 180, 174, 0.5)
    ),
    url("https://images.unsplash.com/photo-1591994843349-f415893b3a6b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 2rem 1rem;
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
      color: #00b4ae;
      text-align: center;
      margin-bottom: 2rem;
      font-weight: 500;
      text-transform: uppercase;
    }
    strong {
      display: block;
      text-align: center;
      font-size: 1.2rem;
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
      input {
        font-size: 1rem;
        padding: 0.5rem 1rem;
        border: none;
        border: solid 1px #ddd;
        border-radius: 6px;
        width: 100%;
        &:focus {
          outline: none;
          border: solid 1px #00b4ae;
        }
      }
    }
    & > button {
      background-color: #00b4ae;
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
        color: #4d57c1;
        text-decoration: none;
      }
      button {
        color: #4d57c1;
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

const AdminLoginPage = ({ setAdminTokens, setAdminWithdrawals }) => {
  const [forgotPassword, toggleForgotPassword] = useState(false);
  const [loginDetails, setLoginDetails] = useState(null);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resetPasswordStatus, setResetPasswordStatus] = useState("");

  const history = useHistory();

  const handleForgotPassword = (e) => {
    e.preventDefault();
    toggleForgotPassword(!forgotPassword);
  };

  const updateLoginDetails = (e) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    if (!loginDetails.email || !loginDetails.password) {
      return;
    } else {
      setError(false);
    }
    setIsSubmitting(true);

    let url = `${ROOT_URL}/auth/admin`;
    let options = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    try {
      let response = await axios.post(url, loginDetails, options);
      if (response.data.status === "Success") {
        setAdminTokens({
          token: response.data.admin_csrf_token,
          refToken: response.data.admin_csrf_refresh_token,
        });
        history.push("/admin/dashboard");
      }
    } catch (e) {
      if (e.response.status === 401) {
        setError(e.response.data.message);
      }
    }

    setIsSubmitting(false);
  };

  const submitForgotPassword = async (e) => {
    e.preventDefault();
    if (!loginDetails.email) {
      return;
    }
    setIsSubmitting(true);

    const body = { email: loginDetails.email };
    const url = `${ROOT_URL}/auth/resetpassword`;
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios.post(url, body, options);
      if (response.data.status === "success") {
        setResetPasswordStatus("success");
      }
    } catch (e) {}
    setIsSubmitting(false);
  };

  useEffect(() => {}, [loginDetails]);

  return (
    <Container>
      <form>
        <header>{forgotPassword ? "Reset Password" : "Admin Log In"}</header>
        {forgotPassword ? (
          <label htmlFor="email">
            <span>Email Address</span>
            <input
              value={loginDetails?.email}
              onChange={updateLoginDetails}
              id="email"
              name="email"
              type="email"
            />
          </label>
        ) : (
          <>
            <label htmlFor="email">
              <span>Email Address</span>
              <input
                value={loginDetails?.email}
                onChange={updateLoginDetails}
                id="email"
                name="email"
                type="email"
              />
            </label>
            <label htmlFor="password">
              <span>Password</span>
              <input
                value={loginDetails?.password}
                onChange={updateLoginDetails}
                id="password"
                name="password"
                type="password"
              />
            </label>

            {/* <label className="remember" htmlFor="remember">
              <input id="remember" name="remember" type="checkbox" />
              <span>Remember Me</span>
            </label> */}
          </>
        )}

        {error ? <strong>*{error}</strong> : <></>}

        {isSubmitting ? (
          <button disabled>
            <BiLoaderAlt />
          </button>
        ) : (
          <button onClick={forgotPassword ? submitForgotPassword : submitLogin}>
            {forgotPassword ? "Submit" : "Log In"}
          </button>
        )}

        <div>
          {/* {forgotPassword ? (
            <p>
              Have an account?{" "}
              <button onClick={handleForgotPassword}>Click Here</button>
            </p>
          ) : (
            <p>
              Forgot Password?{" "}
              <button onClick={handleForgotPassword}>Click Here</button>
            </p>
          )} */}
        </div>
      </form>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  adminToken: state?.admin?.adminToken,
});

const mapDispatchToProps = (dispatch) => ({
  setAdminTokens: (adminTokens) => dispatch(setAdminTokens(adminTokens)),
  setAdminWithdrawals: (withdrawals) =>
    dispatch(setAdminWithdrawals(withdrawals)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminLoginPage);
