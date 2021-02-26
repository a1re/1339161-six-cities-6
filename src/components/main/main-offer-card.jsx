import React from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../custom-prop-types';
import RoomCard from '../room/room-card';

const MainOfferCard = ({offer, onHoverIn, onHoverOut}) => (
  <article className="cities__place-card place-card" onMouseEnter={onHoverIn} onMouseLeave={onHoverOut}>
    <RoomCard
      offer={offer}
      imgWidth={260}
      imgHeight={200}
      infoWrappingClassName={false}
      imageWrappingClassName="cities__image-wrapper"/>
  </article>
);

MainOfferCard.propTypes = {
  offer: CustomPropTypes.offer.isRequired,
  onHoverIn: PropTypes.func,
  onHoverOut: PropTypes.func
};

export default MainOfferCard;
