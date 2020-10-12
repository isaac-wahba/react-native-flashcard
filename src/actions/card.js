export const ADD_NEW_CARD = "ADD_NEW_CARD";
import {DECKS_KEY} from './decks'
import AsyncStorage from '@react-native-community/async-storage';

export function addCard(card, deckId) {
  return {
    type: ADD_NEW_CARD,
    card,
    deckId,
  };
}

export function saveCard(card, deckId) {
  return (dispatch) => {
    dispatch(addCard(card, deckId));
    AsyncStorage.getItem(DECKS_KEY)
      .then((results) => {
        const data = JSON.parse(results);
        data[deckId].questions.push(card);
        return AsyncStorage.setItem(DECKS_KEY, JSON.stringify(data));
      })
      .catch((err) => {
       console.log("can't add card to deck!")
      });
  };
}
