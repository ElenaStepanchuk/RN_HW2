import { StatusBar } from "expo-status-bar";
import React, { useEffect, useCallback, useState } from "react";
import {
  StyleSheet,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Provider } from "react-redux";
// import AsyncStorage from "@react-native-async-storage/async-storage";

import { store } from "./redux/store";

import firebase from "./firebase/config";

import { NavigationContainer } from "@react-navigation/native";
import useRoute from "./router/router";

export default function App() {
  const [user, setUser] = useState(null);
  const keyboardHide = () => {
    Keyboard.dismiss();
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

  firebase.auth().onAuthStateChanged((user) => {
    setUser(user);
  });

  const routing = useRoute(user);
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <View style={styles.container} onLayout={onLayoutRootView}>
          <NavigationContainer>{routing}</NavigationContainer>
          <StatusBar style="auto" />
        </View>
      </TouchableWithoutFeedback>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
