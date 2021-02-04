import React from 'react';
import Main from '../main/main';
import PropTypes from 'prop-types';

const App = ({citiesList, offerList}) => {
  return <Main citiesList={citiesList} offerList={offerList} />;
};

App.propTypes = {
  citiesList: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
        isActive: PropTypes.bool
      })
  ).isRequired,
  offerList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
        isPremium: PropTypes.bool,
        isFavorite: PropTypes.bool
      })
  ).isRequired
};


export default App;
