import React from 'react';
import {render} from '@testing-library/react';
import FooterLogo from './footer-logo';

it(`Footer logo renders correctly`, () => {
  const {container} = render(<FooterLogo />);
  expect(container).toMatchSnapshot();
});
