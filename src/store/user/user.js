import {createReducer} from '@reduxjs/toolkit';
import {setAuthorizationStatus, setAuthorizationInfo, setFavoritesList} from '../action';
import {AuthorizationStatus} from '../../const';

const initialState = {
  authorizedUser: null,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  favoritesList: [],
  isFavoritesListLoaded: false
};

const user = createReducer(initialState, (builder) => {

  builder.addCase(setAuthorizationStatus, (state, action) => {
    state.authorizationStatus = action.payload;
  });

  builder.addCase(setAuthorizationInfo, (state, action) => {
    state.authorizationStatus = AuthorizationStatus.AUTH;
    state.authorizedUser = action.payload;
  });

  builder.addCase(setFavoritesList, (state, action) => {
    state.favoritesList = action.payload;
    state.isFavoritesListLoaded = true;
  });

});

export {user};
