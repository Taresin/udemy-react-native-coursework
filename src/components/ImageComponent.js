import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const ImageComponent = ({ imageUrl, caption }) => {
  console.log(imageUrl);
  return (
    <View>
      <Image source={require("../../assets/test1.jpg")} />
      <Text>{caption + "Hello"}</Text>
    </View>
  );
};

export default ImageComponent;

const styles = StyleSheet.create({});
