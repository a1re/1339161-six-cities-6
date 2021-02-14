import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {CITIES, DEFATULT_CITY_INDEX} from './const';
import offers from './mocks/offers';
import reviews from './mocks/reviews';
import authorizedUser from './mocks/auth-info';

ReactDOM.render(
    <App
      cities={CITIES}
      offers={offers}
      reviews={reviews}
      defaultCity={CITIES[DEFATULT_CITY_INDEX]}
      authorizedUser={authorizedUser}
    />,
    document.querySelector(`#root`)
);
