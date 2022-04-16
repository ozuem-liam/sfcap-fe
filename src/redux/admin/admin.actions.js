import adminActionTypes from "./admin.types";

export const setAdminTokens = (adminTokens) => ({
  type: adminActionTypes.SET_ADMIN_TOKENS,
  payload: adminTokens,
});

export const setAdminWithdrawals = (withdrawals) => ({
  type: adminActionTypes.SET_ADMIN_WITHDRAWALS,
  payload: withdrawals,
});

export const logAdminOut = () => ({
  type: adminActionTypes.LOG_ADMIN_OUT,
});
