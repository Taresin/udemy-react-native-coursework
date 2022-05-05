import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import ImageComponent from "../components/ImageComponent";

const ImageScreen = () => {
  const data = [
    { url: "https://picsum.photos/200/300", caption: "Scooby Doo" },
    { url: "https://picsum.photos/200/300", caption: "Daddy Long Legs" },
    { url: "https://picsum.photos/200/300", caption: "Marketing" },
  ];

  return (
    <View>
      <Text>ImageScreen</Text>
      <ImageComponent caption='Baba' />
      {/* <FlatList
        keyExtractor={(item) => item.caption}
        data={data}
        renderItem={({ item }) => {
          return <ImageComponent imageUrl={item.url} caption={item.caption} />;
        }}
      /> */}
    </View>
  );
};

export default ImageScreen;

const styles = StyleSheet.create({});
