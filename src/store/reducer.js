import {ActionType} from './action';
import {initialState} from './initial-state';
import {SORTING_METHODS, DEFAULT_SORTING_NAME} from '../const';

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SELECT_CITY:
      const cityOffers = state.offers.filter(
          (offer) => offer.city.name === action.payload
      );
      const defaultSorting = SORTING_METHODS.find(
          (sorting) => sorting.name === DEFAULT_SORTING_NAME
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
  }

  return state;
};
