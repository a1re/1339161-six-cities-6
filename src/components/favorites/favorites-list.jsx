import React from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../custom-prop-types';
import FavoritesCity from './favorites-city';
import {City} from '../../const';

const FavoritesList = ({favoritesList}) => {
  const cityList = Object.values(City);

  return <section className="favorites">
    <h1 className="favorites__title">Saved listing</h1>
    <ul className="favorites__list">
      {cityList.map((city) => (
        <FavoritesCity
          key={`favorites-сity-${city}`}
          cityName={city}
          favoritesList={favoritesList.filter((offer) => offer.city.name === city)}
        />))}
    </ul>
  </section>;
};

FavoritesList.propTypes = {
  favoritesList: PropTypes.arrayOf(CustomPropTypes.offer).isRequired
};

export default FavoritesList;
