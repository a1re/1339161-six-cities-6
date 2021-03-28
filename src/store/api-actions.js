import {loadOfferList, loadOffer, loadReviewList, loadNearbyOfferList, setAuthorizationInfo, updateReviewList} from "./action";
import {APIRoute} from "../const";
import {adaptOffer, adaptReview, adaptAuthInfo} from './adapters';

export const fetchOfferList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFER_LIST)
    .then(({data}) => dispatch(loadOfferList(data.map(adaptOffer))))
);

export const fetchOffer = (id) => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFER.replace(`:id`, id))
    .then(({data}) => dispatch(loadOffer(adaptOffer(data))))
);

export const fetchReviewList = (id) => (dispatch, _getState, api) => (
  api.get(APIRoute.REVIEW_LIST.replace(`:id`, id))
    .then(({data}) => dispatch(loadReviewList(data.map(adaptReview))))
    .catch(() => {})
);

export const fetchNearbyOfferList = (id) => (dispatch, _getState, api) => (
  api.get(APIRoute.NEARBY_OFFER_LIST.replace(`:id`, id))
    .then(({data}) => dispatch(loadNearbyOfferList(data.map(adaptOffer))))
    .catch(() => {})
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(setAuthorizationInfo(adaptAuthInfo(data))))
    .catch(() => {})
);

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => dispatch(setAuthorizationInfo(adaptAuthInfo(data))))
    .catch(() => {})
);

export const postReview = ({id, comment, rating}) => (dispatch, _getState, api) => (
  api.post(APIRoute.REVIEW_LIST.replace(`:id`, id), {comment, rating})
    .then(({data}) => dispatch(updateReviewList(data.map(adaptReview))))
);
