import React from 'react';
import MainScreen from '../main/main-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import SignInScreen from '../sign-in/sign-in-screen';
import FavoritesScreen from '../favorites/favorites-screen';
import RoomScreen from '../room/room-screen';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../custom-prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

const App = ({cities, offers, reviews, authorizedUser}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen cities={cities} />;
        </Route>
        <Route exact path="/login">
          <SignInScreen />
        </Route>
        <Route exact path="/favorites">
          <FavoritesScreen offers={offers} authorizedUser={authorizedUser} />;
        </Route>
        <Route exact path="/offer/:id">
          <RoomScreen offers={offers} reviews={reviews} authorizedUser={authorizedUser} />;
        </Route>
        <Route>
          <NotFoundScreen authorizedUser={authorizedUser} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  cities: PropTypes.arrayOf(CustomPropTypes.city).isRequired,
  offers: PropTypes.arrayOf(CustomPropTypes.offer.isRequired).isRequired,
  reviews: PropTypes.arrayOf(CustomPropTypes.review.isRequired).isRequired,
  authorizedUser: CustomPropTypes.authorizedUser
};

export default App;
