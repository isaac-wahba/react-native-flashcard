import {
  DELETE_DECK,
  SET_DECKS,
  ADD_NEW_DECK,
  DECKS_LOADING,
  DECKS_NOT_LOADING,
} from "../actions/decks";
import { ADD_NEW_CARD } from "../actions/card";
import { SELECT_DECK } from "../actions/decks";
import { decks } from "../utils/_Data";
const initialState = {
  decks: [],
  selectedDeck: {},
  loading: false,
};
export default function deckReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DECKS:
      return {
        ...state,
        ...action.decks,
      };
    case DELETE_DECK:
      let filtersDecks = state.decks.filter((item) => {
        return item.id !== action.deckId;
      });
      return { ...state, decks: filtersDecks };

    case ADD_NEW_DECK:
      let newDeck = {
        title: action.newDeck,
        id: (state.decks.length + 1).toString(),
        questions: [],
      };
      return {
        ...state,
        decks: [...state.decks, action.newDeck],
      };
    case ADD_NEW_CARD:
      // return state;
      let newDecks = [...state.decks];
      let index = state.decks.findIndex((item) => item.id == action.deckId);
      newDecks[index].questions.push(action.card);
      return { ...state, decks: newDecks };
    // working actions
    case SELECT_DECK:
      return { ...state, selectedDeck: action.deck };

    case DECKS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case DECKS_NOT_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
