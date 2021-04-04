import React from 'react';
import {render} from '@testing-library/react';
import RoomReviewItem from './room-review-item';
import {adaptedReviewList} from '../../test-data';

it(`Room review item renders correctly`, () => {
  const {container} = render(<RoomReviewItem review={adaptedReviewList[0]}/>);
  expect(container).toMatchSnapshot();
});
