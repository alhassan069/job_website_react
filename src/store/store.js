import { combineReducers, createStore } from "redux";
import { authReducer } from "./auth/reducer";
import { jobReducer } from "./jobs/reducer";

const rootReducer = combineReducers({
  authReducer: authReducer,
  jobReducer: jobReducer,
});

export const store = createStore(rootReducer);
