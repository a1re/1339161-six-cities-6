import {createReducer} from '@reduxjs/toolkit';
import {setOfferList, hoverOffer, updateCityOfferList} from '../action';

const initialState = {
  offerList: [],
  isOfferListLoaded: false,
  activeCityOfferList: [],
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

  builder.addCase(updateCityOfferList, (state, action) => {
    const cityOfferList = state.offerList.filter(
        (offer) => offer.city.name === action.payload.activeCityName
    );

    state.activeCityOfferList = action.payload.sortingMethod === `undefined`
      ? cityOfferList
      : cityOfferList.sort(action.payload.sortingMethod);
  });

});

export {offerList};
