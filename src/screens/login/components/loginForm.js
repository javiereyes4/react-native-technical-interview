import React, { Component, useState } from "react";
import { StyleSheet, View, TextInput, Button, Text } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { Dropdown } from "react-native-material-dropdown";
import I18n from "react-native-i18n";

const LoginForm = (props) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  let data = [
    {
      value: "Banana",
    },
    {
      value: "Mango",
    },
    {
      value: "Pear",
    },
  ];
  return (
    <View style={{ alignSelf: "stretch" }}>
      <TextInput
        style={styles.input}
        testID={"input-document"}
        placeholder={I18n.t("hello")}
        // onChangeText={(text) => this.handleUsername(text)}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        testID={"input-document"}
        placeholder={I18n.t("hello")}
        // onChangeText={(text) => this.handleUsername(text)}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        testID={"input-document"}
        placeholder={I18n.t("hello")}
        // onChangeText={(text) => this.handleUsername(text)}
        keyboardType="numeric"
      />

      <Dropdown label="Favorite Fruit" data={data} />

      <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={(newValue) => setToggleCheckBox(newValue)}
      />

      <Button
        title={I18n.t("hello")}
        titleStyle={{ fontSize: 18 }}
        testID={"button-login"}
        buttonStyle={{
          height: 42,
          borderRadius: 25,
          marginVertical: 15,
        }}
        onPress={() => this.handleLogin()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderBottomColor: "#4BA411",
    borderBottomWidth: 1,
    marginBottom: 25,
  },
});

export default LoginForm;
