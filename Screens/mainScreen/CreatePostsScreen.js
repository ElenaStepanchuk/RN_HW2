import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { Camera } from "expo-camera";
// import AsyncStorage from "@react-native-async-storage/async-storage";

const CreatePostsScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState("");

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri);
  };

  const sendPhoto = () => {
    navigation.navigate("PostsScreen", { photo });
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={setCamera}>
        {photo !== "" && (
          <View style={styles.takePhotoContainer}>
            <Image
              source={{ uri: photo }}
              style={{ height: 200, width: 200 }}
            />
          </View>
        )}
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.btnCamera}
          onPress={takePhoto}
        >
          <Text style={styles.textBtnCamera}>SNAP</Text>
        </TouchableOpacity>
      </Camera>
      <View>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.btnSend}
          onPress={sendPhoto}
        >
          <Text style={styles.textBtnSend}>SEND</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreatePostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // justifyContent: "center",
  },
  camera: {
    // height: 300,
    // margin: 50,
    // flex: 1,
    height: "70%",
    justifyContent: "center",
    alignItems: "center",
  },

  btnCamera: {
    marginTop: 200,
    borderWidth: 1,
    borderColor: "#fff",
    width: 70,
    height: 70,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#000",
  },
  textBtnCamera: {
    color: "#BDBDBD",
  },
  takePhotoContainer: {
    position: "absolute",
    top: 50,
    left: 10,
    borderColor: "#fff",
    borderWidth: 1,
  },
  btnSend: {
    marginHorizontal: 30,
    marginTop: 20,
    borderWidth: 2,
    borderColor: "#00008b",
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textBtnSend: {
    color: "#00008b",
    fontSize: 20,
  },
});
