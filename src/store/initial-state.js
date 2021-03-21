import {DEFAULT_CITY, DEFAULT_SORTING_NAME, AuthorizationStatus} from '../const';

export const initialState = {
  offerList: [],
  isOfferListLoaded: false,
  cityList: [],
  activeCityName: DEFAULT_CITY,
  activeCityOfferList: {
    data: [],
    sortingName: DEFAULT_SORTING_NAME,
    sortedData: []
  },
  activeOffer: {
    data: null,
    reviewList: null,
    nearbyOfferList: null
  },
  hoverOfferId: null,
  authorizedUser: null,
  authorizationStatus: AuthorizationStatus.NO_AUTH
};
