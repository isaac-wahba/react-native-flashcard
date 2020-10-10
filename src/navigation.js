import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import AddCard from "./screens/AddCard";
import AddDeck from "./screens/AddDeck";
import DeckDetails from "./screens/DeckDetails";
import DecksList from "./screens/DecksList";
import Quiz from "./screens/Quiz";
const AppNavigator = createStackNavigator({
  List: DecksList,
  Details: DeckDetails,
  CreateCard: AddCard,
  CreateDeck: AddDeck,
  Quiz,
});
export default createAppContainer(AppNavigator);