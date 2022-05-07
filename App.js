import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ColorModifierScreen from "./src/screens/ColorModifierScreen";
import ColorScreen from "./src/screens/ColorScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import CounterScreen from "./src/screens/CounterScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ImageScreen from "./src/screens/ImageScreen";
import ListScreen from "./src/screens/ListScreen";
import NameScreen from "./src/screens/NameScreen";
import TextScreen from "./src/screens/TextScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    Name: NameScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    ColorMod: ColorModifierScreen,
    Text: TextScreen,
  },
  {
    initialRouteName: "Text",
    defaultNavigationOptions: {
      title: "Sample App",
    },
  }
);

export default createAppContainer(navigator);
