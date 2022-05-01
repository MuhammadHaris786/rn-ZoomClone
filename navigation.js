import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import MeetingRoom from "./src/screens/MeetingRoom";
import Home from "./src/screens/Home";

const appNavi = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerShown: false,
      },
    },
    Meeting: {
      screen: MeetingRoom,
      navigationOptions: {
        title: "Start a Meeting",
        headerStyle: {
          backgroundColor: "#1c1c1c",
        },
        headerTintColor: "white",
      },
    },
  },
  {
    initialRouteName: "Home",
  }
);
export default createAppContainer(appNavi);
