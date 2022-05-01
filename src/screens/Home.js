import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { SafeAreaView } from "react-native";
import ContactsMenu from "../components/ContactsMenu";
import MenuButtons from "../components/MenuButtons";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Header />
        <SearchBar />
        <MenuButtons navigation={navigation} />
        <ContactsMenu />
      </SafeAreaView>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
  },
});
