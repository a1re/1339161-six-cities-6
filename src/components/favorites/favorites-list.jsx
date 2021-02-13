import React from 'react';
import PropTypes from 'prop-types';
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
  favorites: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        bedrooms: PropTypes.number.isRequired,
        city: PropTypes.shape({
          location: PropTypes.shape({
            latitude: PropTypes.number.isRequired,
            longitude: PropTypes.number.isRequired,
            zoom: PropTypes.number.isRequired
          }).isRequired,
          name: PropTypes.string.isRequired
        }).isRequired,
        description: PropTypes.string.isRequired,
        goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        host: PropTypes.shape({
          avatarUrl: PropTypes.string.isRequired,
          id: PropTypes.number.isRequired,
          isPro: PropTypes.bool.isRequired,
          name: PropTypes.string.isRequired,
        }),
        images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        isFavorite: PropTypes.bool.isRequired,
        isPremium: PropTypes.bool.isRequired,
        location: PropTypes.shape({
          latitude: PropTypes.number.isRequired,
          longitude: PropTypes.number.isRequired,
          zoom: PropTypes.number.isRequired
        }).isRequired,
        maxAdults: PropTypes.number.isRequired,
        previewImage: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired
      })
  ).isRequired
};

export default FavoritesList;
