import firebase from "../../firebase/config";
import { userSlice } from "./authReducer";

// Registration
export const authSignUpUser =
  ({ email, password, login }) =>
  async (dispatch, getState) => {
    try {
      const { user } = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      dispatch(userSlice.actions.updateUserProfile({ userId: user.uid }));
      console.log("authSignUpUser", user);
    } catch (error) {
      console.log("error", error);
      console.log("error.code", error.code);
      console.log("error.message", error.message);
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
      console.log("authSignInUser", user);
    } catch (error) {
      console.log("error", error);
      console.log("error.code", error.code);
      console.log("error.message", error.message);
    }
  };
// export const authSignOutUser = () = async (dispatch, getState) => {}
