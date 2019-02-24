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
} from '../actions/auth';

describe('authReducer', () => {
  const username = 'testuser';

  it('should set the initial state', () => {
    const state = cardReducer(undefined, { type: '__UNKNOWN' });
    expect(state).toEqual({
      results: [],
      cardId: null,
      id: null,
      image: {
        full:
          'https://images.unsplash.com/photo-1503970999490-4404449dc349?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjU0MzUwfQ',
        thumb:
          'https://images.unsplash.com/photo-1503970999490-4404449dc349?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjU0MzUwfQ',
        alt: 'Roman Colosseum, Italy under clear sky during golden hour',
        credit: 'Willian West',
        portfolio: 'https://unsplash.com/@willianwest'
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
});
