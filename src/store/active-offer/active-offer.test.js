import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api';
import {activeOffer} from './active-offer';
import {ActionType} from '../action';
import {fetchOffer, fetchReviewList, fetchNearbyOfferList, postReview, updateFavoritesStatus} from '../api-actions';
import {APIRoute} from '../../const';
import {testOfferList, adaptedOfferList, testReviewList, adaptedReviewList, testReview, adaptedReview} from '../../test-data';

const api = createAPI(() => {});

const defaultState = {
  offer: null,
  reviewList: null,
  nearbyOfferList: null
};

describe(`Direct operations in reducer 'activeOffer' work correctly`, () => {
  it(`Setting the active offer returns correct state`, () => {
    const setActiveOfferAction = {
      type: ActionType.SET_OFFER,
      payload: testOfferList[0]
    };

    expect(activeOffer(defaultState, setActiveOfferAction)).toEqual({...defaultState, offer: testOfferList[0]});
  });

  it(`Setting the nearby offer list returns correct state`, () => {
    const setNearbyOfferListAction = {
      type: ActionType.SET_NEARBY_OFFER_LIST,
      payload: testOfferList
    };

    expect(activeOffer(defaultState, setNearbyOfferListAction)).toEqual({...defaultState, nearbyOfferList: testOfferList});
  });

  it(`Setting the review list returns correct state`, () => {
    const setReviewListAction = {
      type: ActionType.SET_REVIEW_LIST,
      payload: testReviewList
    };

    expect(activeOffer(defaultState, setReviewListAction)).toEqual({...defaultState, reviewList: testReviewList});
  });
});

describe(`Async operations for reducer 'activeOffer' work correctly`, () => {
  const apiMock = new MockAdapter(api);

  it(`Fetching the offer info makes a right call to /hotels/:id`, () => {
    const testOfferId = 10;
    const offerLoader = fetchOffer(testOfferId);
    const dispatch = jest.fn();

    apiMock
      .onGet(APIRoute.OFFER.replace(`:id`, testOfferId))
      .reply(200, testOfferList[0]);

    return offerLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toBeCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_OFFER,
          payload: adaptedOfferList[0]
        });
      });
  });

  it(`Fetching the review list makes a right call to /comments/:id`, () => {
    const testOfferId = 10;
    const reviewsLoader = fetchReviewList(testOfferId);
    const dispatch = jest.fn();

    apiMock
      .onGet(APIRoute.REVIEW_LIST.replace(`:id`, testOfferId))
      .reply(200, testReviewList);

    return reviewsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toBeCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_REVIEW_LIST,
          payload: adaptedReviewList
        });
      });
  });

  it(`Fetching the nearby offer list makes a right call to /hotels/:id/nearby`, () => {
    const testOfferId = 10;
    const offerLoader = fetchNearbyOfferList(testOfferId);
    const dispatch = jest.fn();

    apiMock
      .onGet(APIRoute.NEARBY_OFFER_LIST.replace(`:id`, testOfferId))
      .reply(200, testOfferList);

    return offerLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toBeCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_NEARBY_OFFER_LIST,
          payload: adaptedOfferList
        });
      });
  });

  it(`Posting a review makes a right call to /comments/:id`, () => {
    const testOfferId = 10;
    const reviewsLoader = postReview({
      id: testOfferId,
      comment: testReview.comment,
      rating: testReview.rating
    });
    const dispatch = jest.fn();

    apiMock
      .onPost(APIRoute.REVIEW_LIST.replace(`:id`, testOfferId))
      .reply(200, [...testReviewList, testReview]);

    return reviewsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toBeCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_REVIEW_LIST,
          payload: [...adaptedReviewList, adaptedReview]
        });
      });
  });

  it(`Adding offer to favorites makes a right call to /favorite/:hotel_id/:status`, () => {
    const testOfferId = 10;
    const testStatus = 1;
    const offerLoader = updateFavoritesStatus(testOfferId, testStatus);
    const dispatch = jest.fn();

    apiMock
      .onPost(APIRoute.UPDATE_FAVORITES_STATUS.replace(`:id`, testOfferId).replace(`:status`, testStatus))
      .reply(200, {...testOfferList[0], "is_favorite": true});

    return offerLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toBeCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_OFFER,
          payload: {...adaptedOfferList[0], isFavorite: true}
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_FAVORITES_STATUS,
          payload: false
        });
      });
  });

  it(`Removing offer from favorites makes a right call to /favorite/:hotel_id/:status`, () => {
    const testOfferId = 10;
    const testStatus = 0;
    const offerLoader = updateFavoritesStatus(testOfferId, testStatus);
    const dispatch = jest.fn();

    apiMock
      .onPost(APIRoute.UPDATE_FAVORITES_STATUS.replace(`:id`, testOfferId).replace(`:status`, testStatus))
      .reply(200, {...testOfferList[0], "is_favorite": false});

    return offerLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toBeCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_OFFER,
          payload: {...adaptedOfferList[0], isFavorite: false}
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_FAVORITES_STATUS,
          payload: false
        });
      });
  });
});
