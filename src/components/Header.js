import { View, Text, StyleSheet } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

import React from "react";
import { Dimensions } from "react-native-web";

const Header = () => {
  return (
    <View style={styles.container}>
      <Entypo name="notification" size={30} color="#efefef" />
      <Text style={styles.heading}>Meet & Chat</Text>
      <Entypo name="new-message" size={30} color="#efefef" />
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: Dimensions.get("screen").width - 20,
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  heading: {
    color: "#efefef",
    fontSize: 20,
    fontWeight: "700",
    paddingLeft: "40%",
    paddingRight: "40%",
  },
});
