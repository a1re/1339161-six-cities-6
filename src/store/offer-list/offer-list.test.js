import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api';
import {offerList} from './offer-list';
import {ActionType} from '../action';
import {testOfferList, adaptedOfferList, adaptedCityList} from '../../test-data';
import {fetchOfferList} from '../api-actions';
import {APIRoute} from '../../const';

const api = createAPI(() => {});

const defaultState = {
  offerList: [],
  isOfferListLoaded: false,
  hoverOfferId: null
};

describe(`Direct operations in reducer 'offerList' work correctly`, () => {
  it(`Setting the offer list returns correct state`, () => {
    const setOfferListAction = {
      type: ActionType.SET_OFFER_LIST,
      payload: adaptedOfferList
    };

    expect(offerList(defaultState, setOfferListAction)).toEqual({
      ...defaultState,
      offerList: adaptedOfferList,
      isOfferListLoaded: true
    });
  });

  it(`Setting the hover offer id returns correct state`, () => {
    const hoverOfferAction = {
      type: ActionType.HOVER_OFFER,
      payload: 1
    };

    expect(offerList(defaultState, hoverOfferAction)).toEqual({
      ...defaultState,
      hoverOfferId: 1
    });
  });

  it(`Updating the offer returns correct state`, () => {
    const updateOfferAction = {
      type: ActionType.UPDATE_OFFER,
      payload: {...adaptedOfferList[0], isFavorite: true}
    };

    expect(offerList({...defaultState, offerList: adaptedOfferList}, updateOfferAction)).toEqual({
      ...defaultState,
      offerList: [
        {...adaptedOfferList[0], isFavorite: true},
        ...adaptedOfferList.slice(1)
      ]
    });
  });
});

describe(`Async operations for reducer 'offerList' work correctly`, () => {
  const apiMock = new MockAdapter(api);

  it(`Fetching offer list makes a right call to /hotels`, () => {
    const offerListLoader = fetchOfferList();
    const dispatch = jest.fn();

    apiMock
      .onGet(APIRoute.OFFER_LIST)
      .reply(200, testOfferList);

    return offerListLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toBeCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_CITY_LIST_BY_OFFER_LIST,
          payload: adaptedCityList
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_OFFER_LIST,
          payload: adaptedOfferList
        });
      });
  });
});

