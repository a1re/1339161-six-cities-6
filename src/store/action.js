export const ActionType = {
  SELECT_CITY: `main/selectCity`,
  HOVER_OFFER: `main/hoverOffer`,
  SELECT_SORTING: `main/selectSorting`,
  LOAD_OFFER_LIST: `data/loadOfferList`
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
  })
};
