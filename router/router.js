import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AntDesign, Feather } from "@expo/vector-icons";

import RegistrationScreen from "../Screens/authScreen/RegistrationScreen";
import LoginScreen from "../Screens/authScreen/LoginScreen";
import PostsScreen from "../Screens/mainScreen/PostsScreen";
import CreatePostsScreen from "../Screens/mainScreen/CreatePostsScreen";
import ProfileScreen from "../Screens/mainScreen/ProfileScreen";

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
    <MainTab.Navigator>
      <MainTab.Screen
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <AntDesign
                name="appstore-o"
                size={24}
                color={!focused ? "#212121" : "#FFFFFF"}
                style={
                  !focused
                    ? {
                        width: 40,
                        textAlign: "center",
                        borderRadius: 20,
                      }
                    : {
                        height: 40,
                        width: 70,
                        textAlign: "center",
                        textAlignVertical: "center",
                        backgroundColor: "#FF6C00",
                        borderRadius: 20,
                      }
                }
              />
            );
          },
        }}
        name="PostsScreen"
        component={PostsScreen}
      />
      <MainTab.Screen
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <AntDesign
                name="plus"
                size={24}
                color={!focused ? "#212121" : "#FFFFFF"}
                style={
                  !focused
                    ? {
                        width: 40,
                        textAlign: "center",
                        borderRadius: 20,
                      }
                    : {
                        height: 40,
                        width: 70,
                        textAlign: "center",
                        textAlignVertical: "center",
                        backgroundColor: "#FF6C00",
                        borderRadius: 20,
                      }
                }
              />
            );
          },
        }}
        name="CreatePostsScreen"
        component={CreatePostsScreen}
      />
      <MainTab.Screen
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <Feather
                name="user"
                size={24}
                color={!focused ? "#212121" : "#FFFFFF"}
                style={
                  !focused
                    ? {
                        width: 40,
                        textAlign: "center",
                        borderRadius: 20,
                      }
                    : {
                        height: 40,
                        width: 70,
                        textAlign: "center",
                        textAlignVertical: "center",
                        backgroundColor: "#FF6C00",
                        borderRadius: 20,
                      }
                }
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
