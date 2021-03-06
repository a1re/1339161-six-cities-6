import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {City, DEFUAULT_CITY, MIN_REVIEW_LENGTH} from './const';
import offers from './mocks/offers';
import reviews from './mocks/reviews';
import authorizedUser from './mocks/auth-info';

ReactDOM.render(
    <App
      cities={Object.entries(City).map(([, city]) => city)}
      offers={offers}
      reviews={reviews}
      defaultCityName={DEFUAULT_CITY}
      minReviewLength={MIN_REVIEW_LENGTH}
      authorizedUser={authorizedUser}
    />,
    document.querySelector(`#root`)
);
