import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";
import { StackRouter } from "react-navigation";

const CounterScreen = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Text>Counter: {count}</Text>
      <Button
        title='Up'
        onPress={() => {
          setCount(count + 1);
        }}
      />
      <Button
        title='Down'
        onPress={() => {
          setCount(count - 1);
        }}
      />
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({});
