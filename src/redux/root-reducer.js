import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import adminReducer from "./admin/admin.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "admin"],
};

const rootReducer = combineReducers({
  user: userReducer,
  admin: adminReducer,
});

export default persistReducer(persistConfig, rootReducer);
