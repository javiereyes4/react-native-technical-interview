import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableHighlight,
} from "react-native";
import { Dropdown } from "react-native-material-dropdown";
import I18n from "react-native-i18n";
import dataAge from "../data/age.json";
import { Formik } from "formik";
import { COLORS } from "../../../assets/color/colors";

const LoginForm = (props) => {
  const { handleSubmit } = props;
  state = {
    requiredFields: false,
    validateEmail: false,
  };
  const validate = (values) => {
    if (
      values.name != "" &&
      values.lastname != "" &&
      values.password != "" &&
      values.email != "" &&
      values.age != "" &&
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      this.state.requiredFields = true;
    } else {
      this.state.requiredFields = false;
    }

    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ? (this.state.validateEmail = true)
      : (this.state.validateEmail = false);
  };
  return (
    <Formik
      initialValues={{
        name: "",
        lastname: "",
        password: "",
        email: "",
        age: "",
      }}
      onSubmit={(values) => handleSubmit(values)}
      validate={validate}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View
          style={{
            alignSelf: "stretch",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextInput
            style={styles.input}
            placeholder={I18n.t("name")}
            maxLength={10}
            onChangeText={handleChange("name")}
            onBlur={handleBlur("name")}
            value={values.name}
          />
          <TextInput
            style={styles.input}
            placeholder={I18n.t("lastName")}
            maxLength={10}
            onChangeText={handleChange("lastname")}
            onBlur={handleBlur("lastname")}
            value={values.lastname}
          />

          <TextInput
            style={styles.input}
            placeholder={I18n.t("password")}
            secureTextEntry={true}
            keyboardType={"number-pad"}
            maxLength={10}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
          />

          <TextInput
            style={styles.input}
            placeholder={I18n.t("email")}
            maxLength={40}
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
          />
          <Text style={styles.labeError}>
            {this.state.validateEmail ? I18n.t("errorEmail") : ""}
          </Text>
          <View style={{ width: 200 }}>
            <Dropdown
              label={I18n.t("age")}
              data={dataAge}
              onChangeText={handleChange("age")}
              value={values.age}
            />
          </View>

          <TouchableHighlight
            onPress={handleSubmit}
            disabled={!this.state.requiredFields}
          >
            <View style={styles.viewBtn(this.state.requiredFields)}>
              <Text style={styles.labelBtn}>{I18n.t("login")}</Text>
            </View>
          </TouchableHighlight>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderBottomColor: COLORS.blue,
    borderBottomWidth: 1,
    marginBottom: 25,
    width: 200,
  },
  viewBtn: (requiredFields) => ({
    marginTop: 20,
    padding: 10,
    width: 100,
    backgroundColor: requiredFields ? COLORS.blue : COLORS.lightGray,
    borderRadius: 10,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  }),
  labelBtn: {
    color: COLORS.white,
  },
  labeError: {
    color: COLORS.red,
  },
});

export default LoginForm;
