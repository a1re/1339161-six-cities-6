import React from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../custom-prop-types';
import RoomNearOffer from './room-near-offer';
import Spinner from '../spinner/spinner';

const RoomNearbyOfferList = ({nearbyOfferList}) => {
  if (!nearbyOfferList) {
    return <div className="container" style={{textAlign: `center`}}>
      <Spinner />
    </div>;
  }

  return <div className="container">
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {nearbyOfferList.map((offerItem) => <RoomNearOffer key={`offer-card-${offerItem.id}`} offer={offerItem} />)}
      </div>
    </section>
  </div>;
};

RoomNearbyOfferList.propTypes = {
  nearbyOfferList: PropTypes.arrayOf(CustomPropTypes.offer)
};

export default RoomNearbyOfferList;
