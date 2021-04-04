import React from 'react';
import {render} from '@testing-library/react';
import FavoritesEmpty from './favorites-empty';

it(`Empty favorites list renders correctly`, () => {
  const {container} = render(<FavoritesEmpty />);
  expect(container).toMatchSnapshot();
});
