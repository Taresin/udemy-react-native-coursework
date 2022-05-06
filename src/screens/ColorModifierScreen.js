import { StyleSheet, Text, View, Button } from "react-native";
import React, { useReducer } from "react";
import ColorIncrementorComponent from "../components/ColorIncrementorComponent";

const ColorModifierScreen = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "Red":
        return { ...state, red: action.payload };
      case "Green":
        return { ...state, green: action.payload };
      case "Blue":
        return { ...state, blue: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    red: randomValue(),
    green: randomValue(),
    blue: randomValue(),
  });

  const { red, green, blue } = state;

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
        onColorChange={(colorName, value) =>
          dispatch({ type: colorName, payload: sanitizedValue(value) })
        }
      />
      <ColorIncrementorComponent
        colorName='Green'
        colorValue={green}
        onColorChange={(colorName, value) =>
          dispatch({ type: colorName, payload: sanitizedValue(value) })
        }
      />
      <ColorIncrementorComponent
        colorName='Blue'
        colorValue={blue}
        onColorChange={(colorName, value) =>
          dispatch({ type: colorName, payload: sanitizedValue(value) })
        }
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
