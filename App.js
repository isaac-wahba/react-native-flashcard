import * as React from "react";
import { View, Text } from "react-native";
import CardDetails from "./src/screens/CardDetails";
import DecksList from "./src/screens/DecksList";
import AddCard from "./src/screens/AddCard";
import Navigation from "./src/navigation";
import { Provider } from "react-redux";
import reducers from "./src/reducers";
import { createStore } from "redux";
export default function App() {
  const store = createStore(reducers);
  return (
    <Provider store={store}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Navigation />
      </View>
    </Provider>
  );
}
