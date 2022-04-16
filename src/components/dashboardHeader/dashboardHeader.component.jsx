import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import axios from "axios";
import { BiLoaderAlt } from "react-icons/bi";
import { GiCheckMark } from "react-icons/gi";
import { BsCheckCircle } from "react-icons/bs";

import hamburger from "./../../assets/menu.svg";
import ScrollingPrices from "../scrollingPrices/scrollingPrices.component";
import user from "./../../assets/user.svg";
import { useHistory } from "react-router-dom";
import { logUserOut } from "../../redux/user/user.actions";
import { ROOT_URL } from "../../constant";

const Header = styled.header`
  background-color: #00b4ae;
  padding: 1rem;
  width: 100%;
  div.check {
    color: #fed383;
    font-size: 4rem;
  }
  div.top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      font-size: 1.4rem;
      color: #fff;
      font-weight: bold;
    }
    button.menu {
      background-color: white;
      padding: 10px;
      border-radius: 50%;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 30px;
      }
      &:focus {
        outline: none;
      }
    }
    & > img {
      height: 70px;
      width: 70px;
      border-radius: 50%;
    }
  }

  div.verify {
    margin-top: 1rem;
    button,
    a {
      border: none;
      font-size: 16px;
      background-color: white;
      padding: 5px 1rem;
      border-radius: 5px;
      margin-bottom: 1rem;
      margin-right: 1rem;
      color: #00b4ae;
      text-decoration: none;
    }
    button {
      &:disabled {
        background-color: #15193e;
        color: white;
        &.success {
          background-color: green;
          svg {
            animation: none;
          }
        }
        &.error {
          background-color: red;
          svg {
            animation: none;
          }
        }
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
  @media screen and (min-width: 768px) {
    padding: 1rem 2rem;
  }
`;

const DashboardHeader = ({
  showDrawer,
  toggleDrawer,
  emailVerified,
  accountVerified,
  avatar,
  admin,
  userToken,
  logUserOut,
  username,
}) => {
  const history = useHistory();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleApprove = async (e, user_id) => {
    e.preventDefault();
    setIsSubmitting(true);

    let url = `${ROOT_URL}/auth/resend-confirmation`;
    let options = {
      headers: {
        "Content-Type": "application/json",
        csrf_token: userToken,
      },
      withCredentials: true,
    };

    try {
      let response = await axios.get(url, options);

      if (response.status === 200) {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      }
    } catch (e) {
      if (e.response.status === 403) {
        setTimeout(() => logUserOut(), 500);
        history.push("/login");
      }
      setError(true);
      setTimeout(() => setError(false), 3000);
    }

    setIsSubmitting(false);
  };

  return (
    <>
      <Header>
        <div className="top">
          <button className="menu" onClick={() => toggleDrawer(!showDrawer)}>
            <img src={hamburger} alt="menu" />
          </button>
          <p>Welcome, {admin ? "Admin" : username}</p>
          <img src={avatar ? avatar : user} alt="profile" />
        </div>
        {!admin ? (
          <div className="verify">
            {accountVerified && emailVerified ? (
              <div className="check">
                {" "}
                <BsCheckCircle />{" "}
              </div>
            ) : (
              <></>
            )}
            {accountVerified ? (
              <></>
            ) : (
              <button onClick={() => history.push("/user/personaldetails")}>
                Verify Your Account
              </button>
            )}
            {emailVerified ? (
              <></>
            ) : isSubmitting ? (
              <button disabled>
                <BiLoaderAlt />
              </button>
            ) : error ? (
              <button className="error" disabled>
                Error!
              </button>
            ) : success ? (
              <button className="success" disabled>
                {" "}
                <GiCheckMark />{" "}
              </button>
            ) : (
              <button onClick={handleApprove}>Verify Your Email</button>
            )}
          </div>
        ) : (
          <></>
        )}
      </Header>
      {!admin ? <ScrollingPrices /> : <></>}
    </>
  );
};

const mapStateToProps = (state) => ({
  emailVerified: state.user?.userDetails?.is_email_verified,
  accountVerified: state.user?.userDetails?.is_verified,
  avatar: state.user?.userDetails?.avatar,
  userToken: state.user?.userToken,
  username: state.user?.userDetails?.name,
});

const mapDispatchToProps = (dispatch) => ({
  logUserOut: () => dispatch(logUserOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardHeader);
