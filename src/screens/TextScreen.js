import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";

const TextScreen = () => {
  const [name, setName] = useState("");
  return (
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize={"none"}
        autoCorrect={false}
        value={name}
        onChangeText={(newName) => setName(newName)}
      />
      <Text>Hello {name}</Text>
      {name.length < 4 ? (
        <Text>Password must be more than 4 characters</Text>
      ) : null}
    </View>
  );
};

export default TextScreen;

const styles = StyleSheet.create({
  input: { margin: 15, borderColor: "black", borderWidth: 1 },
});
