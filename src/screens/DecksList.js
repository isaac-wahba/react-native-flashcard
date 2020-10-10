import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { selectDeck } from "../actions/decks";
class DecksList extends Component {
  render() {
    const { decks, navigation, selectDeck } = this.props;
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <Text>Get All Decks</Text>
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
const mapStateToProps = ({ decks }) => ({
  decks,
});
export default connect(mapStateToProps, { selectDeck })(DecksList);
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