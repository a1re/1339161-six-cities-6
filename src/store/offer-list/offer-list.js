import {createReducer} from '@reduxjs/toolkit';
import {setOfferList, hoverOffer, updateOffer} from '../action';

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

  builder.addCase(updateOffer, (state, action) => {
    const offerIndex = state.offerList.findIndex((offer) => offer.id === action.payload.id);

    state.offerList = [
      ...state.offerList.slice(0, offerIndex),
      action.payload,
      ...state.offerList.slice(offerIndex + 1)
    ];
  });

});

export {offerList};
