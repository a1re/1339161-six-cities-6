import {DEFAULT_CITY} from '../const';
import {DEFAULT_SORTING_NAME} from '../const';

export const initialState = {
  activeCityName: DEFAULT_CITY,
  activeOfferId: null,
  offers: [],
  authorizedUser: null,
  activeCityOffers: {
    data: [],
    sortingName: DEFAULT_SORTING_NAME,
    sortedData: []
  },
  isOfferListLoaded: false
};
