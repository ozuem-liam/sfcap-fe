import styled from "styled-components";

export const HomePageModalContainer = styled("div")`
  width: 100%;
  overflow: hidden;
  height: 100vh;
  position: absolute;
  display: ${({ show }) => (show ? "flex" : "none")};
  justify-content: center;
  transiton: all 0.6s;
  z-index:2;
  .backDrop {
    width: 100%;
    position: fixed;
    top: 0;
    height: 100vh;
    background: rgba(51, 51, 51, 0.95);
  }
  .modal {
    width: ${({ modalWidth }) => (modalWidth ? modalWidth : "30rem")};
    background: ${({ modalBg }) => (modalBg ? modalBg : "#ffffff")};
    display: flex;
    position: fixed;
    transform: ${({ show }) => (show ? "translateY(0)" : "translateY(-100vh)")};
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 0.7rem;
    padding: 1rem 2rem;
    box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.6),
      0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.7);
    transition: all 0.6s;

    .logoWrapper {
      width: 20%;
      height: 20%;
      margin: 0;
    }
    h4 {
      color: ${({ headerColor }) => (headerColor ? headerColor : "#2a2e37")};
      text-align: center;
    }
    p {
      color: ${({ pColor }) => (pColor ? pColor : "#2a2e37")};
      font-size: ${({ pFontSize }) => (pFontSize ? pFontSize : "0.8rem")};
      text-align: center;
      margin: 0;
    }
    button {
      background: ${({ btnBg }) => (btnBg ? btnBg : "white")};
      border-radius: ${({ btnBorderRadius }) =>
        btnBorderRadius ? btnBorderRadius : "0.4rem"};
      border: ${({ btnBorder }) =>
        btnBorder ? btnBorder : "2px solid #2a2e37"};
      font-size: ${({ btnFontSize }) => (btnFontSize ? btnFontSize : "1rem")};
      font-weight: bolder;
      padding: 0.6rem 0;
      transition: 0.2s;
      color: ${({ btnColor }) => (btnColor ? btnColor : "#2a2e37")};
      margin-top: ${({ btnMarginTop }) =>
        btnMarginTop ? btnMarginTop : "0.7rem"};
      width: ${({ btnWidth }) => (btnWidth ? btnWidth : "50%")};
    }
    button:hover {
      background: ${({ btnHoverBg }) => (btnHoverBg ? btnHoverBg : "#00B4AE")};
      border: ${({ btnHoverBorder }) =>
        btnHoverBorder ? btnHoverBorder : "2px solid #00B4AE"};
      cursor: pointer;
      color: ${({ btnHoverColor }) =>
        btnHoverColor ? btnHoverColor : "white"};
      transition: 0.2s;
    }
  }

  @media screen and (max-width: 550px) {
    .modal {
      width: 70%;
      .logoWrapper {
        width: 30%;
      }
      p {
        font-size: 0.6rem;
      }
      button {
        font-size: 0.8rem;
        margin-top: 0.5rem;
        padding: 0.3rem 0;
      }
    }
  }
`;
