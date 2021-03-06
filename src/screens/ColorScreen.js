import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import React, { useState } from "react";

const ColorScreen = () => {
  const [colorList, setColorList] = useState([]);
  return (
    <View>
      <Button
        title='Add a color'
        onPress={() => {
          setColorList([...colorList, randomColor()]);
        }}
      />
      <FlatList
        keyExtractor={(item) => item}
        data={colorList}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
      />
    </View>
  );
};

const randomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
};

export default ColorScreen;

const styles = StyleSheet.create({});
