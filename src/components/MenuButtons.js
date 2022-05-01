import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import React from "react";
const items = [
  {
    id: 1,
    name: "video-camera",
    title: "New Meeting",
    customColor: "#FF751F",
  },
  {
    id: 2,
    name: "plus-square",
    title: "Join",
  },
  {
    id: 3,
    name: "calendar",
    title: "Schedule",
  },
  {
    id: 4,
    name: "upload",
    title: "Share Screen",
  },
];

const MenuButtons = (props) => {
  const startMeeting = () => {
    props.navigation.navigate("Meeting");
  };
  return (
    <View style={styles.container}>
      {items.map((item, index) => {
        return (
          <View style={styles.buttonContainer} key={index}>
            <TouchableOpacity
              onPress={() => {
                if (item.name === "video-camera") {
                  startMeeting();
                }
              }}
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: 50,
                width: 50,
                backgroundColor: "blue",
                borderRadius: 15,
                backgroundColor: item.customColor
                  ? item.customColor
                  : "#0470DC",
              }}
            >
              <FontAwesome name={item.name} size={30} color={"#efefef"} />
            </TouchableOpacity>
            <Text style={styles.menuText}>{item.title}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default MenuButtons;
const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    paddingLeft: 10,
    paddingBottom: 10,
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
  },
  menuText: {
    color: "#858585",
    fontSize: 12,
    paddingTop: 10,
    fontWeight: "700",
  },
});
