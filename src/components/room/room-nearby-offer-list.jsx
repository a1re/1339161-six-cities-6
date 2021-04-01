import React from 'react';
import RoomNearOffer from './room-near-offer';
import Spinner from '../spinner/spinner';
import {useSelector} from 'react-redux';

const RoomNearbyOfferList = () => {
  const nearbyOfferList = useSelector((state) => state.ACTIVE_OFFER.nearbyOfferList);

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

export default RoomNearbyOfferList;
