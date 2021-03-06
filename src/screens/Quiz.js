import React, { Component, useState, useEffect } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { clearNotification, setNotification } from "../utils/notifications";

import { connect, useSelector } from "react-redux";
const Quiz = (props) => {
  const [currIndex, setcurrIndex] = useState(0);
  const [answerAppeard, setanswerAppeard] = useState(false);
  const [correctAnsCount, setcorrectAnsCount] = useState(0);
  const [isLastQuestion, setisLastQuestion] = useState(false);
  const selectedDeck = useSelector((state) => state.selectedDeck);

  const goToNextAnswer = () => {
    setanswerAppeard(false);
    if (currIndex < questions.length - 1) {
      setcurrIndex((old) => old + 1);
    } else {
      clearNotification().then(setNotification);
      setisLastQuestion(true);
    }
  };
  const reInitiatScreen = () => {
    setcorrectAnsCount(0);
    setcurrIndex(0);
    setisLastQuestion(false);
    setanswerAppeard(false);
  };
  const { questions } = selectedDeck;

  return (
    <View style={styles.saveCardContainer}>
      {questions.length > 0 ? (
        <>
          <Text>
            Question {currIndex + 1} / {questions.length}
          </Text>
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
                Your score is{" "}
                {((correctAnsCount / questions.length) * 100).toFixed(2)} %
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
        </>
      ) : (
        <Text>Deck is empty, Please add some questions..!</Text>
      )}
    </View>
  );
};

export default Quiz;
const styles = StyleSheet.create({
  saveCardContainer: {
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
    backgroundColor: "white",
    color: "#1B2398",
    textAlign: "center",
    fontSize: 30,
    paddingEnd: 10,
    paddingStart: 10,
  },
  flipCard: {
    marginTop: 75,
    paddingVertical: 8,
    color: "#1B2398",
    textAlign: "center",
    fontSize: 20,
    paddingEnd: 10,
    paddingStart: 10,
  },
});
