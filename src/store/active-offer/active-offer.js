import {createReducer} from '@reduxjs/toolkit';
import {setActiveOffer, setNearbyOfferList, setReviewList} from '../action';

const initialState = {
  activeOffer: {
    data: null,
    reviewList: null,
    nearbyOfferList: null
  }
};

const activeOffer = createReducer(initialState, (builder) => {

  builder.addCase(setActiveOffer, (state, action) => {
    state.activeOffer.data = action.payload;
  });

  builder.addCase(setNearbyOfferList, (state, action) => {
    state.activeOffer.nearbyOfferList = action.payload;
  });

  builder.addCase(setReviewList, (state, action) => {
    state.activeOffer.reviewList = action.payload;
  });
});

export {activeOffer};
