import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Map from '../map/map';
import Spinner from '../spinner/spinner';
import {useSelector, useDispatch} from 'react-redux';
import {fetchNearbyOfferList} from '../../store/api-actions';
import {hoverOffer} from '../../store/action';

const RoomNearbyMap = ({id, latitude, longitude, zoom}) => {
  const {activeOffer} = useSelector((state) => state.ACTIVE_OFFER);
  const {data: offer, nearbyOfferList: offerList} = activeOffer;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!offerList || offer.id !== id) {
      dispatch(fetchNearbyOfferList(id));
    }

    dispatch(hoverOffer(id));
  }, [offerList]);

  if (!offerList) {
    return <div className="container" style={{textAlign: `center`}}>
      <Spinner />
    </div>;
  }

  return <Map
    key={`Map-${latitude}-${longitude}`}
    latitude={latitude}
    longitude={longitude}
    zoom={zoom}
    markers={[...offerList, offer]}
    className="property__map"
  />;
};

RoomNearbyMap.propTypes = {
  id: PropTypes.number.isRequired,
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  zoom: PropTypes.number.isRequired
};

export default RoomNearbyMap;
