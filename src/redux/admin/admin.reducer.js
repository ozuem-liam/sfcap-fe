import adminActionTypes from "./admin.types";

const INITIAL_STATE = {
  adminToken: "",
  adminRefreshToken: "",
  adminWithdrawals: [],
};

const adminReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case adminActionTypes.SET_ADMIN_TOKENS:
      return {
        ...state,
        adminToken: action.payload.token,
        adminRefreshToken: action.payload.refToken,
      };
    case adminActionTypes.SET_ADMIN_WITHDRAWALS:
      return {
        ...state,
        adminWithdrawals: action.payload,
      };
    case adminActionTypes.LOG_ADMIN_OUT:
      return {};
    default:
      return state;
  }
};

export default adminReducer;
