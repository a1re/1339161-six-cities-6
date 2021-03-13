import {DEFAULT_CITY} from '../const';
import offers from '../mocks/offers';
import authorizedUser from '../mocks/auth-info';
import {SORTING_METHODS, DEFAULT_SORTING_NAME} from '../const';

const defaultOffers = offers.filter(
    (offer) => offer.city.name === DEFAULT_CITY
);
const defaultSorting = SORTING_METHODS.find(
    (sorting) => sorting.name === DEFAULT_SORTING_NAME
);

export const initialState = {
  activeCityName: DEFAULT_CITY,
  activeOfferId: null,
  offers,
  authorizedUser,
  activeCityOffers: {
    data: defaultOffers,
    sortingName: DEFAULT_SORTING_NAME,
    sortedData: defaultSorting.callback === `undefined`
      ? defaultOffers
      : defaultOffers.sort(defaultSorting.callback)
  }
};
