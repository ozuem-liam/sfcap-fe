import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { BiLoaderAlt } from "react-icons/bi";
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
  position: relative;
  div.success,
  div.failure {
    background-color: green;
    padding: 0.5rem;
    position: fixed;
    top: 0;
    right: 0;
    border-bottom: solid 4px darkgreen;
    strong {
      font-size: 0.8rem;
      color: white;
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
      color: #00b4ae;
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
          border: solid 1px #00b4ae;
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

const AdminSignupPage = () => {
  const [adminInfo, setAdminInfo] = useState(null);
  const [passwordError, setPasswordError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [signupStatus, setSignUpStatus] = useState("");

  const history = useHistory();

  const updateAdminInfo = (e) => {
    const { name, value } = e.target;
    setAdminInfo({ ...adminInfo, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    if (
      !adminInfo.name ||
      !adminInfo.email ||
      !adminInfo.password ||
      !adminInfo.confirmPassword
    ) {
      return;
    }
    setIsSubmitting(true);
    const details = { ...adminInfo };
    delete details["confirmPassword"];

    const url = `${ROOT_URL}/admin/register`;
    const options = {
      headers: { "Content-Type": "application/json" },
    };

    try {
      const response = await axios.post(url, details, options);
      if (response.data.status === "Success") {
        setSignUpStatus("success");
        setTimeout(() => history.push("/admin/login"), 3000);
      }
    } catch (e) {
      setSignUpStatus("fail");
    }

    setIsSubmitting(false);
  };

  useEffect(() => {}, [adminInfo]);

  useEffect(() => {
    if (adminInfo?.password !== adminInfo?.confirmPassword) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  }, [adminInfo?.password, adminInfo?.confirmPassword]);

  return (
    <Container>
      {signupStatus ? (
        signupStatus === "success" ? (
          <div className="success">
            <strong>Signed Up Successfully</strong>
          </div>
        ) : (
          <div className="failure">
            <strong>Signup Unsuccessful</strong>
          </div>
        )
      ) : (
        <></>
      )}

      <form>
        <header>Sign Up As An Admin</header>
        <label htmlFor="name">
          <span>Full Name</span>
          <input
            value={adminInfo?.name}
            onChange={updateAdminInfo}
            id="name"
            name="name"
            type="text"
          />
        </label>
        <label htmlFor="email">
          <span>Email</span>
          <input
            value={adminInfo?.email}
            onChange={updateAdminInfo}
            id="email"
            name="email"
            type="email"
          />
        </label>
        <label htmlFor="password">
          <span>Password</span>
          <input
            value={adminInfo?.password}
            onChange={updateAdminInfo}
            id="password"
            name="password"
            type="password"
          />
        </label>
        <label htmlFor="confirmPassword">
          <span>Confirm Password</span>
          <input
            value={adminInfo?.confirmPassword}
            onChange={updateAdminInfo}
            id="confirmPassword"
            name="confirmPassword"
            type="password"
          />
        </label>
        <label className="note">
          <span>*</span> All fields are required
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
          <button onClick={submitForm}>Sign Up</button>
        )}

        <div>
          <p>
            Already have an account? <Link to="/login">Log In</Link>
          </p>
        </div>
      </form>
    </Container>
  );
};

export default AdminSignupPage;
