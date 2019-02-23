import React from 'react';
import { shallow } from 'enzyme';

import LoginForm from './login-form';

describe('loginForm', () => {
  it('renders without crashing', () => {
    shallow(<LoginForm />);
  });
});
