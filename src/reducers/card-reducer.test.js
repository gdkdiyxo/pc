import cardReducer from './card-reducer';
import {
  setResults,
  setImage,
  flipCard,
  addMessage,
  addRecipient,
  clearRecipients,
  deleteEmail,
  displayCards,
  setCard,
  setEditing,
  clearCard,
  setError
} from '../actions/card';

describe('authReducer', () => {
  const testResults = [{ image1: 'testimage1' }, { image2: 'testimage2' }];
  const testImage = {
    image: {
      full: 'testfull',
      thumb: 'testthumb',
      alt: 'test alt',
      credit: 'fake photographer',
      portfolio: 'www.exampleportfolio.com'
    }
  };
  const testMessage = 'this is a test';
  const testRecipient1 = 'www.example@email.com';
  const testRecipient2 = 'www.example2@email.com';
  const index = 1;
  const testUserCards = [{ card1: {} }, { card2: {} }, { card3: {} }];
  const testCard = {
    testCardId: 'asdfi4n2f9v9rHsd92K',
    image: {},
    message: testMessage,
    recipients: [testRecipient1, testRecipient2]
  };
  const editing = true;
  const testError = 'test error';

  it('should set the initial state', () => {
    const state = cardReducer(undefined, { type: '__UNKNOWN' });
    expect(state).toEqual({
      results: [],
      cardId: null,
      image: {
        full: null,
        thumb: null,
        alt: null,
        credit: null,
        portfolio: null
      },
      message:
        'Eiusmod ut do labore nostrud deserunt consequat ut exercitation aliqua reprehenderit proident officia eiusmod. Ex ullamco incididunt eu in sit consequat nulla excepteur fugiat elit ipsum. Culpa sint sunt est esse est laborum velit anim voluptate magna do id veniam Lorem. Ut irure labore laboris est. Non eu eiusmod eu in. Quis aute labore veniam eu occaecat Lorem eu culpa aliquip elit Lorem magna do.',
      recipients: [],
      isCardFlipped: false,
      userCards: [],
      editing: false,
      error: null
    });
  });

  describe('setResults', () => {
    let state;
    state = cardReducer(state, setResults(testResults));
    expect(state.results).toEqual(testResults);
  });

  describe('setImage', () => {
    let state;
    state = cardReducer(state, setImage(testImage));
    expect(state.image).toEqual(testImage);
  });

  describe('flipCard', () => {
    it('should reverse the state of isCardFlipped', () => {
      let state;
      state = cardReducer(state, flipCard());
      expect(state.isCardFlipped).toEqual(true);
    });
  });

  describe('addMessage', () => {
    it('should update the state with the message', () => {
      let state;
      state = cardReducer(state, addMessage(testMessage));
      expect(state.message).toEqual(testMessage);
    });
  });

  describe('addRecipient', () => {
    it('should update the state with the message', () => {
      let state;
      state = cardReducer(state, addRecipient(testRecipient1));
      expect(state.recipients).toEqual([testRecipient1]);
    });
  });

  describe('clearRecipients', () => {
    it('should update recipients state to empty array', () => {
      let state;
      state = cardReducer(state, addRecipient(testRecipient1));
      state = cardReducer(state, addRecipient(testRecipient2));
      state = cardReducer(state, clearRecipients());
      expect(state.recipients).toEqual([]);
    });
  });

  describe('deleteEmail', () => {
    it('should delete the correct email', () => {
      let state;
      state = cardReducer(state, addRecipient(testRecipient1));
      state = cardReducer(state, addRecipient(testRecipient2));
      state = cardReducer(state, deleteEmail(index));
      expect(state.recipients).toEqual([testRecipient1]);
    });
  });

  describe('displayCards', () => {
    it('should add userCards to state', () => {
      let state;
      state = cardReducer(state, displayCards(testUserCards));
      expect(state.userCards).toEqual(testUserCards);
    });
  });

  describe('setCard', () => {
    it('should state with currentCard', () => {
      let state;
      state = cardReducer(state, setCard(testCard));
      expect(state).toEqual({
        results: [],
        cardId: testCard._testCardId,
        image: {},
        message: testMessage,
        recipients: [testRecipient1, testRecipient2],
        isCardFlipped: false,
        userCards: [],
        editing: false,
        error: null
      });
    });
  });

  describe('setEditing', () => {
    it('should change state to editing: true', () => {
      let state;
      state = cardReducer(state, setEditing(editing));
      expect(state.editing).toEqual(true);
    });
  });

  describe('clearCard', () => {
    it('should set state card keys to null', () => {
      let state;
      state = cardReducer(state, setCard(testCard));
      state = cardReducer(state, clearCard());
      expect(state).toEqual({
        results: [],
        cardId: null,
        image: {
          full: null,
          thumb: null,
          alt: null,
          credit: null,
          portfolio: null
        },
        message: '',
        recipients: [],
        isCardFlipped: false,
        userCards: [],
        editing: false,
        error: null
      });
    });
  });

  describe('setError', () => {
    it('should update state with the error', () => {
      let state;
      state = cardReducer(state, setError(testError));
      expect(state.error).toEqual(testError);
    });
  });
});
