import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { name as appName } from "../../../app.json";
import I18n from "react-native-i18n";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { postLogin } from "../../redux/actions/loginActions";
import LoginForm from "../../screens/login/components/loginForm";

class Login extends Component {
  handleSubmite = async (value) => {
    const { postLogin } = this.props;
    const result = await postLogin(value);
  };

  render() {
    const { changeLanguage } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{appName}</Text>
        <Text style={styles.selectLanguage}>{I18n.t("selectLanguage")}</Text>
        <View style={styles.imageContent}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => changeLanguage("es-US", this)}
          >
            <Image
              source={require("../../assets/images/es.png")}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => changeLanguage("en-US", this)}
            to
          >
            <Image
              source={require("../../assets/images/en.png")}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
        <LoginForm handleSubmit={(value) => this.handleSubmite(value)} />
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
  selectLanguage: {
    fontSize: 20,
    color: "#3CB7FF",
    padding: 20,
  },
  imageContent: {
    flexDirection: "row",
    paddingBottom: 30,
  },
  image: {
    height: 40,
    width: 40,
    marginHorizontal: 20,
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
