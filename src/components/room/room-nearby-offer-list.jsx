import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../custom-prop-types';
import RoomNearOffer from './room-near-offer';
import {connect} from 'react-redux';
import {fetchNearbyOfferList} from '../../store/api-actions';

const RoomNearbyOfferList = ({id, offer, offerList, onLoadNearbyOfferList, renderSpinner}) => {
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
  id: PropTypes.number.isRequired,
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

export {RoomNearbyOfferList};
export default connect(mapStateToProps, mapDispatchToProps)(RoomNearbyOfferList);
