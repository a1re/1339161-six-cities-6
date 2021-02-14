import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {CITIES, DEFATULT_CITY_INDEX, MIN_REVIEW_LENGTH} from './const';
import offers from './mocks/offers';
import reviews from './mocks/reviews';
import authorizedUser from './mocks/auth-info';

ReactDOM.render(
    <App
      cities={CITIES}
      offers={offers}
      reviews={reviews}
      defaultCity={CITIES[DEFATULT_CITY_INDEX]}
      minReviewLength={MIN_REVIEW_LENGTH}
      authorizedUser={authorizedUser}
    />,
    document.querySelector(`#root`)
);
