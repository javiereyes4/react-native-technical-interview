import { Platform } from "react-native";
// import Config from "../../config";

function obtainStateOffline() {
  if (Platform.OS !== "web") {
    // const x = await AsyncStorage.getItem('@bk_groups_app:store')
    return null;
  }
  // return JSON.parse(localStorage.getItem(Config.LOCAL_KEY));
}

const initialState = {
  login: null,
};

const stateOfflineData = obtainStateOffline();
const state = stateOfflineData ? stateOfflineData : initialState;

export default state;
