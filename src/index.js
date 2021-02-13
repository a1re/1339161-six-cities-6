import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {CITIES, DEFATULT_CITY_INDEX} from './const';
import offers from './mocks/offers';

const authorizedUser = `Oliver.conner@gmail.com`;

ReactDOM.render(
    <App
      cities={CITIES}
      offers={offers}
      defaultCity={CITIES[DEFATULT_CITY_INDEX]}
      authorizedUser={authorizedUser}
    />,
    document.querySelector(`#root`)
);
