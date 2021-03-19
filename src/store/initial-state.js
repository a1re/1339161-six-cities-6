import {DEFAULT_CITY, DEFAULT_SORTING_NAME, AuthorizationStatus} from '../const';

export const initialState = {
  activeCityName: DEFAULT_CITY,
  hoverOfferId: null,
  offerList: [],
  authorizedUser: null,
  activeCityOfferList: {
    data: [],
    sortingName: DEFAULT_SORTING_NAME,
    sortedData: []
  },
  isOfferListLoaded: false,
  authorizationStatus: AuthorizationStatus.NO_AUTH
};
