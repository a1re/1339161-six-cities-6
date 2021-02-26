import React from 'react';
import CustomPropTypes from '../../custom-prop-types';
import RoomCard from './room-card';

const RoomNearOffer = ({offer}) => (
  <article className="near-places__card place-card">
    <RoomCard
      offer={offer}
      imgWidth={260}
      imgHeight={200}
      infoWrappingClassName={false}
      imageWrappingClassName="near-places__image-wrapper"/>
  </article>
);

RoomNearOffer.propTypes = {
  offer: CustomPropTypes.offer.isRequired
};

export default RoomNearOffer;
