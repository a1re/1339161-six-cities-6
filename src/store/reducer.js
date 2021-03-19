import {ActionType} from './action';
import {initialState} from './initial-state';
import {SORTING_METHODS, DEFAULT_SORTING_NAME, AuthorizationStatus} from '../const';

export const reducer = (state = initialState, action) => {
  let cityOfferList;
  const defaultSorting = SORTING_METHODS.find(
      (sorting) => sorting.name === DEFAULT_SORTING_NAME
  );

  switch (action.type) {
    case ActionType.SELECT_CITY:
      cityOfferList = state.offerList.filter(
          (offer) => offer.city.name === action.payload
      );

      return {
        ...state,
        activeCityName: action.payload,
        activeCityOfferList: {
          data: cityOfferList,
          sortingName: DEFAULT_SORTING_NAME,
          sortedData: defaultSorting.callback === `undefined`
            ? cityOfferList
            : cityOfferList.sort(defaultSorting.callback)
        }
      };

    case ActionType.HOVER_OFFER:
      return {
        ...state,
        hoverOfferId: action.payload
      };

    case ActionType.SELECT_SORTING:
      return {
        ...state,
        activeCityOfferList: {
          data: state.activeCityOfferList.data,
          sortingName: action.payload.name,
          sortedData: action.payload.callback === `undefined`
            ? state.activeCityOfferList.data
            : state.activeCityOfferList.data.sort(action.payload.callback)
        }
      };

    case ActionType.LOAD_OFFER_LIST:
      cityOfferList = action.payload.filter(
          (offer) => offer.city.name === state.activeCityName
      );

      return {
        ...state,
        offerList: action.payload,
        isOfferListLoaded: true,
        activeCityOfferList: {
          data: cityOfferList,
          sortingName: defaultSorting.name,
          sortedData: defaultSorting.callback === `undefined`
            ? cityOfferList
            : cityOfferList.sort(defaultSorting.callback)
        }
      };

    case ActionType.SET_AUTHORIZATION_STATUS:
      return {
        ...state,
        authorizationStatus: action.payload
      };

    case ActionType.SET_AUTHORIZATION_INFO:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.AUTH,
        authorizedUser: action.payload
      };
  }

  return state;
};
