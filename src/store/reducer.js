import {ActionType} from './action';
import {initialState} from './initial-state';

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SELECT_CITY:
      return {
        ...state,
        activeCityName: action.payload
      };

    case ActionType.SELECT_OFFER:
      return {
        ...state,
        activeOfferId: action.payload
      };
  }

  return state;
};
