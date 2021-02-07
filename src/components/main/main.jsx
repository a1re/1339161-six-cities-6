import React from 'react';
import Header from '../header/header';
import Tabs from '../tabs/tabs';
import PlacesSorting from '../places-sorting/places-sorting';
import OfferCard from '../offer-card/offer-card';
import PropTypes from 'prop-types';

const Main = ({cities, offers, defaultCity, authorizedUser}) => (
  <div className="page page--gray page--main">
    <Header isMain={true} authorizedUser={authorizedUser}/>
    <main className={`page__main page__main--index${offers.length > 0 ? `` : ` page__main--index-empty`}`}>
      <h1 className="visually-hidden">Cities</h1>
      <Tabs cities={cities} defaultCity={defaultCity}/>
      <div className="cities">
        {
          offers.length > 0
            ? <OfferList offers={offers} defaultCity={defaultCity} />
            : <OfferEmpty />
        }
      </div>
    </main>
  </div>
);

Main.propTypes = {
  cities: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired
      })
  ).isRequired,
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
  defaultCity: PropTypes.string.isRequired,
  authorizedUser: PropTypes.string
};

const OfferEmpty = () => (
  <div className="cities__places-container cities__places-container--empty container">
    <section className="cities__no-places">
      <div className="cities__status-wrapper tabs__content">
        <b className="cities__status">No places to stay available</b>
        <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
      </div>
    </section>
    <div className="cities__right-section"></div>
  </div>
);

const OfferList = ({offers, defaultCity}) => (
  <div className="cities__places-container container">
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">312 places to stay in Amsterdam</b>
      <PlacesSorting />
      <div className="cities__places-list places__list tabs__content">
        {offers.filter((offer) => offer.city === defaultCity).map((offer) => <OfferCard key={`offerCard${offer.id}`} offer={offer} />)}
      </div>
    </section>
    <div className="cities__right-section">
      <section className="cities__map map"></section>
    </div>
  </div>
);

OfferList.propTypes = {
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
  defaultCity: PropTypes.string.isRequired
};

export default Main;
