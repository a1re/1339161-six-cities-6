import React, {useEffect} from 'react';
import Map from '../map/map';
import Spinner from '../spinner/spinner';
import {useSelector, useDispatch} from 'react-redux';
import {hoverOffer} from '../../store/action';

const RoomNearbyMap = () => {
  const highlightedOffer = useSelector((state) => state.ACTIVE_OFFER.offer);
  const nearbyOfferList = useSelector((state) => state.ACTIVE_OFFER.nearbyOfferList);
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

export default RoomNearbyMap;
