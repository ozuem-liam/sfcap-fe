import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { BiLoaderAlt } from "react-icons/bi";
import { connect } from "react-redux";
import { setUserTokens, setUserDetails } from "./../../redux/user/user.actions";
import { ROOT_URL } from "../../constant";

const Container = styled.div`
.login-wrap {
  background: url(https://wbstatic.webullfintech.com/v1/invest-g/2f8b936….jpg) center center no-repeat;
  height: 100vh;
  background-size: cover;
}
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

.jss13 {
  color: #373737;
  height: 36px;
  font-size: 26px;
  text-align: center;
  font-family: OpenSans-SemiBold;
  font-weight: 600;
  line-height: 36px;
  margin-bottom: 24px;
  letter-spacing: 0;
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
    strong {
      display: block;
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

const LoginPage = ({ setUserDetails, setUserTokens, logUserOut }) => {
  const [forgotPassword, toggleForgotPassword] = useState(false);
  const [loginDetails, setLoginDetails] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
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

    // if (remember) {
    //   bcrypt.genSalt(10, function (err, salt) {
    //     bcrypt.hash("B4c0//", salt, function (err, hash) {
    //       const login = loginDetails;
    //       login.hash = hash;
    //       localStorage.clear();
    //       localStorage.setItem("login", JSON.stringify(login));
    //     });
    //   });
    // }
    setIsSubmitting(true);

    let url = `${ROOT_URL}/auth/user`;
    let options = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    try {
      let response = await axios.post(url, loginDetails, options);

      if (response.data.status === "Success") {
        setUserTokens({
          token: response.data.csrf_token,
          refToken: response.data.csrf_refresh_token,
        });
      }

      url = `${ROOT_URL}/dashboard`;
      options = {
        headers: {
          csrf_token: response.data.csrf_token,
        },
        withCredentials: true,
      };

      response = await axios.get(url, options);
      if (response.data.status === "Success") {
        setUserDetails(response.data);
        history.push("/user/dashboard");
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
      withCredentials: true,
    };

    try {
      const response = await axios.post(url, body, options);
      if (response.data.status === "Success") {
        setResetPasswordStatus("success");
      }
    } catch (e) {
      setResetPasswordStatus("fail");
    }
    setIsSubmitting(false);
  };

  useEffect(() => {}, [loginDetails]);

  return (
    <Container>
      <div className="login-wrap">

      <div className="login-content">
      <div className="content-wrap-pc">
      <div>
      <form>
        <header>{forgotPassword ? "Reset Password" : "Log In"}</header>
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
              <input
                value={remember}
                onChange={(e) => setRemember(e.target.checked)}
                id="remember"
                name="remember"
                type="checkbox"
              />
              <span>Remember Me</span>
            </label> */}
          </>
        )}

        {error ? <strong>*{error}</strong> : <></>}

        {forgotPassword && resetPasswordStatus === "success" ? (
          <strong>
            {" "}
            Your password was reset successfully. Check your mail for a reset
            link
          </strong>
        ) : forgotPassword && resetPasswordStatus === "fail" ? (
          <strong> An error occured while resetting your password</strong>
        ) : (
          <></>
        )}
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
          <p>
            Don't have an account yet? <Link to="/signup">Sign Up</Link>
          </p>
          {forgotPassword ? (
            <p>
              Have an account?{" "}
              <button onClick={handleForgotPassword}>Click Here</button>
            </p>
          ) : (
            <p>
              Forgot Password?{" "}
              <button onClick={handleForgotPassword}>Click Here</button>
            </p>
          )}
        </div>
      </form>
      </div>
      </div>
      </div>
      </div>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setUserTokens: (userTokens) => dispatch(setUserTokens(userTokens)),
  setUserDetails: (userDetails) => dispatch(setUserDetails(userDetails)),
});

export default connect(null, mapDispatchToProps)(LoginPage);
