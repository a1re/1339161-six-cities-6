import React from 'react';
import Main from '../main/main';
import PropTypes from 'prop-types';

const App = ({cityList, offerList, defaultCity, authorizedUser}) => {
  return <Main cityList={cityList} offerList={offerList} defaultCity={defaultCity} authorizedUser={authorizedUser} />;
};

App.propTypes = {
  cityList: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired
      })
  ).isRequired,
  offerList: PropTypes.arrayOf(
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
