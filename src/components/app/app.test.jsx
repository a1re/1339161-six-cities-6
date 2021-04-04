import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import {DEFAULT_CITY, DEFAULT_SORTING, AuthorizationStatus, AppRoute} from '../../const';
import {adaptedCityList, adaptedOfferList, adaptedReviewList, adaptedUserInfo} from '../../test-data';
import App from './app';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const history = createMemoryHistory();

const mockCityStore = {
  cityList: adaptedCityList,
  activeCityName: DEFAULT_CITY,
  activeSortingName: DEFAULT_SORTING
};

const mockOfferList = {
  offerList: adaptedOfferList,
  isOfferListLoaded: true,
  hoverOfferId: null
};

const mockActiveOffer = {
  offer: adaptedOfferList[0],
  reviewList: adaptedReviewList,
  nearbyOfferList: adaptedOfferList.slice(1, 3)
};

const mockEmptyActiveOffer = {
  offer: null,
  reviewList: null,
  nearbyOfferList: null
};

const mockAuthorizedUserStore = {
  authorizedUser: adaptedUserInfo,
  authorizationStatus: AuthorizationStatus.AUTH,
  favoritesList: adaptedOfferList,
  isFavoritesListLoaded: true,
  isAuthorizationChecked: true
};

const mockUnauthorizedUserStore = {
  authorizedUser: null,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  favoritesList: [],
  isFavoritesListLoaded: true,
  isAuthorizationChecked: true
};


describe(`Test routing`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);

  it(`Render 'MainScreen' when user navigate to '/' url`, () => {
    render(
        <redux.Provider store={mockStore({
          ACTIVE_OFFER: mockEmptyActiveOffer,
          CITY: mockCityStore,
          OFFER_LIST: mockOfferList,
          USER: mockUnauthorizedUserStore
        })}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/to stay in/i)).toBeInTheDocument();
  });

  it(`Render 'SignInScreen' when user navigate to '/login' url`, () => {
    history.push(AppRoute.LOGIN);

    render(
        <redux.Provider store={mockStore({
          ACTIVE_OFFER: mockActiveOffer,
          CITY: mockCityStore,
          OFFER_LIST: mockOfferList,
          USER: mockUnauthorizedUserStore
        })}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  it(`Render 'RoomScreen' when user navigate to '/offer/:id' url`, () => {
    history.push(AppRoute.ROOM.replace(`:id`, adaptedOfferList[0].id));

    render(
        <redux.Provider store={mockStore({
          ACTIVE_OFFER: mockActiveOffer,
          CITY: mockCityStore,
          OFFER_LIST: mockOfferList,
          USER: mockUnauthorizedUserStore
        })}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );
  });

  it(`Render 'FavoritesScreen' when user navigate to '/favorites' url`, () => {
    history.push(AppRoute.FAVORITES);

    render(
        <redux.Provider store={mockStore({
          ACTIVE_OFFER: mockEmptyActiveOffer,
          CITY: mockCityStore,
          OFFER_LIST: mockOfferList,
          USER: mockAuthorizedUserStore
        })}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
  });

  it(`Render 'NotFoundScreen' when user navigate to unexisting url`, () => {
    history.push(`/non-existing-url`);

    render(
        <redux.Provider store={mockStore({
          ACTIVE_OFFER: mockEmptyActiveOffer,
          CITY: mockCityStore,
          OFFER_LIST: mockOfferList,
          USER: mockUnauthorizedUserStore
        })}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Error 404/i)).toBeInTheDocument();
  });
});
