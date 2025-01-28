import React, { useContext, useState } from "react";
import { StyleSheet, Image } from "react-native";
import Screen from "../components/Screen";
import {
  AppError,
  AppForm,
  AppFormField,
  SubmitButton,
} from "../components/forms";
import authApi from "../api/auth";
import * as Yup from "yup";
import { jwtDecode } from "jwt-decode";
import AuthContext from "../auth/Context";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LogoScreen(props) {
  const [loginFailed, setLoginFailed] = useState(false);
const authContext= useContext(AuthContext)
  const handleSubmit = async ({ email, password }) => {
    

    const result = await authApi.login(email, password);

    if (!result.ok) {
      console.log("Login failed");
      setLoginFailed(true);
      return;
    }

   const user =jwtDecode(result.data)
   authContext.setUser(user)
    setLoginFailed(false);
  };

  return (
    <Screen>
      <Image style={styles.logo} source={require("../assets/favicon.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppError error="Invalid login credentials" visible={loginFailed} />
        <AppFormField
          name="email"
          placeholder="Email"
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <AppFormField
          name="password"
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry
        />
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    margin: 50,
  },
});

export default LogoScreen;
