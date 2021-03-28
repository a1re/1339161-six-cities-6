import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../custom-prop-types';
import Map from '../map/map';
import {connect} from 'react-redux';
import {fetchNearbyOfferList} from '../../store/api-actions';
import {hoverOffer} from '../../store/action';

const RoomNearbyMap = ({id, latitude, longitude, zoom, offer, offerList, onHoverOffer, onLoadNearbyOfferList, renderSpinner}) => {
  useEffect(() => {
    if (!offerList || offer.id !== id) {
      onLoadNearbyOfferList(id);
    }

    onHoverOffer(id);
  }, [offerList]);

  if (!offerList) {
    return <div className="container" style={{textAlign: `center`}}>
      {renderSpinner()}
    </div>;
  }

  return <Map
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
  zoom: PropTypes.number.isRequired,
  offer: CustomPropTypes.offer,
  offerList: PropTypes.arrayOf(CustomPropTypes.offer),
  renderSpinner: PropTypes.func.isRequired,
  onHoverOffer: PropTypes.func.isRequired,
  onLoadNearbyOfferList: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  offer: state.activeOffer.data,
  offerList: state.activeOffer.nearbyOfferList
});

const mapDispatchToProps = (dispatch) => ({
  onHoverOffer: (offerId) => dispatch(hoverOffer(offerId)),
  onLoadNearbyOfferList: (id) => dispatch(fetchNearbyOfferList(id))
});

export {RoomNearbyMap};
export default connect(mapStateToProps, mapDispatchToProps)(RoomNearbyMap);
