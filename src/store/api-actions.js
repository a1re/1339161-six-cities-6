import {setOfferList, setActiveOffer, setReviewList, setNearbyOfferList, setAuthorizationInfo,
  setCityListByOfferList, setFavoritesList, updateOffer, setFavoritesStatus} from "./action";
import {APIRoute} from "../const";
import {adaptOffer, adaptReview, adaptAuthInfo} from './adapters';

export const fetchOfferList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFER_LIST)
    .then(({data}) => {
      const adaptedOfferList = data.map(adaptOffer);
      dispatch(setCityListByOfferList(adaptedOfferList));
      dispatch(setOfferList(adaptedOfferList));
    })
);

export const fetchFavoritesList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITES_LIST)
    .then(({data}) => {
      const adaptedOfferList = data.map(adaptOffer);
      dispatch(setFavoritesList(adaptedOfferList));
    })
    .catch(() => {})
);

export const updateFavoritesStatus = (id, isFavorite) => (dispatch, _getState, api) => (
  api.post(APIRoute.UPDATE_FAVORITES_STATUS.replace(`:id`, id).replace(`:status`, isFavorite ? 1 : 0))
    .then(({data}) => {
      dispatch(updateOffer(adaptOffer(data)));
      dispatch(setFavoritesStatus(isFavorite));
    })
);

export const fetchOffer = (id) => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFER.replace(`:id`, id))
    .then(({data}) => dispatch(setActiveOffer(adaptOffer(data))))
);

export const fetchReviewList = (id) => (dispatch, _getState, api) => (
  api.get(APIRoute.REVIEW_LIST.replace(`:id`, id))
    .then(({data}) => dispatch(setReviewList(data.map(adaptReview))))
    .catch(() => {})
);

export const fetchNearbyOfferList = (id) => (dispatch, _getState, api) => (
  api.get(APIRoute.NEARBY_OFFER_LIST.replace(`:id`, id))
    .then(({data}) => dispatch(setNearbyOfferList(data.map(adaptOffer))))
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
    .then(({data}) => dispatch(setReviewList(data.map(adaptReview))))
);
