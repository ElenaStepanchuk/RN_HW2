import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  // Text,
  View,
  ImageBackground,
  // TextInput,
  // TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  // Dimensions,
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";

export default function App() {
  // const userInfo = {
  //   email: "",
  //   password: "",
  // };

  // const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  // const [state, setState] = useState(userInfo);
  // const [dimensions, setdimensions] = useState(
  //   Dimensions.get("window").width - 20 * 2
  // );

  // useEffect(() => {
  //   const onChange = () => {
  //     const width = Dimensions.get("window").width - 20 * 2;

  //     setdimensions(width);
  //   };
  //   Dimensions.addEventListener("change", onChange);
  //   return () => {
  //     Dimensions.removeEventListener("change", onChange);
  //   };
  // }, []);

  const keyboardHide = () => {
    // setIsShowKeyboard(false);
    Keyboard.dismiss();
    // setState(userInfo);
  };

  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./fonts/Roboto-Regular.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  // console.log(Dimensions.get("window").width);
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <ImageBackground
          style={styles.imag}
          source={require("./images/photoBg.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <RegistrationScreen />
            {/* <View
              style={{
                ...styles.form,
                marginBottom: isShowKeyboard ? 20 : 100,
                width: dimensions,
              }}
            >
              <View style={styles.header}>
                <Text style={styles.headerTitle}>Регистрация</Text>
              </View>
              <View>
                <Text style={styles.inputTitle}>Email addres</Text>
                <TextInput
                  style={styles.input}
                  textAlign={"center"}
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.email}
                  onChangeText={(value) => {
                    setState((prevState) => ({ ...prevState, email: value }));
                  }}
                />
              </View>
              <View style={{ marginTop: 20 }}>
                <Text style={styles.inputTitle}>password</Text>
                <TextInput
                  style={styles.input}
                  textAlign={"center"}
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
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.button}
                onPress={keyboardHide}
              >
                <Text style={styles.buttonTitle}>Sign In</Text>
              </TouchableOpacity>
            </View> */}
            <StatusBar style="auto" />
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  imag: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  // form: {
  //   marginHorizontal: 30,
  // },
  // header: {
  //   alignItems: "center",
  //   marginBottom: 100,
  // },
  // headerTitle: {
  //   fontSize: 30,
  //   color: "#000000",
  //   fontFamily: "Roboto-Medium",
  // },
  // inputTitle: {
  //   color: "#000000",
  //   textTransform: "uppercase",
  //   fontWeight: "bold",
  //   fontSize: 18,
  //   marginBottom: 10,
  // },
  // input: {
  //   borderWidth: 1,
  //   borderColor: "#000000",
  //   height: 40,
  //   borderRadius: 7,
  //   padding: 10,
  // },
  // button: {
  //   height: 40,
  //   borderRadius: 15,
  //   marginTop: 20,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   marginHorizontal: 70,
  //   ...Platform.select({
  //     ios: {
  //       backgroundColor: "transparent",
  //       borderColor: "#000000",
  //     },
  //     android: {
  //       backgroundColor: "#ECEEE1",
  //       borderColor: "transparent",
  //     },
  //   }),
  // },
  // buttonTitle: {
  //   color: "#000000",
  //   fontSize: 18,
  //   textTransform: "uppercase",
  //   fontWeight: "bold",
  // },
});
