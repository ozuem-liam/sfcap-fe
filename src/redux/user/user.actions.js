import userActionTypes from "./user.types";
// import signUp from '../../pages/signup/sign-up';

export const setUserTokens = (userTokens) => ({
  type: userActionTypes.SET_USER_TOKENS,
  payload: userTokens,
});

export const setUserDetails = (userDetails) => ({
  type: userActionTypes.SET_USER_DETAILS,
  payload: userDetails,
});

export const setUserAvatar = (avatarLink) => ({
  type: userActionTypes.SET_USER_AVATAR,
  payload: avatarLink,
});

export const setUserEmailVerified = () => ({
  type: userActionTypes.SET_USER_EMAIL_VERIFIED,
});

export const logUserOut = () => ({
  type: userActionTypes.LOG_USER_OUT,
});
