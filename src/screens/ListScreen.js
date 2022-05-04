import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "John", age: 21 },
    { name: "Wendy", age: 24 },
    { name: "Peter", age: 27 },
  ];
  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item, index }) => {
        return (
          <View style={styles.cellStyle}>
            <Text style={styles.textStyle}>{item.name}</Text>
            <Text style={styles.textStyle}>{item.age}</Text>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 80,
  },
  cellStyle: {
    marginVertical: 100,
  },
});

export default ListScreen;
