import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  //   Keyboard,
  Platform,
} from "react-native";
// import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";
export default function RegistrationScreen() {
  const userInfo = {
    email: "",
    password: "",
  };

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(userInfo);
  const [dimensions, setdimensions] = useState(
    Dimensions.get("window").width - 20 * 2
  );

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 20 * 2;

      setdimensions(width);
    };
    Dimensions.addEventListener("change", onChange);
    // return () => {
    //   Dimensions.removeEventListener("change", onChange);
    // };
  }, []);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    //   Keyboard.dismiss();
    console.log(state);
    setState(userInfo);
  };

  //   const [fontsLoaded] = useFonts({
  //     "Roboto-Medium": require("./fonts/Roboto-Medium.ttf"),
  //     "Roboto-Regular": require("./fonts/Roboto-Regular.ttf"),
  //   });

  //   useEffect(() => {
  //     async function prepare() {
  //       await SplashScreen.preventAutoHideAsync();
  //     }
  //     prepare();
  //   }, []);

  //   const onLayoutRootView = useCallback(async () => {
  //     if (fontsLoaded) {
  //       await SplashScreen.hideAsync();
  //     }
  //   }, [fontsLoaded]);

  //   if (!fontsLoaded) {
  //     return null;
  //   }
  console.log(Dimensions.get("window").width);

  return (
    <View
      style={{
        ...styles.form,
        marginBottom: isShowKeyboard ? 20 : 100,
        width: dimensions,
      }}
    >
      <View style={styles.photo}></View>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Регистрация</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          //   textAlign={"center"}
          placeholder="Логин"
          onFocus={() => setIsShowKeyboard(true)}
          value={state.email}
          onChangeText={(value) => {
            setState((prevState) => ({ ...prevState, email: value }));
          }}
        />
      </View>
      <View style={{ marginTop: 16 }}>
        <TextInput
          style={styles.input}
          //   textAlign={"center"}
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
          style={styles.input}
          placeholder="Пароль"
          //   textAlign={"center"}
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
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    // marginHorizontal: 30,
  },
  photo: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    // borderWidth: 1,
    // borderColor: "#E8E8E8",
    borderRadius: 16,
    zIndex: 5,
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
    // textAlign: "center",
  },
  //   inputTitle: {
  //     color: "#000000",
  //     textTransform: "uppercase",
  //     fontWeight: "bold",
  //     fontSize: 18,
  //     marginBottom: 10,
  //   },
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
  button: {
    height: 40,
    borderRadius: 15,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 70,
    ...Platform.select({
      ios: {
        backgroundColor: "transparent",
        borderColor: "#000000",
      },
      android: {
        backgroundColor: "#ECEEE1",
        borderColor: "transparent",
      },
    }),
  },
  buttonTitle: {
    color: "#000000",
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
