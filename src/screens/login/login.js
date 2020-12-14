import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import { name as appName } from "../../../app.json";
import I18n from "react-native-i18n";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { postLogin } from "../../redux/actions/loginActions";
import LoginForm from "../../screens/login/components/loginForm";

class Login extends Component {
  handleLogin = async () => {
    const { postLogin } = this.props;
    console.log(this.props);
    console.log("JRJRJ");
    const result = await postLogin();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{appName}</Text>
        <LoginForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
    color: "#3CB7FF",
    fontWeight: "bold",
    padding: 20,
  },
});

function mapStateToProps(state) {
  return {
    login: state.login,
  };
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ postLogin }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
