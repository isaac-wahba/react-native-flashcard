import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

class CardDetails extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity>
          <Text style={{ fontSize: 50 }}>Deckt1</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 50, color: "gray" }}>Cards Number: 2</Text>

        <TouchableOpacity>
          <Text style={styles.addCard}>Add Card</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.startQuiz}>Start Quiz</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.deleteCard}>Delete Deckt</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


export default CardDetails;

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
