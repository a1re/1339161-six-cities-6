import React from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../custom-prop-types';
import MainSorting from './main-sorting';
import RoomCard from '../room/room-card';

const MainOffers = ({offers}) => (
  <div className="cities__places-container container">
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} {offers.length > 1 ? `places` : `place`} to stay in Amsterdam</b>
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
  offers: PropTypes.arrayOf(CustomPropTypes.offer).isRequired,
};

export default MainOffers;
