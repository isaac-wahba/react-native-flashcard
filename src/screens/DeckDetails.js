import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { removeDeck } from "../actions/decks";
class DeckDetails extends Component {
  render() {
    const {
      navigation,
      selectedDeck: { title, questions, id },
      removeDeck,
    } = this.props;
    return (
      <View>
        <TouchableOpacity>
          <Text style={{ fontSize: 50 }}>{title}</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 50, color: "gray" }}>
          Cards Number: {questions.length}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("CreateCard")}>
          <Text style={styles.addCard}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Quiz")}>
          <Text style={styles.startQuiz}>Start Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            removeDeck(id);
            navigation.navigate("List");
          }}
        >
          <Text style={styles.deleteCard}>Delete Deckt</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = ({ selectedDeck }) => ({
  selectedDeck,
});
export default connect(mapStateToProps, { removeDeck })(DeckDetails);
const styles = StyleSheet.create({
  addCard: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  startQuiz: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#18CB84",
    color: "white",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  deleteCard: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#F04747",
    color: "white",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
});