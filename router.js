import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AntDesign, Feather } from "@expo/vector-icons";

import RegistrationScreen from "./Screens/authScreen/RegistrationScreen";
import LoginScreen from "./Screens/authScreen/LoginScreen";
import PostsScreen from "./Screens/mainScreen/PostsScreen";
import CreatePostsScreen from "./Screens/mainScreen/CreatePostsScreen";
import ProfileScreen from "./Screens/mainScreen/ProfileScreen";

const Stack = createStackNavigator();
const MainTab = createBottomTabNavigator();

const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <Stack.Navigator>
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
      </Stack.Navigator>
    );
  }

  return (
    <MainTab.Navigator tabBarOptions={{ showLabel: false }}>
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <AntDesign
                name="appstore-o"
                size={size}
                color={!focused ? (color = "#D9D9D9") : (color = "#FF6C00")}
              />
            );
          },
        }}
        name="PostsScreen"
        component={PostsScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <AntDesign
                // style={{ width: 70, height: 40 }}
                name="pluscircle"
                size={40}
                color={!focused ? (color = "#D9D9D9") : (color = "#FF6C00")}
              />
            );
          },
        }}
        name="CreatePostsScreen"
        component={CreatePostsScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <Feather
                name="user"
                size={size}
                color={!focused ? (color = "#D9D9D9") : (color = "#FF6C00")}
              />
            );
          },
        }}
        name="ProfileScreen"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};

export default useRoute;
