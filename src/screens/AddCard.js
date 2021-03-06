import React, { Component } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { connect } from "react-redux";
import { saveCard } from "../actions/card";

class AddCard extends Component {
  state = {
    card: {
      question: "",
      answer: "",
    },
  };
  handleChange = (name, value) => {
    this.setState({ card: { ...this.state.card, [name]: value } });
  };
  handleSubmit = () => {
    this.props.saveCard(this.state.card, this.props.selectedDeck.id);

    this.props.navigation.push("Details");
  };
  render() {
    return (
      <View style={styles.saveCardContainer}>
        <Text style={styles.tip}>What is the question you want to add? </Text>
        <TextInput
          style={styles.textInputs}
          placeholder="Type the question here.."
          onChangeText={(text) => this.handleChange("question", text)}
        />
        <TextInput
          style={styles.textInputs}
          placeholder="Type the answer here.."
          onChangeText={(text) => this.handleChange("answer", text)}
        />
        <KeyboardAvoidingView
        style={{flex:1}}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <TouchableOpacity onPress={this.handleSubmit}>
            <Text style={styles.submitQuestion}>Add Question!</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const mapStateToProps = ({ selectedDeck }) => ({
  selectedDeck,
});

export default connect(mapStateToProps, { saveCard })(AddCard);

const styles = StyleSheet.create({
  saveCardContainer: {
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
    borderColor: "#1B2398",
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
    backgroundColor: "white",
    color: "#1B2398",
    textAlign: "center",
    fontSize: 30,
    paddingEnd: 10,
    paddingStart: 10,
  },
});
