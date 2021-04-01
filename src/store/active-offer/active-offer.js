import {createReducer} from '@reduxjs/toolkit';
import {setActiveOffer, setNearbyOfferList, setReviewList, updateOffer} from '../action';

const initialState = {
  offer: null,
  reviewList: null,
  nearbyOfferList: null
};

const activeOffer = createReducer(initialState, (builder) => {

  builder.addCase(setActiveOffer, (state, action) => {
    state.offer = action.payload;
  });

  builder.addCase(setNearbyOfferList, (state, action) => {
    state.nearbyOfferList = action.payload;
  });

  builder.addCase(setReviewList, (state, action) => {
    state.reviewList = action.payload;
  });

  builder.addCase(updateOffer, (state, action) => {
    if (state.offer && action.payload.id === state.offer.id) {
      state.offer = action.payload;
    }
  });
});

export {activeOffer};
