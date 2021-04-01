import {createReducer} from '@reduxjs/toolkit';
import {setAuthorizationStatus, setAuthorizationInfo, setFavoritesList, setFavoritesStatus} from '../action';
import {AuthorizationStatus} from '../../const';

const initialState = {
  authorizedUser: null,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  favoritesList: [],
  isFavoritesListLoaded: false,
  isAuthorizationChecked: false
};

const user = createReducer(initialState, (builder) => {

  builder.addCase(setAuthorizationStatus, (state, action) => {
    state.authorizationStatus = action.payload;
    state.isAuthorizationChecked = true;
  });

  builder.addCase(setAuthorizationInfo, (state, action) => {
    state.authorizationStatus = AuthorizationStatus.AUTH;
    state.authorizedUser = action.payload;
    state.isAuthorizationChecked = true;
  });

  builder.addCase(setFavoritesList, (state, action) => {
    state.favoritesList = action.payload;
    state.isFavoritesListLoaded = true;
  });

  builder.addCase(setFavoritesStatus, (state, action) => {
    state.isFavoritesListLoaded = action.payload;
  });

});

export {user};
