import React from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../custom-prop-types';
import FavoritesCity from './favorites-city';

const FavoritesList = ({cities, favorites}) => (
  <section className="favorites">
    <h1 className="favorites__title">Saved listing</h1>
    <ul className="favorites__list">
      {cities.map((city) => (
        <FavoritesCity
          key={`favorites-сity-${city.toLowerCase()}`}
          city={city}
          favorites={favorites.filter((offer) => offer.city.name === city)}
        />))}
    </ul>
  </section>
);

FavoritesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  favorites: PropTypes.arrayOf(CustomPropTypes.offer).isRequired
};

export default FavoritesList;
