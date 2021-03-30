import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../custom-prop-types';
import Map from '../map/map';
import Spinner from '../spinner/spinner';
import {useDispatch} from 'react-redux';
import {hoverOffer} from '../../store/action';

const RoomNearbyMap = ({highlightedOffer, nearbyOfferList}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(hoverOffer(highlightedOffer.id));

    return () => dispatch(hoverOffer(null));
  }, [highlightedOffer]);

  if (!nearbyOfferList) {
    return <div className="container" style={{textAlign: `center`}}>
      <Spinner />
    </div>;
  }

  return <Map
    key={`Map-${highlightedOffer.id}`}
    latitude={highlightedOffer.city.location.latitude}
    longitude={highlightedOffer.city.location.longitude}
    zoom={highlightedOffer.city.location.zoom}
    markers={[...nearbyOfferList, highlightedOffer]}
    className="property__map"
  />;
};

RoomNearbyMap.propTypes = {
  highlightedOffer: CustomPropTypes.offer.isRequired,
  nearbyOfferList: PropTypes.arrayOf(CustomPropTypes.offer)
};

export default RoomNearbyMap;
