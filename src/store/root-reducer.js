import {combineReducers} from 'redux';
import {activeOffer} from './active-offer/active-offer';
import {city} from './city/city';
import {offerList} from './offer-list/offer-list';
import {user} from './user/user';

export const NameSpace = {
  ACTIVE_OFFER: `ACTIVE_OFFER`,
  CITY: `CITY`,
  OFFER_LIST: `OFFER_LIST`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.ACTIVE_OFFER]: activeOffer,
  [NameSpace.CITY]: city,
  [NameSpace.OFFER_LIST]: offerList,
  [NameSpace.USER]: user
});
