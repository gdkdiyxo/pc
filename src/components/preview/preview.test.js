import React from 'react';
import { shallow } from 'enzyme';

import Preview from './preview';

describe('Preview', () => {
  it('renders without crashing', () => {
    shallow(<Preview />);
  });
});
