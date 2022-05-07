import { StyleSheet, Text, View } from "react-native";
import React from "react";

const boxDimensions = 100;
const BoxScreen = () => {
  return (
    <View>
      <View style={styles.p1}>
        <View style={styles.child1} />
        <View style={styles.child2} />
      </View>
      <View style={styles.child3} />
    </View>
  );
};

export default BoxScreen;

const styles = StyleSheet.create({
  child1: {
    height: boxDimensions,
    width: boxDimensions,
    backgroundColor: "red",
  },
  child2: {
    height: boxDimensions,
    width: boxDimensions,
    backgroundColor: "blue",
  },
  child3: {
    height: boxDimensions,
    width: boxDimensions,
    alignSelf: "center",
    backgroundColor: "green",
  },
  p1: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
