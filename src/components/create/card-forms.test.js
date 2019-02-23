import React from 'react';
import { shallow } from 'enzyme';

import CardForms from './card-forms';

describe('CardForms', () => {
  it('renders without crashing', () => {
    shallow(<CardForms />);
  });
});
