import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import React from "react";
import { Image } from "react-native-web";
const items = [
  { id: 1, name: "star", title: "Starred" },
  { id: 2, name: require("../../assets/face1.jpeg"), title: "Haris" },
  { id: 3, name: require("../../assets/face2.jpeg"), title: "Teacher" },
  { id: 4, name: require("../../assets/face3.jpeg"), title: "HOD" },
];
const ContactsMenu = () => {
  return (
    <View style={styles.container}>
      {items.map((item, index) => {
        return (
          <View style={styles.buttonContainer} key={index}>
            <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: 50,
                width: 50,
                backgroundColor: "#333333",
                borderRadius: 15,
              }}
            >
              {item.name === "star" ? (
                <FontAwesome name={item.name} size={30} color={"#efefef"} />
              ) : (
                <Image source={item.name} style={styles.img} />
              )}
            </TouchableOpacity>
            <Text style={styles.text}>{item.title}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default ContactsMenu;
const styles = StyleSheet.create({
  container: {},
  buttonContainer: {
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  text: {
    color: "white",
    paddingLeft: 10,
    fontSize: 18,
  },
  img: {
    height: 50,
    width: 50,
    backgroundColor: "#333333",
    borderRadius: 15,
  },
});
