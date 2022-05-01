import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Text,
  Dimensions,
} from "react-native";
import React, { useState } from "react";

const Name = (name, setName) => {
  return (
    <TextInput
      style={styles.name}
      placeholder={"Enter name"}
      value={name}
      onChangeText={(val) => setName(val)}
    />
  );
};

const room = (roomID, setRoomID) => {
  return (
    <TextInput
      style={styles.name}
      placeholder={"Enter roomID"}
      value={roomID}
      onChangeText={(val) => setRoomID(val)}
    />
  );
};

const button = () => {
  return <Button title="Start Meeting"></Button>;
};
const MeetingRoom = () => {
  const [name, setName] = useState();
  const [roomID, setRoomID] = useState();
  return (
    <View style={styles.container}>
      <View>{Name(name, setName)}</View>
      {room(roomID, setRoomID)}
      {button()}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    flex: 1,
  },
  name: {
    backgroundColor: "#373538",
    width: "100%",
    height: 50,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: "#484648",
    justifyContent: "center",
  },
});
export default MeetingRoom;
