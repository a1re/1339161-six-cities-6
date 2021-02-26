import React from 'react';
import CustomPropTypes from '../../custom-prop-types';
import RoomCard from '../room/room-card';

const FavoritesCard = ({offer}) => (
  <article className="favorites__card place-card">
    <RoomCard
      offer={offer}
      imgWidth={150}
      imgHeight={110}
      infoWrappingClassName="favorites__card-info"
      imageWrappingClassName="favorites__image-wrapper"/>
  </article>
);

FavoritesCard.propTypes = {
  offer: CustomPropTypes.offer.isRequired,
};

export default FavoritesCard;
