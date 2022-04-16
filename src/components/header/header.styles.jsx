import styled from "styled-components";

export const HeaderContainer = styled("div")`
  background: rgb(42, 46, 55);
  height: 15rem;
  padding: 0 4rem;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  position: fixed;
  top: ${({ hideHeader }) => (hideHeader ? "-16rem" : "0")};
  justify-content: space-between;
  align-items: center;
  transition: top 0.5s;
  overflow: none;
  z-index: 1;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.01), 0 1px 3px rgba(0, 0, 0, 0.08);

  .logoSection {
    width: 20%;
    height: 98%;
    display: flex;
    justify-content: center;
    align-items: center;

    .logo {
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
  }

  .menuSection {
    display: none;
    justify-content: center;
    align-items: center;
    height: 80%;
    min-width: 15vw;
    label {
      font-size: 1.4rem;
      font-weight: bolder;
      color: #ffffff;
      padding: 0 0.4rem;
      margin: 0;
    }
  }
  .navLinkSection {
    width: 60%;
    padding: 0;
    height: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    & > .navLink {
      padding: 1rem 2rem;
      text-decoration: none;
      border-radius: 1rem 1rem 0 0;
      transition: 1s;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      & > p {
        color: #ffffff;
        margin: 0;
        padding: 0;
        font-size: 0.9rem;
        font-weight: bold;
        text-align: center;
      }
      & > .bottomLine {
        width: 50%;
        transition: 0.6s;
      }
    }
    .hoverSubLink {
      display: none;
    }

    .navLink:hover {
      background: black;
      transition: 1s;

      p {
        color: #00b4ae;
      }
      .bottomLine {
        background: #00b4ae;
        width: 100%;
        margin-top: 0.3rem;
        height: 2px;
        transition: 0.6s;
      }
    }

    .subLinksWrapper {
      width: 16%;
      position: absolute;
      top: 9.3rem;
      background: rgba(42, 46, 55, 0.9);
      left: 70.5%;
      flex-direction: column;
      justify-content: space-between;
      border: 1px solid grey;
      align-items: center;
      border-radius: 0 1rem 1rem 1rem;
      overflow: hidden;
      transition: 0.1s;
      display: none;

      .subNavLink {
        width: 100%;
        border-left: 4px solid transparent;
        transition: 0.4s;

        a {
          color: #ffffff;
          text-align: center;
          text-decoration: none;
          display: block;
          margin: 0;
          width: 100%;
          height: 100%;
          padding: 1.2rem 0;
        }
        .bottomLine {
          width: 0;
          height: 1px;
        }
      }

      .subNavLink:hover {
        width: 100%;
        border-left: 4px solid #00b4ae;
        transition: 0.05s;
        a {
          color: #00b4ae;
        }
      }
    }

    .myAccountHoverEffect:hover {
      .subLinksWrapper {
        transition: 0.8s;
        display: flex;
        animation: moveUp 1s 1;
        @keyframes moveUp {
          0% {
            transform: translate(0, 50px);
          }
          100% {
            transform: translate(0, 0);
          }
        }

        .subNavLink:hover {
          p {
            padding: 1.2rem 0;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1140px) {
    width: 100vw;
    padding: 0 2rem;
    .navLinkSection {
      width: 70%;

      .subLinksWrapper {
        width: 18%;
        left: 56%;
      }
    }

    @media screen and (max-width: 900px) {
      padding: 0 1rem;
      .logoSection {
        width: 28%;
        min-width: 6rem;
      }

      .menuSection {
        display: flex;
      }
      .navLinkSection {
        background: #2a2e37;
        width: 100%;
        height: auto;
        z-index: 0;
        top: 15rem;
        transition: 0.7s;
        right: ${({ toggleMenu }) => (toggleMenu ? 0 : "-110vw")};
        animation: ${({ toggleMenu }) =>
          toggleMenu ? " slideIn 1s 1" : "slideOut 1s 1"};
        @keyframes slideIn {
          0% {
            transform: translate(110vw, 0);
          }
          100% {
            transform: translate(0, 0);
          }
        }
        @keyframes slideOut {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(110vw, 0);
          }
        }
        position: absolute;
        flex-direction: column;
        justify-content: space-between;
        border: 1px solid #2a2e37;
        overflow: hidden;
        border-radius: 1rem 0 1rem 0;

        & > .navLink {
          padding: 1rem 0;
          border-bottom: 1px solid #00b4ae;
          border-left: 2px solid transparent;
          width: 100%;
          border-radius: 0;
          & > p {
            font-size: 1.1rem;
          }
          & > .bottomLine {
            display: none;
          }
        }
        .hoverSubLink {
          display: ${({ toggle }) => (toggle ? "flex" : "none")};
          overflow: hidden;
        }
        .navLink:hover {
          background: transparent;
          border-left: 2px solid #00b4ae;
        }

        .subLinksWrapper {
          display: none;
          border: none;
          .subNavLink {
            display: none;
          }
        }
      }
    }
    @media screen and (max-width: 600px) {
      .logoSection {
        width: 40%;
      }
    }
    @media screen and (max-width: 500px) {
      height: 6rem;
      .logoSection {
        width: 15%;
      }
      .navLinkSection {
        top: 6rem;
      }
    }
    @media screen and (max-width: 400px) {
      .logoSection {
        width: 35%;
        height: 90%;
      }
      .menuSection {
        label {
          display: none;
        }
      }
    }
  }
  @media screen and (max-width: 300px) {
    .logoSection {
      width: 40%;
    }
  }
`;
