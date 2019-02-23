import React from 'react';
import { shallow } from 'enzyme';

import RecipientView from './recipient-view';

describe('RecipientView', () => {
  it('renders without crashing', () => {
    shallow(<RecipientView />);
  });
});
