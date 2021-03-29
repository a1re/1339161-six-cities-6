import {createReducer} from '@reduxjs/toolkit';
import {setOfferList, hoverOffer} from '../action';

const initialState = {
  offerList: [],
  isOfferListLoaded: false,
  hoverOfferId: null
};

const offerList = createReducer(initialState, (builder) => {

  builder.addCase(setOfferList, (state, action) => {
    state.isOfferListLoaded = true;
    state.offerList = action.payload;
  });

  builder.addCase(hoverOffer, (state, action) => {
    state.hoverOfferId = action.payload;
  });

});

export {offerList};
