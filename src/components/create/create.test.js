import React from 'react';
import { shallow } from 'enzyme';

import Create from './create';

describe('Create', () => {
  it('renders without crashing', () => {
    shallow(<Create />);
  });
});
