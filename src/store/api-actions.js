import {ActionCreator} from "./action";
import {APIRoute} from "../const";
import {adaptOffer} from './adapters';

export const fetchOfferList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFER_LIST)
    .then(({data}) => dispatch(ActionCreator.loadOfferList(data.map(adaptOffer))))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(ActionCreator.setAuthorizationInfo(data)))
    .catch(() => {})
);

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => dispatch(ActionCreator.setAuthorizationInfo(data)))
    .catch(() => {})
);

