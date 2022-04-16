import React, { useState,useEffect } from "react";
import { HomePageModalContainer } from "./homePageModal.styles.jsx";
import Logo from "../../assets/SocketFX Normal.png"

const HomePageModal = ({
  btnHoverColor,
  btnHoverBorder,
  btnHoverBg,
  btnWidth,
  btnMarginTop,
  btnColor,
  btnFontSize,
  btnBorder,
  btnBorderRadius,
  btnBg,
  pFontSize,
  pColor,
  headerColor,
  modalBg,
  modalWidth,
  header,
  paragraph,
  ...otherProps
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  useEffect(() => {
    const closeModal = setTimeout(() => {
      setShow(true);
    }, 300);

    return () => clearTimeout(closeModal);
  }, []);

  return (
    <HomePageModalContainer
      show={show}
      btnHoverColor={btnHoverColor}
      btnHoverBorder={btnHoverBorder}
      btnHoverBg={btnHoverBg}
      btnWidth={btnWidth}
      btnMarginTop={btnMarginTop}
      btnColor={btnColor}
      btnFontSize={btnFontSize}
      btnBorder={btnBorder}
      btnBorderRadius={btnBorderRadius}
      btnBg={btnBg}
      pFontSize={pFontSize}
      pColor={pColor}
      headerColor={headerColor}
      modalBg={modalBg}
      modalWidth={modalWidth}
    >
      {show ? <div className="backDrop" onClick={handleClose}></div> : null}
      <div className="modal">
        <div className="logoWrapper">
          <img src={Logo} alt="logo" width="100%" height="100%" />
        </div>
        <h4>{header}</h4>
        <p>{paragraph}</p>

        <button onClick={handleClose}>OK</button>
      </div>
    </HomePageModalContainer>
  );
};
export default HomePageModal;