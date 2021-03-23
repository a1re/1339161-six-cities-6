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

export const ActionCreator = {
  selectCity: (cityName) => ({
    type: ActionType.SELECT_CITY,
    payload: cityName
  }),
  hoverOffer: (offerId) => ({
    type: ActionType.HOVER_OFFER,
    payload: offerId
  }),
  selectSorting: (sortingMethod) => ({
    type: ActionType.SELECT_SORTING,
    payload: sortingMethod
  }),
  loadOfferList: (offerList) => ({
    type: ActionType.LOAD_OFFER_LIST,
    payload: offerList
  }),
  loadOffer: (offer) => ({
    type: ActionType.LOAD_OFFER,
    payload: offer
  }),
  loadReviewList: (reviewList) => ({
    type: ActionType.LOAD_REVIEW_LIST,
    payload: reviewList
  }),
  loadNearbyOfferList: (nearbyOfferList) => ({
    type: ActionType.LOAD_NEARBY_OFFER_LIST,
    payload: nearbyOfferList
  }),
  setAuthorizationStatus: (authorizationStatus) => ({
    type: ActionType.SET_AUTHORIZATION_STATUS,
    payload: authorizationStatus
  }),
  setAuthorizationInfo: (authorizationInfo) => ({
    type: ActionType.SET_AUTHORIZATION_INFO,
    payload: authorizationInfo
  }),
  updateReviewList: (reviewInfo) => ({
    type: ActionType.UPDATE_REVIEW_LIST,
    payload: reviewInfo
  })
};
