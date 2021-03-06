import React from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../custom-prop-types';
import Header from '../header/header';
import FooterLogo from '../footer-logo/footer-logo';
import FavoritesEmpty from './favorites-empty';
import FavoritesList from './favorites-list';
import {connect} from 'react-redux';

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
  offers: PropTypes.arrayOf(CustomPropTypes.offer).isRequired,
  authorizedUser: CustomPropTypes.authorizedUser
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  authorizedUser: state.authorizedUser
});

export {FavoritesScreen};
export default connect(mapStateToProps, null)(FavoritesScreen);
