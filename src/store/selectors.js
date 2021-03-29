import {createSelector} from 'reselect';
import {SortingMethod} from '../const';

const getFilteredOfferList = (offerList, cityName) => {
  return offerList.filter((offer) => offer.city.name === cityName);
};

const getSortedOfferList = (offerList, sortingName) => {
  switch (sortingName) {
    case SortingMethod.PRICE_ASC:
      return offerList.slice(0).sort((offerA, offerB) => offerA.price - offerB.price);
    case SortingMethod.PRICE_DESC:
      return offerList.slice(0).sort((offerA, offerB) => offerB.price - offerA.price);
    case SortingMethod.RATING:
      return offerList.slice(0).sort((offerA, offerB) => offerB.rating - offerA.rating);
    default:
      return offerList;
  }
};

export const getFilteredOfferListSelector = createSelector(
    (state) => state.OFFER_LIST.offerList,
    (state) => state.CITY.activeCityName,
    getFilteredOfferList
);

export const getSortedOfferListSelector = createSelector(
    (_, offerList) => offerList,
    (state) => state.CITY.activeSortingName,
    getSortedOfferList
);
