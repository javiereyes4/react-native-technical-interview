import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { LoginReducer } from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

const middleware = [thunk];

middleware.push(logger);

const rootReducer = combineReducers({
  login: LoginReducer,
});
const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
  );

  return store;
};

export default configureStore;
