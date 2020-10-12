import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { getDecks, selectDeck } from "../actions/decks";

class DecksList extends Component {
  componentDidMount() {
    this.props.getDecks();
  }
  render() {
    const { decks, navigation, selectDeck, loading } = this.props;
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        {decks.length > 0 ? (
          <FlatList
            data={decks}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  key={item.title}
                  onPress={() => {
                    selectDeck(item);
                    navigation.push("Details");
                  }}
                >
                  <View style={styles.card}>
                    <Text style={{ marginBottom: 10 }}>{item.title}</Text>
                    <Text>{item.questions.length} cards</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        ) : loading ? (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text>Loading...</Text>
          </View>
        ) : (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text>There's no available decks! Please Add a Dick!</Text>
          </View>
        )}

        <View
          style={{
            backgroundColor: "#61dafb",
            flexDirection: "row",
            justifyContent: "space-around",
            padding: 10,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("CreateDeck")}>
            <Text>ADD DECK</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>HOME</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const mapStateToProps = ({ decks, loading }) => ({
  decks,
  loading,
});
export default connect(mapStateToProps, { selectDeck, getDecks })(DecksList);
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    flex: 1,
    marginBottom: 20,
    paddingVertical: 40,
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#000",
    borderBottomWidth: 1,
  },
});
