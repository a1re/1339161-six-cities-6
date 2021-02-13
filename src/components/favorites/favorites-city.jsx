import React from 'react';
import PropTypes from 'prop-types';
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
          .filter((offer) => offer.city === city)
          .map((offer) => <FavoritesCard key={`favoritesCard${offer.id}`} offer={offer} />)
      }
    </div>
  </li>
);

FavoritesCity.propTypes = {
  city: PropTypes.string.isRequired,
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

export default FavoritesCity;
