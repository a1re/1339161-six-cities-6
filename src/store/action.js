import {createAction} from '@reduxjs/toolkit';
import {City} from '../const';

export const ActionType = {
  SET_CITY: `main/setCity`,
  SET_SORTING: `main/setSorting`,
  HOVER_OFFER: `main/hoverOffer`,
  SET_CITY_LIST_BY_OFFER_LIST: `data/setCityListByOfferList`,
  SET_OFFER_LIST: `data/setOfferList`,
  SET_OFFER: `data/setOffer`,
  SET_REVIEW_LIST: `data/setReviewList`,
  SET_FAVORITES_LIST: `data/setFavoritesList`,
  UPDATE_OFFER: `data/updateOffer`,
  SET_NEARBY_OFFER_LIST: `data/setNearbyOfferList`,
  SET_AUTHORIZATION_STATUS: `user/setAuthorizationStatus`,
  SET_AUTHORIZATION_INFO: `user/setAuthorizationInfo`
};

export const setCity = createAction(ActionType.SET_CITY, (cityName) => ({
  payload: cityName
}));

export const setSorting = createAction(ActionType.SET_SORTING, (sortingName) => ({
  payload: sortingName
}));

export const hoverOffer = createAction(ActionType.HOVER_OFFER, (offerId) => ({
  payload: offerId
}));

export const setOfferList = createAction(ActionType.SET_OFFER_LIST, (offerList) => ({
  payload: offerList
}));

export const setCityListByOfferList = createAction(ActionType.SET_CITY_LIST_BY_OFFER_LIST, (offerList) => {
  const cityList = Object.entries(City).map(([, cityName]) => {
    const offerWithCity = offerList.find((offer) => offer.city.name === cityName);
    const emptyCity = {name: cityName, location: {latitude: 0, longitude: 0, zoom: 0}};

    return offerWithCity ? offerWithCity.city : emptyCity;
  });

  return {
    payload: cityList
  };
});

export const setActiveOffer = createAction(ActionType.SET_OFFER, (offer) => ({
  payload: offer
}));

export const setNearbyOfferList = createAction(ActionType.SET_NEARBY_OFFER_LIST, (nearbyOfferList) => ({
  payload: nearbyOfferList
}));

export const setReviewList = createAction(ActionType.SET_REVIEW_LIST, (reviewList) => ({
  payload: reviewList
}));

export const setFavoritesList = createAction(ActionType.SET_FAVORITES_LIST, (offerList) => ({
  payload: offerList
}));

export const updateOffer = createAction(ActionType.UPDATE_OFFER, (offer) => ({
  payload: offer
}));

export const setAuthorizationStatus = createAction(ActionType.SET_AUTHORIZATION_STATUS, (authorizationStatus) => ({
  payload: authorizationStatus
}));

export const setAuthorizationInfo = createAction(ActionType.SET_AUTHORIZATION_INFO, (authorizationInfo) => ({
  payload: authorizationInfo
}));
