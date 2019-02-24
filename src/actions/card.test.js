import {
  SET_RESULTS,
  setResults,
  SET_IMAGE,
  setImage,
  FLIP_CARD,
  flipCard,
  ADD_MESSAGE,
  addMessage,
  ADD_RECIPIENT,
  addRecipient,
  CLEAR_RECIPIENTS,
  clearRecipients,
  DELETE_EMAIL,
  deleteEmail,
  DISPLAY_CARDS,
  displayCards,
  SET_CARD,
  setCard,
  SET_EDITING,
  setEditing,
  CLEAR_CARD,
  clearCard,
  SET_ERROR,
  setError,
  searchImage,
  fetchCards
} from './card';

describe('setResults', () => {
  it('should return the action', () => {
    const results = { total: 10, pages: 1, results: [{}, {}] };
    const action = setResults(results);
    expect(action.type).toEqual(SET_RESULTS);
    expect(action.results).toEqual(results);
  });
});

describe('setImage', () => {
  it('should return the action', () => {
    const image = { src: 'fakeimage.com', alt: 'example alt' };
    const action = setImage(image);
    expect(action.type).toEqual(SET_IMAGE);
    expect(action.image).toEqual(image);
  });
});

describe('flipCard', () => {
  it('should return the action', () => {
    const action = flipCard();
    expect(action.type).toEqual(FLIP_CARD);
  });
});

describe('addMessage', () => {
  it('should return the action', () => {
    const message = 'test message';
    const action = addMessage(message);
    expect(action.type).toEqual(ADD_MESSAGE);
    expect(action.message).toEqual(message);
  });
});

describe('addRecipient', () => {
  it('should return the action', () => {
    const recipient = 'example@gmail.com';
    const action = addRecipient(recipient);
    expect(action.type).toEqual(ADD_RECIPIENT);
    expect(action.recipient).toEqual(recipient);
  });
});

describe('clearRecipients', () => {
  it('should return the action', () => {
    const action = clearRecipients();
    expect(action.type).toEqual(CLEAR_RECIPIENTS);
  });
});

describe('deleteEmail', () => {
  it('should return the action', () => {
    const index = 4;
    const action = deleteEmail(index);
    expect(action.type).toEqual(DELETE_EMAIL);
    expect(action.index).toEqual(index);
  });
});

describe('displayCards', () => {
  it('should return the action', () => {
    const userCards = [{ card: 1 }, { card: 2 }];
    const action = displayCards(userCards);
    expect(action.type).toEqual(DISPLAY_CARDS);
    expect(action.userCards).toEqual(userCards);
  });
});

describe('setCard', () => {
  it('should return the action', () => {
    const card = 4;
    const action = setCard(card);
    expect(action.type).toEqual(SET_CARD);
    expect(action.card).toEqual(card);
  });
});

describe('setEditing', () => {
  it('should return the action', () => {
    const boolean = true;
    const action = setEditing(boolean);
    expect(action.type).toEqual(SET_EDITING);
    expect(action.boolean).toEqual(boolean);
  });
});

describe('clearCard', () => {
  it('should return the action', () => {
    const action = clearCard();
    expect(action.type).toEqual(CLEAR_CARD);
  });
});

describe('setError', () => {
  it('should return the action', () => {
    const error = 'example error';
    const action = setError(error);
    expect(action.type).toEqual(SET_ERROR);
    expect(action.error).toEqual(error);
  });
});
