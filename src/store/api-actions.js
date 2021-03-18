import {ActionCreator} from "./action";
import {APIRoute, AuthorizationStatus} from "../const";
import {adaptOffer} from './adaptors';

export const fetchOfferList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFER_LIST)
    .then(({data}) => dispatch(ActionCreator.loadOfferList(data.map(adaptOffer))))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(ActionCreator.setAuthorizationStatus(AuthorizationStatus.AUTH)))
    .catch(() => {})
);
