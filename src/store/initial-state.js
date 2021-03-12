import {DEFAULT_CITY} from '../const';
import offers from '../mocks/offers';
import authorizedUser from '../mocks/auth-info';

export const initialState = {
  activeCityName: DEFAULT_CITY,
  activeOfferId: null,
  offers,
  authorizedUser
};
