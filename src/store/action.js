export const ActionType = {
  SELECT_CITY: `main/selectCity`,
  HOVER_OFFER: `main/hoverOffer`,
  SELECT_SORTING: `main/selectSorting`,
  LOAD_OFFER_LIST: `data/loadOfferList`,
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
  setAuthorizationStatus: (authorizationStatus) => ({
    type: ActionType.SET_AUTHORIZATION_STATUS,
    payload: authorizationStatus
  }),
  setAuthorizationInfo: (setAuthorizationInfo) => ({
    type: ActionType.SET_AUTHORIZATION_INFO,
    payload: setAuthorizationInfo
  })
};
