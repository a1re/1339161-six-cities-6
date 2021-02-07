import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import FooterLogo from '../footer-logo/footer-logo';

const FavoritesScreen = ({offers, authorizedUser}) => {
  const favorites = offers.filter((offer) => offer.isFavorite === true);
  const cities = [...new Set(favorites.map((offer) => offer.city))];

  return (
    <div className={`page${favorites.length > 0 ? `` : ` page--favorites-empty`}`}>
      <Header isMain={false} authorizedUser={authorizedUser}/>
      <main className={`page__main page__main--favorites${favorites.length > 0 ? `` : ` page__main--favorites-empty`}`}>
        <div className="page__favorites-container container">
          {
            favorites.length > 0
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

const FavoritesEmpty = () => (
  <section className="favorites favorites--empty">
    <h1 className="visually-hidden">Favorites (empty)</h1>
    <div className="favorites__status-wrapper">
      <b className="favorites__status">Nothing yet saved.</b>
      <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
    </div>
  </section>
);

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

const FavoritesCity = ({city, favorites}) => (
  <li className="favorites__locations-items">
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <a className="locations__item-link" href="#">
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

const FavoritesCard = ({offer}) => (
  <article className="favorites__card place-card">
    <div className="favorites__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img className="place-card__image" src={offer.imgSmall} width={150} height={110} alt="Place image" />
      </a>
    </div>
    <div className="favorites__card-info place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">€{offer.price}</b>
          <span className="place-card__price-text">/&nbsp;night</span>
        </div>
        <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
          <svg className="place-card__bookmark-icon" width={18} height={19}>
            <use xlinkHref="#icon-bookmark" />
          </svg>
          <span className="visually-hidden">In bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: offer.rating * 20 + `%`}} />
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#">{offer.title}</a>
      </h2>
      <p className="place-card__type">{offer.type}</p>
    </div>
  </article>
);

FavoritesCard.propTypes = {
  offer: PropTypes.shape({
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
};

export default FavoritesScreen;
