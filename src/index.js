import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {AuthorizationStatus} from './const';
import rootReducer from './store/root-reducer';
import {setAuthorizationStatus} from './store/action';
import {createAPI} from './services/api';

const api = createAPI(
    () => store.dispatch(setAuthorizationStatus(AuthorizationStatus.NO_AUTH))
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      }
    })
});

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.querySelector(`#root`)
);
