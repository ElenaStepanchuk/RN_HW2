import firebase from "../../firebase/config";
import { authSlice } from "./authReducer";
// import { auth } from "../../firebase/config";

// import AsyncStorage from "@react-native-async-storage/async-storage";

// Registration
export const authSignUpUser =
  ({ email, password, login }) =>
  async (dispatch, getState) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      const user = firebase.auth().currentUser;
      user.updateProfile({
        displayName: login,
      });

      const updateUserSuccess = await firebase.auth().currentUser;

      const { uid, displayName } = await firebase.auth().currentUser;
      console.log("uid", uid, "displayName", displayName);

      dispatch(
        authSlice.actions.updateUserProfile({
          userId: uid,
          login: displayName,
        })
      );
      // console.log("authSignUpUser", user);
    } catch (error) {
      console.log("error", error);
      console.log("rror.message", error.message);
    }
  };

// Login

export const authSignInUser =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      dispatch(authSlice.actions.updateUserProfile({ userId: payload.uid }));
      console.log("authSignInUser", user);
    } catch (error) {
      console.log("error", error);
      console.log("error.code", error.code);
      console.log("error.message", error.message);
    }
  };
// export const authSignOutUser = () = async (dispatch, getState) => {}
