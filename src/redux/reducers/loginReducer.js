import { IS_LOGGED, LOGOUT } from "../constants";
import initialState from "../store/initialState";

const loginReducer = (state = initialState.login || {}, action) => {
  switch (action.type) {
    case IS_LOGGED:
      return {
        ...state,
        isLogged: action.payload,
      };
    case LOGOUT:
      return {
        isLogged: {},
      };
    default:
      return state;
  }
};
export default loginReducer;
