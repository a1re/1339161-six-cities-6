import React from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../custom-prop-types';
import FavoritesCard from './favorites-card';

const FavoritesCity = ({city, favorites}) => (
  <li className="favorites__locations-items">
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <a className="locations__item-link" href={`/#${city.toLowerCase()}`}>
          <span>{city}</span>
        </a>
      </div>
    </div>
    <div className="favorites__places">
      {
        favorites
          .map((offer) => <FavoritesCard key={`favoritesCard${offer.id}`} offer={offer} />)
      }
    </div>
  </li>
);

FavoritesCity.propTypes = {
  city: PropTypes.string.isRequired,
  favorites: PropTypes.arrayOf(CustomPropTypes.offer).isRequired
};

export default FavoritesCity;
