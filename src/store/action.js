export const ActionType = {
  SELECT_CITY: `main/selectCity`,
  HOVER_OFFER: `main/hoverOffer`
};

export const ActionCreator = {
  selectCity: (cityName) => ({
    type: ActionType.SELECT_CITY,
    payload: cityName
  }),
  hoverOffer: (offerId) => ({
    type: ActionType.HOVER_OFFER,
    payload: offerId
  })
};
