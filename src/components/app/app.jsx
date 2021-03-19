import React from 'react';
import MainScreen from '../main/main-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import SignInScreen from '../sign-in/sign-in-screen';
import FavoritesScreen from '../favorites/favorites-screen';
import RoomScreen from '../room/room-screen';
import PrivateRoute from '../private-route/private-route';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../custom-prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';

import withSpinner from '../../hocs/with-spinner/with-spinner';

const MainScreenWrapped = withSpinner(MainScreen);

const App = ({reviews}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainScreenWrapped/>;
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <SignInScreen />
        </Route>
        <PrivateRoute exact path={AppRoute.FAVORITES}>
          <FavoritesScreen />;
        </PrivateRoute>
        <Route exact path={AppRoute.ROOM}>
          <RoomScreen reviews={reviews} />;
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  reviews: PropTypes.arrayOf(CustomPropTypes.review.isRequired).isRequired
};

export default App;
