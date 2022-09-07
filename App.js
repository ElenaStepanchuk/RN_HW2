import { StatusBar } from "expo-status-bar";
import React, { useEffect, useCallback } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RegistrationScreen from "./Screens/authScreen/RegistrationScreen";
import LoginScreen from "./Screens/authScreen/LoginScreen";
import PostsScreen from "./Screens/mainScreen/PostsScreen";
import CreatePostsScreen from "./Screens/mainScreen/CreatePostsScreen";
import ProfileScreen from "./Screens/mainScreen/ProfileScreen";

const Stack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export default function App() {
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

  if (!fontsLoaded) {
    return null;
  }
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <ImageBackground
          style={styles.imag}
          source={require("./images/photoBg.jpg")}
        >
          <NavigationContainer>
            <MainTab.Navigator>
              <MainTab.Screen name="PostsScreen" component={PostsScreen} />
              <MainTab.Screen
                name="CreatePostsScreen"
                component={CreatePostsScreen}
              />
              <MainTab.Screen name="ProfileScreen" component={ProfileScreen} />
            </MainTab.Navigator>
          </NavigationContainer>
          <StatusBar style="auto" />
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

//auth
{
  /* <Stack.Navigator>
  <Stack.Screen
    options={{ headerShown: false }}
    name="Register"
    component={RegistrationScreen}
  />
  <Stack.Screen
    options={{ headerShown: false }}
    name="Login"
    component={LoginScreen}
  />
</Stack.Navigator>; */
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
  },
});
