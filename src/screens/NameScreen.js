import React from "react";
import { Text, StyleSheet, View } from "react-native";

const NameScreen = () => {
  const name = "Dougy";
  return (
    <View>
      <Text style={header.textStyle}>Get Started</Text>
      <Text style={subtitle.textStyle}>My name is Dougy</Text>
      <Text style={subtitle.textStyle}>Name variable set to {name}</Text>
    </View>
  );
};

const header = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
});

const subtitle = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  },
});

export default NameScreen;
