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
  // const response = await bkGroupsLegacyServices.postLogin(body)
  const response = {
    username: "Javier",
    pass: "2020",
  };
  if (response) {
    alert("login");
    dispatch(changeLogin(response));
  }
  return await response;
};
