import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const ColorIncrementorComponent = ({
  colorName,
  colorValue,
  onColorChange,
}) => {
  return (
    <View>
      <Text>{`Current value of ${colorName}`}</Text>
      <Button
        title={`Increase ${colorName}`}
        onPress={() => {
          onColorChange(colorValue + 10);
        }}
      />
      <Button
        title={`Decrease ${colorName}`}
        onPress={() => {
          onColorChange(colorValue - 10);
        }}
      />
    </View>
  );
};

export default ColorIncrementorComponent;

const styles = StyleSheet.create({});
