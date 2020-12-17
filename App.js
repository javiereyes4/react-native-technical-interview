import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Login, Books } from "./src/screens/index";
import I18n from "react-native-i18n";
import es from "./src/i18n/locales/es.json";
import en from "./src/i18n/locales/en.json";
import { Provider, connect } from "react-redux";
import configureStore from "./src/redux/store/configureStore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS } from "./src/assets/color/colors";

const store = configureStore();

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const changeLanguages = (value, component) => {
    I18n.locale = value;
    component.forceUpdate();
  };

  async function fetchComment() {
    const validateLogin = await AsyncStorage.getItem("@storage_Key");
    validateLogin != null && setIsLogged(true);
  }

  async function logout() {
    await AsyncStorage.clear();
    setIsLogged(false);
  }

  useEffect(() => {
    fetchComment();
  }, []);

  const validateLogin = (value) => {
    setIsLogged(value);
  };

  I18n.fallbacks = true;

  return (
    <View style={styles.container}>
      {!isLogged ? (
        <Login changeLanguage={changeLanguages} validateLogin={validateLogin} />
      ) : (
        <Books logout={logout} />
      )}
    </View>
  );
}

I18n.translations = {
  en: {
    ...en,
  },
  es: {
    ...es,
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.bgColor,
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: COLORS.gray,
    marginBottom: 5,
  },
});

function mapStateToProps(state) {
  return {
    loading: state.loading,
  };
}

const AppConnected = connect(mapStateToProps, null)(App);

export default () => (
  <Provider store={store}>
    <AppConnected />
  </Provider>
);
