import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import FooterLogo from '../footer-logo/footer-logo';
import FavoritesEmpty from './favorites-empty';
import FavoritesList from './favorites-list';

const FavoritesScreen = ({offers, authorizedUser}) => {
  const favorites = offers.filter((offer) => offer.isFavorite === true);
  const cities = [...new Set(favorites.map((offer) => offer.city))];

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
  authorizedUser: PropTypes.string
};

export default FavoritesScreen;
