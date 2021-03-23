import {ActionType} from './action';
import {initialState} from './initial-state';
import {SORTING_METHODS, DEFAULT_SORTING_NAME, AuthorizationStatus, City} from '../const';

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
            : state.activeCityOfferList.data.slice().sort(action.payload.callback)
        }
      };

    case ActionType.LOAD_OFFER_LIST:
      const cityList = Object.entries(City).map(([, cityName]) => {
        const offerWithCity = action.payload.find((offer) => offer.city.name === cityName);
        const emptyCity = {name: cityName, location: {latitude: 0, longitude: 0, zoom: 0}};

        return offerWithCity ? offerWithCity.city : emptyCity;
      });

      cityOfferList = action.payload.filter(
          (offer) => offer.city.name === state.activeCityName
      );

      return {
        ...state,
        offerList: action.payload,
        cityList,
        isOfferListLoaded: true,
        activeCityOfferList: {
          data: cityOfferList,
          sortingName: defaultSorting.name,
          sortedData: defaultSorting.callback === `undefined`
            ? cityOfferList
            : cityOfferList.sort(defaultSorting.callback)
        }
      };

    case ActionType.LOAD_OFFER:
      return {
        ...state,
        activeOffer: {
          data: action.payload,
          reviewList: state.activeOffer.reviewList,
          nearbyOfferList: state.activeOffer.nearbyOfferList
        }
      };

    case ActionType.LOAD_REVIEW_LIST:
      return {
        ...state,
        activeOffer: {
          data: state.activeOffer.data,
          reviewList: action.payload,
          nearbyOfferList: state.activeOffer.nearbyOfferList
        }
      };

    case ActionType.LOAD_NEARBY_OFFER_LIST:
      return {
        ...state,
        activeOffer: {
          data: state.activeOffer.data,
          reviewList: state.activeOffer.reviewList,
          nearbyOfferList: action.payload
        }
      };

    case ActionType.UPDATE_REVIEW_LIST:
      return {
        ...state,
        activeOffer: {
          data: state.activeOffer.data,
          reviewList: action.payload,
          nearbyOfferList: state.activeOffer.nearbyOfferList
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
