import React, { useEffect } from "react";
import { View, Text } from "react-native";
import CardDetails from "./src/screens/CardDetails";
import DecksList from "./src/screens/DecksList";
import Navigation from "./src/navigation";
import { Provider } from "react-redux";
import reducers from "./src/reducers";
import { createStore } from "redux";
import { setNotification } from "./src/utils/notifications";
import middleware from "./src/middleware";

const store = createStore(reducers, middleware,);


export default function App() {

  useEffect(() => {
    setNotification();
  }, []);

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
