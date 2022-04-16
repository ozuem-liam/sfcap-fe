import userActionTypes from "./user.types";

const INITIAL_STATE = {
  userToken: "",
  userDetails: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_USER_TOKENS:
      return {
        ...state,
        userToken: action.payload.token,
        userRefreshToken: action.payload.refToken,
      };
    case userActionTypes.SET_USER_DETAILS:
      return {
        ...state,
        userDetails: action.payload,
      };
    case userActionTypes.SET_USER_AVATAR:
      return {
        ...state,
        userDetails: {
          ...state.userDetails,
          avatar: action.payload,
        },
      };
    case userActionTypes.SET_USER_EMAIL_VERIFIED:
      return {
        ...state,
        userDetails: {
          ...state.userDetails,
          is_email_verified: true,
        },
      };
    case userActionTypes.LOG_USER_OUT:
      return {};
    default:
      return state;
  }
};

export default userReducer;
