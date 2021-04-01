import React from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../custom-prop-types';
import FavoritesCard from './favorites-card';

const FavoritesCity = ({cityName, favoritesList}) => {
  if (!favoritesList.length) {
    return null;
  }

  return <li className="favorites__locations-items">
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <a className="locations__item-link">
          <span>{cityName}</span>
        </a>
      </div>
    </div>
    <div className="favorites__places">
      {
        favoritesList
          .map((offer) => <FavoritesCard key={`favoritesCard${offer.id}`} offer={offer} />)
      }
    </div>
  </li>;
};

FavoritesCity.propTypes = {
  cityName: PropTypes.string.isRequired,
  favoritesList: PropTypes.arrayOf(CustomPropTypes.offer).isRequired
};

export default FavoritesCity;
