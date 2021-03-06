import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {City, DEFUAULT_CITY} from './const';
import offers from './mocks/offers';
import reviews from './mocks/reviews';
import authorizedUser from './mocks/auth-info';

ReactDOM.render(
    <App
      cities={Object.entries(City).map(([, city]) => city)}
      offers={offers}
      reviews={reviews}
      defaultCityName={DEFUAULT_CITY}
      authorizedUser={authorizedUser}
    />,
    document.querySelector(`#root`)
);
