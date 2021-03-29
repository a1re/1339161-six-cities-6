import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import RoomNearOffer from './room-near-offer';
import Spinner from '../spinner/spinner';
import {useSelector, useDispatch} from 'react-redux';
import {fetchNearbyOfferList} from '../../store/api-actions';

const RoomNearbyOfferList = ({id}) => {
  const {offer, nearbyOfferList: offerList} = useSelector((state) => state.ACTIVE_OFFER);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!offerList || offer.id !== id) {
      dispatch(fetchNearbyOfferList(id));
    }
  }, [offerList]);

  if (!offerList) {
    return <div className="container" style={{textAlign: `center`}}>
      <Spinner />
    </div>;
  }

  return <div className="container">
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offerList.map((offerItem) => <RoomNearOffer key={`offer-card-${offerItem.id}`} offer={offerItem} />)}
      </div>
    </section>
  </div>;
};

RoomNearbyOfferList.propTypes = {
  id: PropTypes.number.isRequired
};

export default RoomNearbyOfferList;
