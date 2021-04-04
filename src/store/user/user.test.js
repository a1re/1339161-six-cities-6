import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api';
import {user} from './user';
import {ActionType} from '../action';
import {checkAuth, login, fetchFavoritesList} from '../api-actions';
import {APIRoute, AuthorizationStatus} from '../../const';
import {testUserInfo, adaptedOfferList, adaptedUserInfo, testOfferList} from '../../test-data';

const api = createAPI(() => {});

const defaultState = {
  authorizedUser: null,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  favoritesList: [],
  isFavoritesListLoaded: false,
  isAuthorizationChecked: false
};

describe(`Direct operations in reducer 'user' work correctly`, () => {
  it(`Setting the authorization status to 'AUTH' status returns correct state`, () => {
    const setAuthorizationStatusAction = {
      type: ActionType.SET_AUTHORIZATION_STATUS,
      payload: AuthorizationStatus.AUTH
    };

    expect(user(defaultState, setAuthorizationStatusAction)).toEqual({
      ...defaultState,
      authorizationStatus: AuthorizationStatus.AUTH,
      isAuthorizationChecked: true
    });
  });

  it(`Setting the authorization status to 'NO_AUTH' status returns correct state`, () => {
    const setAuthorizationStatusAction = {
      type: ActionType.SET_AUTHORIZATION_STATUS,
      payload: AuthorizationStatus.NO_AUTH
    };

    expect(user(defaultState, setAuthorizationStatusAction)).toEqual({
      ...defaultState,
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      isAuthorizationChecked: true
    });
  });

  it(`Setting the authorization info returns correct state`, () => {
    const setAuthorizationInfoAction = {
      type: ActionType.SET_AUTHORIZATION_INFO,
      payload: testUserInfo
    };

    expect(user(defaultState, setAuthorizationInfoAction)).toEqual({
      ...defaultState,
      authorizedUser: testUserInfo,
      authorizationStatus: AuthorizationStatus.AUTH,
      isAuthorizationChecked: true
    });
  });

  it(`Setting the favorites list returns correct state`, () => {
    const setFavoritesListAction = {
      type: ActionType.SET_FAVORITES_LIST,
      payload: adaptedOfferList
    };

    expect(user(defaultState, setFavoritesListAction)).toEqual({
      ...defaultState,
      favoritesList: adaptedOfferList,
      isFavoritesListLoaded: true
    });
  });

  it(`Setting the favorites load status status returns correct state`, () => {
    const setFavoritesStatusAction = {
      type: ActionType.SET_FAVORITES_STATUS,
      payload: true
    };

    expect(user(defaultState, setFavoritesStatusAction)).toEqual({
      ...defaultState,
      isFavoritesListLoaded: true
    });
  });
});

describe(`Async operations for reducer 'user' work correctly`, () => {
  const apiMock = new MockAdapter(api);

  it(`Checking authorized user makes a right call to /login`, () => {
    const authorizationInfoLoader = checkAuth();
    const dispatch = jest.fn();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, testUserInfo);

    return authorizationInfoLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toBeCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_AUTHORIZATION_INFO,
          payload: adaptedUserInfo
        });
      });
  });

  it(`Checking unauthorized user makes a right call to /login`, () => {
    const authorizationInfoLoader = checkAuth();
    const dispatch = jest.fn();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(401);

    return authorizationInfoLoader(dispatch, () => {}, api)
      .catch(() => {
        expect(dispatch).toBeCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_AUTHORIZATION_STATUS,
          payload: AuthorizationStatus.NO_AUTH
        });
      });
  });

  it(`Signing in makes a right call to /login`, () => {
    const authorizationInfoLoader = login({email: testUserInfo.email, password: `any`});
    const dispatch = jest.fn();

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, testUserInfo);

    return authorizationInfoLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toBeCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_AUTHORIZATION_INFO,
          payload: adaptedUserInfo
        });
      });
  });

  it(`Fetching favorites list for an authorized user makes a right call to /favorite`, () => {
    const favoritesListLoader = fetchFavoritesList();
    const dispatch = jest.fn();

    apiMock
      .onGet(APIRoute.FAVORITES_LIST)
      .reply(200, testOfferList);

    return favoritesListLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toBeCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_FAVORITES_LIST,
          payload: adaptedOfferList
        });
      });
  });

  it(`Fetching favorites list for an unauthorized user makes a right call to /favorite`, () => {
    const favoritesListLoader = fetchFavoritesList();
    const dispatch = jest.fn();

    apiMock
      .onGet(APIRoute.FAVORITES_LIST)
      .reply(401);

    return favoritesListLoader(dispatch, () => {}, api)
      .catch(() => {
        expect(dispatch).toBeCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_AUTHORIZATION_STATUS,
          payload: AuthorizationStatus.NO_AUTH
        });
      });
  });
});
