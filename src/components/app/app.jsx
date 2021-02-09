import React from 'react';
import MainScreen from '../main-screen/main-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites/favorites-screen';
import PropertyScreen from '../property-screen/property-screen';

import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

const App = ({cities, offers, defaultCity, authorizedUser}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen cities={cities} offers={offers} city={defaultCity} authorizedUser={authorizedUser} />;
        </Route>
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <Route exact path="/favorites">
          <FavoritesScreen offers={offers} authorizedUser={authorizedUser} />;
        </Route>
        <Route exact path="/offer/:id">
          <PropertyScreen authorizedUser={authorizedUser} />;
        </Route>
        <Route>
          <NotFoundScreen authorizedUser={authorizedUser} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  cities: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired
      })
  ).isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
        imgSmall: PropTypes.string.isRequired,
        isPremium: PropTypes.bool,
        isFavorite: PropTypes.bool
      })
  ).isRequired,
  defaultCity: PropTypes.string.isRequired,
  authorizedUser: PropTypes.string
};

export default App;
