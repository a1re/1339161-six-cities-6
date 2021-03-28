import {createReducer} from '@reduxjs/toolkit';
import {setAuthorizationStatus, setAuthorizationInfo} from '../action';
import {AuthorizationStatus} from '../../const';

const initialState = {
  authorizedUser: null,
  authorizationStatus: AuthorizationStatus.NO_AUTH
};

const user = createReducer(initialState, (builder) => {

  builder.addCase(setAuthorizationStatus, (state, action) => {
    state.authorizationStatus = action.payload;
  });

  builder.addCase(setAuthorizationInfo, (state, action) => {
    state.authorizationStatus = AuthorizationStatus.AUTH;
    state.authorizedUser = action.payload;
  });

});

export {user};
