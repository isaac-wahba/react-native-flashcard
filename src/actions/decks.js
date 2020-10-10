import { decks } from "../utils/_Data";

export const GET_DECKS = "GET_DECK";
export const ADD_NEW_DECK = "ADD_DECK";
export const DELETE_DECK = "DELETE_DECK";
export const SELECT_DECK = "SELECT_DECK";

export function getDecks(decks) {
  return {
    type: GET_DECKS,
    decks,
  };
}
export function deleteDeck(deckId) {
  return {
    type: DELETE_DECK,
    deckId,
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
