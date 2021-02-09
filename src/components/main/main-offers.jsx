import React from 'react';
import PropTypes from 'prop-types';
import MainSorting from './main-sorting';
import RoomCard from '../room/room-card';

const MainOffers = ({offers}) => (
  <div className="cities__places-container container">
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">312 places to stay in Amsterdam</b>
      <MainSorting />
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => <RoomCard key={`offer-card-${offer.id}`} offer={offer} isMain={true} />)}
      </div>
    </section>
    <div className="cities__right-section">
      <section className="cities__map map"></section>
    </div>
  </div>
);

MainOffers.propTypes = {
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
  ).isRequired
};

export default MainOffers;
