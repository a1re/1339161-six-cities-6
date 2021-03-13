import {ActionCreator} from "./action";
import {APIRoute} from "../const";
import {adaptOffer} from './adaptors';

export const fetchOfferList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFER_LIST)
    .then(({data}) => dispatch(ActionCreator.loadOfferList(data.map(adaptOffer))))
);
