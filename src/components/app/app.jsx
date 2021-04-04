import React, {useEffect} from 'react';
import MainScreen from '../main/main-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import SignInScreen from '../sign-in/sign-in-screen';
import FavoritesScreen from '../favorites/favorites-screen';
import RoomScreen from '../room/room-screen';
import PrivateRoute from '../private-route/private-route';
import Spinner from '../spinner/spinner';
import {Switch, Route} from 'react-router-dom';
import {AppRoute} from '../../const';
import {useSelector, useDispatch} from 'react-redux';
import {checkAuth} from '../../store/api-actions';

const App = () => {
  const dispatch = useDispatch();
  const isAuthorizationChecked = useSelector((state) => state.USER.isAuthorizationChecked);

  useEffect(() => {
    if (!isAuthorizationChecked) {
      dispatch(checkAuth());
    }
  }, []);

  if (!isAuthorizationChecked) {
    return <Spinner/>;
  }

  return (
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
  );
};

export default App;
