import {ActionType} from './action';
import {initialState} from './initial-state';
import {SORTING_METHODS, DEFAULT_SORTING_NAME} from '../const';

export const reducer = (state = initialState, action) => {
  let cityOffers;
  const defaultSorting = SORTING_METHODS.find(
      (sorting) => sorting.name === DEFAULT_SORTING_NAME
  );

  switch (action.type) {
    case ActionType.SELECT_CITY:
      cityOffers = state.offers.filter(
          (offer) => offer.city.name === action.payload
      );

      return {
        ...state,
        activeCityName: action.payload,
        activeCityOffers: {
          data: cityOffers,
          sortingName: DEFAULT_SORTING_NAME,
          sortedData: defaultSorting.callback === `undefined`
            ? cityOffers
            : cityOffers.sort(defaultSorting.callback)
        }
      };

    case ActionType.HOVER_OFFER:
      return {
        ...state,
        activeOfferId: action.payload
      };

    case ActionType.SELECT_SORTING:
      return {
        ...state,
        activeCityOffers: {
          data: state.activeCityOffers.data,
          sortingName: action.payload.name,
          sortedData: action.payload.callback === `undefined`
            ? state.activeCityOffers.data
            : state.activeCityOffers.data.sort(action.payload.callback)
        }
      };

    case ActionType.LOAD_OFFER_LIST:
      cityOffers = action.payload.filter(
          (offer) => offer.city.name === state.activeCityName
      );

      return {
        ...state,
        offers: action.payload,
        isOfferListLoaded: true,
        activeCityOffers: {
          data: cityOffers,
          sortingName: defaultSorting.name,
          sortedData: defaultSorting.callback === `undefined`
            ? cityOffers
            : cityOffers.sort(defaultSorting.callback)
        }
      };

    case ActionType.SET_AUTHORIZATION_STATUS:
      return {
        ...state,
        authorizationStatus: action.payload
      };
  }

  return state;
};
