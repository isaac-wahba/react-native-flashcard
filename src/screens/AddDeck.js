import React, { Component } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { addNewDeck } from "../actions/decks";

class AddDeck extends Component {
  state = {
    deck: "",
  };

  render() {
    const { addNewDeck, navigation } = this.props;
    return (
      <View style={styles.addCardContainer}>
        <Text style={styles.tip}>What is the title of the new Deck ...? </Text>
        <TextInput
          style={styles.textInputs}
          placeholder="Deck Title ... "
          //defaultValue={text}
          onChangeText={(deck) => this.setState({ deck })}
        />

        <TouchableOpacity
          onPress={() => {
            addNewDeck(this.state.deck);
            navigation.navigate("List");
          }}
        >
          <Text style={styles.submitQuestion}>Submit!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(null, { addNewDeck })(AddDeck);

const styles = StyleSheet.create({
  addCardContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: "#C5D3D7",
  },
  textInputs: {
    marginTop: 50,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "1B2398",
    borderRadius: 6,
    backgroundColor: "white",
    color: "#1B2398",
    textAlign: "center",
    fontSize: 30,
  },
  tip: {
    marginTop: 16,
    paddingVertical: 8,
    color: "#1B2398",
    textAlign: "left",
    fontSize: 30,
    fontWeight: "bold",
  },
  submitQuestion: {
    marginTop: 75,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#1B2398",
    borderRadius: 6,
    backgroundColor: "#white",
    color: "1B2398",
    textAlign: "center",
    fontSize: 30,
    paddingEnd: 10,
    paddingStart: 10,
  },
});
