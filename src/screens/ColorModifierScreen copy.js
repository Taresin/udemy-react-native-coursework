import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";
import ColorIncrementorComponent from "../components/ColorIncrementorComponent";

const ColorModifierScreen = () => {
  const [red, setRed] = useState(randomValue);
  const [green, setGreen] = useState(randomValue);
  const [blue, setBlue] = useState(randomValue);
  return (
    <View>
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
      <ColorIncrementorComponent
        colorName='Red'
        colorValue={red}
        onColorChange={(value) => setRed(sanitizedValue(value))}
      />
      <ColorIncrementorComponent
        colorName='Green'
        colorValue={green}
        onColorChange={(value) => setGreen(sanitizedValue(value))}
      />
      <ColorIncrementorComponent
        colorName='Blue'
        colorValue={blue}
        onColorChange={(value) => setBlue(sanitizedValue(value))}
      />
    </View>
  );
};
const randomValue = () => {
  return Math.floor(Math.random() * 256);
};

const sanitizedValue = (value) => {
  if (value < 0) {
    return 0;
  } else if (value > 255) {
    return 255;
  } else {
    return value;
  }
};
export default ColorModifierScreen;

const styles = StyleSheet.create({});
