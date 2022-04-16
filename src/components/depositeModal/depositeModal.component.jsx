import React, { useState } from "react";
import { DepositeModalContainer } from "./depositeModal.styles";
import { useHistory } from "react-router-dom";
import { AiOutlineClose as CloseIcon } from "react-icons/ai";
import { connect } from "react-redux";
import { BiLoaderAlt } from "react-icons/bi";
import axios from "axios";
import { logAdminOut } from "../../redux/admin/admin.actions";
import { logUserOut } from "../../redux/user/user.actions";
import { ROOT_URL } from "../../constant";

const DepositeModal = ({
  modalBottom,
  modalTop,
  btnHoverColor,
  backdropHeight,
  withdraw,
  btnWidth,
  btnSectionPadding,
  btnBg,
  btnColor,
  btnMarginTop,
  h3Padding,
  inputSectionWidth,
  inputSectionPadding,
  labelFontSize,
  labelColor,
  h3Color,
  modalBg,
  headerFontSize,
  headerFontWeight,
  modalWidth,
  placeHolder,
  header,
  label,
  buttonText,
  open,
  close,
  show,
  userToken,
  logUserOut,
  type,
  updateWallet,
  adminToken,
  userID,
  updateUserBalance,
  updateUserROI,
  updateUserDeposit,
  updateUserReferral,
  updateUserWallet,
  successMessage,
  bank,
  logAdminOut,
  defaultValue,
  ...otherProps
}) => {
  const [value, setValue] = useState(defaultValue || "");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const history = useHistory();
  const handleValue = (e) => {
    setValue(e.target.value);
  };

  const submitWithdrawal = async (type) => {
    if (!value) {
      return;
    }
    setIsSubmitting(true);
    setError("");

    let url = `${ROOT_URL}/withdraw`;
    let options = {
      headers: {
        "Content-Type": "application/json",
        csrf_token: userToken,
      },
      withCredentials: true,
    };
    const body = {
      amount: Number(value),
      mode: type,
    };

    try {
      let response = await axios.post(url, body, options);

      if (response.data.status === "Success") {
        setSuccess(true);
        setTimeout(() => close(), 3000);
        setTimeout(() => {
          setSuccess(false);
          setValue("");
        }, 3100);
      }
    } catch (e) {
      console.log(e.response);
      if (e.response.status === 400 || e.response.status === 401) {
        setError(e.response.data.message);
      } else if (e.response.status === 403) {
        setTimeout(() => {
          if (typeof logUserOut === "function") {
            logUserOut();
          }
          if (typeof logAdminOut === "function") {
            logAdminOut();
          }
        }, 500);
        history.push("/login");
      } else {
        setError("An Error Occurred");
      }
    }
    setIsSubmitting(false);
  };

  const submitWallet = async () => {
    if (!value) {
      return;
    }
    setIsSubmitting(true);
    setError("");

    let url = `${ROOT_URL}/admin/wallet/edit`;
    let options = {
      headers: {
        "Content-Type": "application/json",
        admin_csrf_token: adminToken,
      },
      withCredentials: true,
    };

    const body = {
      id: userID,
      new_address: value,
    };

    try {
      let response = await axios.put(url, body, options);

      if (response.data.status === "Success") {
        setSuccess(true);
        setTimeout(() => close(), 3000);
        setTimeout(() => {
          setSuccess(false);
          setValue("");
        }, 3100);
      } else if (response.data.status === "Error") {
        setError(response.data.message);
      }
    } catch (e) {
      if (e.response.status === 403) {
        setTimeout(() => logAdminOut(), 500);
        history.push("/admin/login");
      }
      setError("An Error Occurred");
    }
    setIsSubmitting(false);
  };

  const submitUserWallet = async () => {
    if (!value) {
      return;
    }
    setIsSubmitting(true);
    setError("");

    let url = `${ROOT_URL}/admin/user/wallet/edit`;
    let options = {
      headers: {
        "Content-Type": "application/json",
        admin_csrf_token: adminToken,
      },
      withCredentials: true,
    };

    const body = {
      user_id: userID,
      user_wallet: value,
    };

    try {
      let response = await axios.put(url, body, options);

      if (response.data.status === "Success") {
        setSuccess(true);
        setTimeout(() => close(), 3000);
        setTimeout(() => {
          setSuccess(false);
          setValue("");
        }, 3100);
      } else if (response.data.status === "Error") {
        setError(response.data.message);
      }
    } catch (e) {
      if (e.response.status === 403) {
        setTimeout(() => logAdminOut(), 500);
        history.push("/admin/login");
      }
      setError("An Error Occurred");
    }
    setIsSubmitting(false);
  };

  const submitUserDetails = async (detail) => {
    if (!value) {
      return;
    }
    setIsSubmitting(true);
    setError("");

    let url = `${ROOT_URL}/admin/change/balances/${userID}`;
    let options = {
      headers: {
        "Content-Type": "application/json",
        admin_csrf_token: adminToken,
      },
      withCredentials: true,
    };

    const body = {
      roi: detail.roi ? Number(detail.roi) + defaultValue : null,
      total_deposit: detail.deposit
        ? Number(detail.deposit) + defaultValue
        : null,
      referral_bonus: detail.referral
        ? Number(detail.referral) + defaultValue
        : null,
      current_balance: detail.balance
        ? Number(detail.balance) + defaultValue
        : null,
    };

    try {
      let response = await axios.put(url, body, options);

      if (response.data.status === "Success") {
        setSuccess(true);
        setTimeout(() => close(), 3000);
        setTimeout(() => {
          setSuccess(false);
        }, 3100);
      } else if (response.data.status === "Error") {
        setError(response.data.message);
      }
    } catch (e) {
      if (e.response.status === 403) {
        setTimeout(() => logAdminOut(), 500);
        history.push("/admin/login");
      }
      setError("An Error Occurred");
    }
    setIsSubmitting(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (withdraw) {
      submitWithdrawal("Bitcoin");
    } else if (bank) {
      submitWithdrawal("Bank");
    } else if (updateWallet) {
      submitWallet();
    } else if (updateUserBalance) {
      submitUserDetails({ balance: value });
    } else if (updateUserDeposit) {
      submitUserDetails({ deposit: value });
    } else if (updateUserROI) {
      submitUserDetails({ roi: value });
    } else if (updateUserReferral) {
      submitUserDetails({ referral: value });
    } else if (updateUserWallet) {
      submitUserWallet();
    } else {
      history.push({
        pathname: "/user/deposit/payment",
        state: { amount: value },
      });
    }
  };

  return (
    <DepositeModalContainer
      show={show}
      modalTop={modalTop}
      modalBottom={modalBottom}
      backdropHeight={backdropHeight}
      h3Padding={h3Padding}
      inputSectionWidth={inputSectionWidth}
      inputSectionPadding={inputSectionPadding}
      labelFontSize={labelFontSize}
      labelColor={labelColor}
      h3Color={h3Color}
      modalBg={modalBg}
      headerFontSize={headerFontSize}
      headerFontWeight={headerFontWeight}
      btnMarginTop={btnMarginTop}
      btnColor={btnColor}
      btnBg={btnBg}
      btnSectionPadding={btnSectionPadding}
      btnWidth={btnWidth}
      btnHoverColor={btnHoverColor}
      modalWidth={modalWidth}
      withdraw={withdraw}
    >
      {show ? <div className="backDrop"></div> : null}
      <form className="modal">
        <div className="header">
          <h3>{header}</h3>
          <CloseIcon onClick={close} />
        </div>
        <div className="inputSection">
          <label>{label}</label>
          <input
            type={type ? type : "text"}
            name="depositeAmount"
            placeholder={placeHolder}
            onChange={handleValue}
          />
        </div>
        {success ? (
          <strong className="success">
            {" "}
            {successMessage}
            {!successMessage
              ? updateWallet
                ? "Wallet Update Successful"
                : "Withdrawal Successful"
              : null}
          </strong>
        ) : (
          <></>
        )}
        {error ? <strong className="error">{error}</strong> : <></>}
        <div className="buttonSection">
          {isSubmitting ? (
            <button disabled>
              <BiLoaderAlt />
            </button>
          ) : (
            <button onClick={handleSubmit}>{buttonText}</button>
          )}
        </div>
      </form>
    </DepositeModalContainer>
  );
};

const mapStateToProps = (state) => ({
  userToken: state.user.userToken,
  adminToken: state.admin.adminToken,
});

const mapDispatchToProps = (dispatch) => ({
  logAdminOut: () => dispatch(logAdminOut()),
  logUserOut: () => dispatch(logUserOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DepositeModal);
