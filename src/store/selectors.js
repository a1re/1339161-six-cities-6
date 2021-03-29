import {createSelector} from 'reselect';
import {SortingMethod} from '../const';

const getActiveCityFilter = (state, cityName) => {
  return state.OFFER_LIST.offerList.filter((offer) => offer.city.name === cityName);
};

export const getActiveCityOfferList = createSelector(
    getActiveCityFilter,
    (offer) => offer
);

export const getSortingSelector = (sortingName) => {
  switch (sortingName) {
    case SortingMethod.PRICE_ASC:
      return createSelector(
          getActiveCityFilter,
          (offerList) => offerList.sort((offerA, offerB) => offerA.price - offerB.price)
      );
    case SortingMethod.PRICE_DESC:
      return createSelector(
          getActiveCityFilter,
          (offerList) => offerList.sort((offerA, offerB) => offerB.price - offerA.price)
      );
    case SortingMethod.RATING:
      return createSelector(
          getActiveCityFilter,
          (offerList) => offerList.sort((offerA, offerB) => offerB.rating - offerA.rating)
      );
    default:
      return createSelector(getActiveCityFilter, (offerList) => offerList);
  }
};
