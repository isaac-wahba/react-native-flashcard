export const ADD_NEW_CARD = "ADD_NEW_CARD";

export function addCard(card, deckId) {
  return {
    type: ADD_NEW_CARD,
    card,
    deckId,
  };
}
