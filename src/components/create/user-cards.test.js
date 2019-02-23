import React from 'react';
import { shallow } from 'enzyme';

import UserCards from './user-cards';

describe('UserCards', () => {
  it('renders without crashing', () => {
    shallow(<UserCards />);
  });
});
