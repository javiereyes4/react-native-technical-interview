/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Login, Books } from "./src/screens/index";
import I18n from "react-native-i18n";
import es from "./src/i18n/locales/es.json";
import en from "./src/i18n/locales/en.json";
import { Provider, connect } from "react-redux";
import configureStore from "./src/redux/store/configureStore";

const store = configureStore();

function App() {
  const changeLanguages = (value, component) => {
    I18n.locale = value;
    component.forceUpdate();
  };

  I18n.fallbacks = true;

  return (
    <View style={styles.container}>
      <Books />
      {/* <Login changeLanguage={changeLanguages} /> */}
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
    backgroundColor: "#CEF3FF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
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
