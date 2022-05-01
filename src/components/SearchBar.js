import { View, TextInput, StyleSheet } from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";
import React from "react";
import { Dimensions } from "react-native-web";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Fontisto name="search" size={20} color={"#858585"} />
      <TextInput style={styles.text} placeholder="Search" />
    </View>
  );
};

export default SearchBar;
const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    backgroundColor: "#333333",
    flexDirection: "row",
    paddingHorizontal: 20,
    height: 40,
    width: Dimensions.get("screen").width - 30,
    borderRadius: 20,
    alignItems: "center",
  },
  text: {
    paddingLeft: 10,
    width: Dimensions.get("screen").width - 50,
    height: 40,
    fontSize: 20,
  },
});
