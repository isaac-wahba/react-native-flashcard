import React, { Component, useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { connect, useSelector } from "react-redux";
const Quiz = (props) => {
  const [currIndex, setcurrIndex] = useState(0);
  const [answerAppeard, setanswerAppeard] = useState(false);
  const [correctAnsCount, setcorrectAnsCount] = useState(0);
  const [isLastQuestion, setisLastQuestion] = useState(false);
  const selectedDeck = useSelector((state) => state.selectedDeck);
  const goToNextAnswer = () => {
    // const { questions } = selectedDeck;
    currIndex < questions.length - 1
      ? setcurrIndex((old) => old + 1)
      : setisLastQuestion(true);
    // console.log(questions && questions.length, currIndex);
  };
  const reInitiatScreen = () => {
    setcorrectAnsCount(0);
    setcurrIndex(0);
    setisLastQuestion(false);
    setanswerAppeard(false);
  };
  const { questions } = selectedDeck;
  // const { currIndex, answerAppeard, correctAnsCount } = state;
  // console.log(questions.length, currIndex);
  return (
    <View style={styles.addCardContainer}>
      <Text style={styles.question}>
        {answerAppeard
          ? questions[currIndex].answer
          : questions[currIndex].question}
      </Text>
      <TouchableOpacity onPress={() => setanswerAppeard((old) => !old)}>
        <Text style={styles.flipCard}>
          {answerAppeard ? "Question" : "Answer"}
        </Text>
      </TouchableOpacity>
      {isLastQuestion ? (
        <>
          <Text>
            {correctAnsCount} / {questions.length} correct answers
          </Text>
          <TouchableOpacity onPress={() => reInitiatScreen()}>
            <Text style={styles.correct}>Restart Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Details")}
          >
            <Text style={styles.incorrect}>Go To Deck</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TouchableOpacity
            onPress={() => {
              setcorrectAnsCount((old) => old + 1);
              goToNextAnswer();
            }}
          >
            <Text style={styles.correct}>Correct!</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={goToNextAnswer}>
            <Text style={styles.incorrect}>InCorrect!</Text>
          </TouchableOpacity>
        </>
      )}
      <TouchableOpacity>
        <Text style={styles.submitQuestion}>Submit!</Text>
      </TouchableOpacity>
    </View>
  );
};
// const mapStateToProps = ({ selectedDeck }) => ({
//   selectedDeck,
// });
export default Quiz;
const styles = StyleSheet.create({
  addCardContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: "#C5D3D7",
  },
  correct: {
    marginTop: 16,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#18CB84",
    color: "white",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  incorrect: {
    marginTop: 16,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#F04747",
    color: "white",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  question: {
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
  flipCard: {
    marginTop: 75,
    paddingVertical: 8,
    color: "1B2398",
    textAlign: "center",
    fontSize: 20,
    paddingEnd: 10,
    paddingStart: 10,
  },
});