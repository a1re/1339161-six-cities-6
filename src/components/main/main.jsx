import React from 'react';
import Header from '../header/header';
import Tabs from '../tabs/tabs';
import PlacesSorting from '../places-sorting/places-sorting';
import OfferCard from '../offer-card/offer-card';
import PropTypes from 'prop-types';

const Main = ({cityList, offerList, defaultCity, authorizedUser}) => (
  <div className="page page--gray page--main">
    <Header isMain={true} authorizedUser={authorizedUser}/>
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Tabs cityList={cityList} defaultCity={defaultCity}/>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">312 places to stay in Amsterdam</b>
            <PlacesSorting />
            <div className="cities__places-list places__list tabs__content">
              {offerList.filter((offer) => offer.city === defaultCity).map((offer) => <OfferCard key={`offerCard${offer.id}`} offer={offer} />)}
            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map"></section>
          </div>
        </div>
      </div>
    </main>
  </div>
);

Main.propTypes = {
  cityList: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired
      })
  ).isRequired,
  offerList: PropTypes.arrayOf(
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
  defaultCity: PropTypes.string.isRequired,
  authorizedUser: PropTypes.string
};

export default Main;
