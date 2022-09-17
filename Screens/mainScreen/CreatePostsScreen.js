import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Camera, CameraType } from "expo-camera";
import { TouchableOpacity } from "react-native-gesture-handler";

const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <Camera style={styles.camera}>
        <TouchableOpacity style={styles.snapContainer} onPress={() => {}}>
          <Text style={styles.snap}>SNAP</Text>
        </TouchableOpacity>
      </Camera>
    </View>
  );
};

export default CreatePostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // justifyContent: "center",
  },
  camera: {
    height: 300,
    margin: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  snap: {
    color: "#fff",
  },
  snapContainer: {
    marginTop: 200,
    borderWidth: 1,
    borderColor: "#fff",
    width: 70,
    height: 70,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
