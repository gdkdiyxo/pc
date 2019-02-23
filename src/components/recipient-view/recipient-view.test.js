import React from 'react';
import { shallow } from 'enzyme';

import Postcard from './postcard';

describe('Postcard', () => {
  it('renders without crashing', () => {
    shallow(<Postcard />);
  });
});
