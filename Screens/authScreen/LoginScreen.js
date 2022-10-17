import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Platform,
  Image,
  Linking,
  Keyboard,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";

import { useDispatch } from "react-redux";
import { authSignInUser } from "../../redux/auth/authOperations";

const initialState = {
  email: "",
  password: "",
};

export default function LoginScreen({ navigation }) {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(user);
  const [dimensions, setdimensions] = useState(Dimensions.get("window").width);

  const dispatch = useDispatch();

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width;
      setdimensions(width);
    };
    Dimensions.addEventListener("change", onChange);
    // return () => {
    //   Dimensions.removeListener("change", onChange);
    // };
  }, []);

  const handleSubmit = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    dispatch(authSignInUser(state));
    setState(initialState);
    console.log(state);
  };
  const LoginPage = () => {
    let url = "#";
    Linking.openURL(url);
  };
  return (
    <ImageBackground
      style={styles.imag}
      source={require("../../images/photoBg.jpg")}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1, justifyContent: "flex-end" }}
      >
        <View
          style={{
            ...styles.form,
            marginBottom: isShowKeyboard ? -113 : 0,
            width: dimensions,
          }}
        >
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Войти</Text>
          </View>
          <View>
            <TextInput
              style={{ ...styles.input, width: dimensions - 16 * 2 }}
              placeholder="Адрес электронной почты"
              onFocus={() => setIsShowKeyboard(true)}
              value={state.email}
              onChangeText={(value) => {
                setState((prevState) => ({ ...prevState, email: value }));
              }}
            />
          </View>
          <View style={{ marginTop: 16 }}>
            <TextInput
              style={{ ...styles.input, width: dimensions - 16 * 2 }}
              placeholder="Пароль"
              secureTextEntry={true}
              onFocus={() => setIsShowKeyboard(true)}
              value={state.password}
              onChangeText={(value) => {
                setState((prevState) => ({
                  ...prevState,
                  password: value,
                }));
              }}
            />
            <TouchableOpacity activeOpacity={0.5} onPress={LoginPage}>
              <Text style={styles.showPassword}>Показать</Text>
            </TouchableOpacity>
          </View>
          <View style={{ ...styles.button, width: dimensions - 16 * 2 }}>
            <TouchableOpacity activeOpacity={0.5} onPress={handleSubmit}>
              <Text style={styles.buttonTitle}>Войти</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.link}>Нет аккаунта? Зарегистрироваться</Text>
          </TouchableOpacity>
          <Image
            source={require("../../images/indicator.png")}
            style={styles.indicator}
          />
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imag: {
    // flex: 1,
    // resizeMode: "cover",
    // justifyContent: "flex-end",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  form: {
    paddingTop: 32,
    paddingBottom: 144,
    borderWidth: 1,
    backgroundColor: "#FFFFFF",
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    alignItems: "center",
    borderColor: "#FFFFFF",
  },

  header: {
    alignItems: "center",
    marginBottom: 32,
  },
  headerTitle: {
    fontSize: 30,
    color: "#212121",
    fontFamily: "Roboto-Medium",
    lineHeight: 35,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    color: "#BDBDBD",
    height: 50,
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    lineHeight: 19,
  },
  showPassword: {
    display: "flex",
    position: "absolute",
    top: -36,
    right: 16,
    color: "#1B4371",
    height: 50,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    lineHeight: 19,
  },
  button: {
    borderRadius: 100,
    marginTop: 43,
    paddingHorizontal: 32,
    paddingVertical: 16,
    ...Platform.select({
      ios: {
        backgroundColor: "transparent",
        borderColor: "#FF6C00",
      },
      android: {
        backgroundColor: "#FF6C00",
        borderColor: "transparent",
      },
    }),
  },
  buttonTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    lineHeight: 19,
    textAlign: "center",
  },
  link: {
    color: "#1B4371",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    lineHeight: 19,
    textAlign: "center",
    marginTop: 16,
  },
  indicator: {
    position: "absolute",
    bottom: 0,
  },
});
