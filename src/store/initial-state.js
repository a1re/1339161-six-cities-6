import {DEFAULT_CITY, DEFAULT_SORTING_NAME, AuthorizationStatus} from '../const';

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
  isOfferListLoaded: false,
  authorizationStatus: AuthorizationStatus.NO_AUTH
};
