import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../custom-prop-types';
import Map from '../map/map';
import {connect} from 'react-redux';
import {fetchNearbyOfferList} from '../../store/api-actions';

const RoomNearbyMap = ({id, latitude, longitude, zoom, offer, offerList, onLoadNearbyOfferList, renderSpinner}) => {
  useEffect(() => {
    if (!offerList || offer.id !== id) {
      onLoadNearbyOfferList(id);
    }
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
    markers={offerList}
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
  onLoadNearbyOfferList: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  offer: state.activeOffer.data,
  offerList: state.activeOffer.nearbyOfferList
});

const mapDispatchToProps = (dispatch) => ({
  onLoadNearbyOfferList: (id) => dispatch(fetchNearbyOfferList(id))
});

export {RoomNearbyMap};
export default connect(mapStateToProps, mapDispatchToProps)(RoomNearbyMap);
