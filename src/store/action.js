import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  SELECT_CITY: `main/selectCity`,
  HOVER_OFFER: `main/hoverOffer`,
  SELECT_SORTING: `main/selectSorting`,
  LOAD_OFFER_LIST: `data/loadOfferList`,
  LOAD_OFFER: `data/loadOffer`,
  LOAD_REVIEW_LIST: `data/loadReviewList`,
  LOAD_NEARBY_OFFER_LIST: `data/loadNearbyOfferList`,
  UPDATE_REVIEW_LIST: `data/updateReviewList`,
  SET_AUTHORIZATION_STATUS: `user/setAuthorizationStatus`,
  SET_AUTHORIZATION_INFO: `user/setAuthorizationInfo`
};

export const selectCity = createAction(ActionType.SELECT_CITY, (cityName) => ({
  payload: cityName
}));

export const hoverOffer = createAction(ActionType.HOVER_OFFER, (offerId) => ({
  payload: offerId
}));

export const selectSorting = createAction(ActionType.SELECT_SORTING, (sortingMethod) => ({
  payload: sortingMethod
}));

export const loadOfferList = createAction(ActionType.LOAD_OFFER_LIST, (offerList) => ({
  payload: offerList
}));

export const loadOffer = createAction(ActionType.LOAD_OFFER, (offer) => ({
  payload: offer
}));

export const loadReviewList = createAction(ActionType.LOAD_REVIEW_LIST, (reviewList) => ({
  payload: reviewList
}));

export const loadNearbyOfferList = createAction(ActionType.LOAD_NEARBY_OFFER_LIST, (nearbyOfferList) => ({
  payload: nearbyOfferList
}));

export const setAuthorizationStatus = createAction(ActionType.SET_AUTHORIZATION_STATUS, (authorizationStatus) => ({
  payload: authorizationStatus
}));

export const setAuthorizationInfo = createAction(ActionType.SET_AUTHORIZATION_INFO, (authorizationInfo) => ({
  payload: authorizationInfo
}));

export const updateReviewList = createAction(ActionType.UPDATE_REVIEW_LIST, (reviewInfo) => ({
  payload: reviewInfo
}));
