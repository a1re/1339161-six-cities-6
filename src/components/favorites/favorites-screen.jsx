import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import FooterLogo from '../footer-logo/footer-logo';
import FavoritesEmpty from './favorites-empty';
import FavoritesList from './favorites-list';

const FavoritesScreen = ({offers, authorizedUser}) => {
  const favorites = offers.filter((offer) => offer.isFavorite === true);
  const cities = [...new Set(favorites.map((offer) => offer.city.name))];

  return (
    <div className={`page${favorites.length ? `` : ` page--favorites-empty`}`}>
      <Header isMain={false} authorizedUser={authorizedUser}/>
      <main className={`page__main page__main--favorites${favorites.length ? `` : ` page__main--favorites-empty`}`}>
        <div className="page__favorites-container container">
          {
            favorites.length
              ? <FavoritesList cities={cities} favorites={favorites} />
              : <FavoritesEmpty />
          }
        </div>
      </main>
      <FooterLogo />
    </div>
  );
};

FavoritesScreen.propTypes = {
  offers: PropTypes.arrayOf(
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
  ).isRequired,
  authorizedUser: PropTypes.string
};

export default FavoritesScreen;
