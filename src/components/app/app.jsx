import React from 'react';
import MainScreen from '../main/main-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import SignInScreen from '../sign-in/sign-in-screen';
import FavoritesScreen from '../favorites/favorites-screen';
import RoomScreen from '../room/room-screen';
import PrivateRoute from '../private-route/private-route';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainScreen/>;
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <SignInScreen />
        </Route>
        <PrivateRoute exact path={AppRoute.FAVORITES}>
          <FavoritesScreen />;
        </PrivateRoute>
        <Route exact path={AppRoute.ROOM}>
          <RoomScreen/>;
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
