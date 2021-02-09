import React from 'react';
import PropTypes from 'prop-types';
import FavoritesCity from './favorites-city';

const FavoritesList = ({cities, favorites}) => (
  <section className="favorites">
    <h1 className="favorites__title">Saved listing</h1>
    <ul className="favorites__list">
      {cities.map((city, i) => (
        <FavoritesCity
          key={`favoritesCity${i}`}
          city={city}
          favorites={favorites}
        />))}
    </ul>
  </section>
);

FavoritesList.propTypes = {
  cities: PropTypes.arrayOf(
      PropTypes.string
  ).isRequired,
  favorites: PropTypes.arrayOf(
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
  ).isRequired
};

export default FavoritesList;
