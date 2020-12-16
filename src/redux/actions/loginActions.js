import { services } from "../../services";
import { IS_LOGGED } from "../constants";
import { loading } from "./loadingAction";

export function changeLogin(data) {
  return {
    type: IS_LOGGED,
    payload: data,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export const postLogin = (body) => async (dispatch) => {
  dispatch(loading());
  const response = await services.postLogin(body);
  console.log(response);
  if (response) {
    alert("login");
    dispatch(changeLogin(response));
  }
  return await response;
};
