import styled from "styled-components";

export const DepositeModalContainer = styled("div")`
  width: 100%;
  height: 100%;
  position: absolute;
  display: ${({ show }) => (show ? "flex" : "none")};
  justify-content: center;
  transition: all 0.6s;
  strong {
    text-align: center;
    padding-top: 1rem;
    &.error {
      color: red;
    }
    &.success {
      color: green;
    }
  }
  .backDrop {
    width: 120vw;
    position: fixed;
    top: 0;
    height: ${({ backdropHeight }) =>
      backdropHeight ? backdropHeight : "100vh"};
    background: rgba(51, 51, 51, 0.95);
    z-index: 10;
  }
  .modal {
    width: ${({ modalWidth }) => (modalWidth ? modalWidth : "30rem")};
    background: ${({ modalBg }) => (modalBg ? modalBg : "#ffffff")};
    display: flex;
    position: fixed;
    transform: ${({ show }) => (show ? "translateY(0)" : "translateY(100vh)")};
    top: ${({ modalTop }) => (modalTop ? modalTop : null)};
    bottom: ${({ modalBottom }) => (modalBottom ? modalBottom : null)};
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 0.7rem;
    padding: 0.4rem 0;
    box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.6),
      0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.7);
    transition: all 0.6s;
    z-index: 11;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: ${({ headerPadding }) =>
        headerPadding ? headerPadding : "0 2rem"};
      font-size: ${({ headerFontSize }) =>
        headerFontSize ? headerFontSize : "1.2rem"};
      font-weight: ${({ headerFontWeight }) =>
        headerFontWeight ? headerFontWeight : "bold"};

      h3 {
        color: ${({ h3Color }) => (h3Color ? h3Color : " #00B4AE")};
        padding: 0;
      }
    }

    .inputSection {
      width: ${({ inputSectionWidth }) =>
        inputSectionWidth ? inputSectionWidth : "100%"};
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;
      border-top: 1px solid #b8bec8;
      border-bottom: 1px solid #b8bec8;
      padding: ${({ inputSectionPadding }) =>
        inputSectionPadding ? inputSectionPadding : "1rem 2rem"};

      label {
        font-size: ${({ labelFontSize }) =>
          labelFontSize ? labelFontSize : "0.9rem"};
        color: ${({ labelColor }) => (labelColor ? labelColor : "black")};
      }
      input {
        width: 100%;
        outline: none;
        border: 1px solid #b8bec8;
        border-radius: 4px;
        font-size: 0.9rem;
        padding: 0.5rem 1rem;
        margin: 0.5rem 0;
      }
    }
    .buttonSection {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: ${({ btnSectionPadding }) =>
        btnSectionPadding ? btnSectionPadding : "0.5rem 2rem"};

      button {
        background: ${({ btnBg }) => (btnBg ? btnBg : "#00B4AE")};
        border-radius: 0.4rem;
        font-size: 0.9rem;
        border: none;
        font-weight: bolder;
        padding: 0.5rem 0;
        transition: 0.2s;
        color: ${({ btnColor }) => (btnColor ? btnColor : "#ffffff")};
        margin-top: ${({ btnMarginTop }) =>
          btnMarginTop ? btnMarginTop : "0.3rem"};
        width: ${({ btnWidth }) => (btnWidth ? btnWidth : "20%")};
        &:hover {
          opacity: 0.7;
          cursor: pointer;
          color: ${({ btnHoverColor }) =>
            btnHoverColor ? btnHoverColor : "white"};
          transition: 0.2s;
        }

        ${({ withdraw }) =>
          withdraw
            ? `
        border: none;
    font-size: 1rem;
    padding: 10px 1rem;
    background-color: #00B4AE;
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
        `
            : ""}
      }
    }
  }

  @media screen and (max-width: 550px) {
    .modal {
      width: 70%;
      .buttonSection {
        justify-content: center;
        button {
          width: 50%;
          font-size: 0.8rem;
          margin-top: 0.5rem;
          padding: 0.6rem 0;
        }
      }
    }
  }
`;
