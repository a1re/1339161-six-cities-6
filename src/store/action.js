export const ActionType = {
  SELECT_CITY: `main/selectCity`,
  SELECT_OFFER: `main/selectOffer`
};

export const ActionCreator = {
  selectCity: (cityName) => ({
    type: ActionType.SELECT_CITY,
    payload: cityName
  }),
  selectOffer: (offerId) => ({
    type: ActionType.SELECT_OFFER,
    payload: offerId
  })
};
