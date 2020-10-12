import AsyncStorage from "@react-native-community/async-storage";

export const GET_DECKS = "GET_DECK";
export const ADD_NEW_DECK = "ADD_DECK";
export const DELETE_DECK = "DELETE_DECK";
export const SELECT_DECK = "SELECT_DECK";
export const SET_DECKS = "SET_DECKS";
export const DECKS_LOADING = "DECKS_LOADING";
export const DECKS_NOT_LOADING = "DECKS_NOT_LOADING";

const DECKS_KEY = "flashcard:decks";

export function decksLoading() {
  return {
    type: DECKS_LOADING,
  };
}

export function decksNotLoading() {
  return {
    type: DECKS_NOT_LOADING,
  };
}

export function setDecks(decks) {
  return {
    type: SET_DECKS,
    decks,
  };
}

export function getDecks() {
  return (dispatch) => {
    dispatch(decksLoading());
    AsyncStorage.getItem(DECKS_KEY)
      .then((results) => {
        const decks = results ? JSON.parse(results) : [];
        const alteredDecks = [];
        if (Object.keys(decks).length !== 0) {
          Objects.values(decks).map((item) => {
            alteredDecks.push(item);
          });
        }
        dispatch(setDecks(alteredDecks));
        dispatch(decksNotLoading());
      })
      .catch((err) => {
        console.log("can't get decks");
        dispatch(decksNotLoading());
      });
  };
}

export function deleteDeck(deckId) {
  return {
    type: DELETE_DECK,
    deckId,
  };
}

export function removeDeck(deckId) {
  return (dispatch) => {
    dispatch(deleteDeck(deckId));
    AsyncStorage.getItem(DECKS_KEY)
      .then((results) => {
        const data = JSON.parse(results);
        data[deckId] = undefined;
        delete data[deckId];
        return AsyncStorage.setItem(DECKS_KEY, JSON.stringify(data));
      })
      .catch((err) => {
       console.log("can't remove deck!")
      })
  };
}

export function saveNewDeck(newDeck) {
  return (dispatch) => {
    dispatch(addNewDeck(newDeck));
    AsyncStorage.mergeItem(
      DECKS_KEY,
      JSON.stringify({ [newDeck.id]: newDeck })
    ).catch((err) => {
      console.log("can't add new deck");
    });
  };
}

export function addNewDeck(newDeck) {
  return {
    type: ADD_NEW_DECK,
    newDeck,
  };
}

export function selectDeck(deck) {
  return {
    type: SELECT_DECK,
    deck,
  };
}
