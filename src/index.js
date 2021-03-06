import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import {City} from './const';
import offers from './mocks/offers';
import reviews from './mocks/reviews';
import authorizedUser from './mocks/auth-info';
import {reducer} from './store/reducer';

const store = createStore(
    reducer,
    composeWithDevTools()
);

ReactDOM.render(
    <Provider store={store}>
      <App
        cities={Object.entries(City).map(([, city]) => city)}
        offers={offers}
        reviews={reviews}
        authorizedUser={authorizedUser}
      />,
    </Provider>,
    document.querySelector(`#root`)
);
