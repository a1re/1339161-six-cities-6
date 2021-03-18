import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {City, AuthorizationStatus} from './const';
import {reducer} from './store/reducer';
import {ActionCreator} from './store/action';
import {createAPI} from './services/api';

import reviews from './mocks/reviews';

const api = createAPI(
  () => store.dispatch(ActionCreator.setAuthorizationStatus(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

ReactDOM.render(
    <Provider store={store}>
      <App
        cities={Object.entries(City).map(([, city]) => city)}
        reviews={reviews}
      />,
    </Provider>,
    document.querySelector(`#root`)
);
