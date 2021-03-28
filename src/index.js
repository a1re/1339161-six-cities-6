import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {City, AuthorizationStatus} from './const';
import {reducer} from './store/reducer';
import {ActionCreator} from './store/action';
import {checkAuth} from './store/api-actions';
import {createAPI} from './services/api';

const api = createAPI(
    () => store.dispatch(ActionCreator.setAuthorizationStatus(AuthorizationStatus.NO_AUTH))
);

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      }
    })
});

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App
        cities={Object.entries(City).map(([, city]) => city)}
      />,
    </Provider>,
    document.querySelector(`#root`)
);
