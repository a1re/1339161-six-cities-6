import React from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../custom-prop-types';
import MainSorting from './main-sorting';
import MainOfferCard from './main-offer-card';
import Map from '../map/map';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

const MainOfferList = ({offers, onHoverOffer, selectedCity, sortingName}) => {
  return (<div className="cities__places-container container">
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} {offers.length > 1 ? `places` : `place`} to stay in {selectedCity.name}</b>
      <MainSorting />
      <div className="cities__places-list places__list tabs__content" key={sortingName}>
        {offers.map((offer) => <MainOfferCard
          key={`offer-card-${offer.id}`}
          offer={offer}
          onHoverIn={() => onHoverOffer(offer.id) }
          onHoverOut={() => onHoverOffer(null) }
        />)}
      </div>
    </section>
    <div className="cities__right-section">
      <Map
        latitude={selectedCity.location.latitude}
        longitude={selectedCity.location.longitude}
        zoom={selectedCity.location.zoom}
        markers={offers}
        className="cities__map"
      />
    </div>
  </div>);
};

MainOfferList.propTypes = {
  selectedCity: CustomPropTypes.city.isRequired,
  offers: PropTypes.arrayOf(CustomPropTypes.offer).isRequired,
  sortingName: PropTypes.string.isRequired,
  onHoverOffer: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  offers: state.activeCityOffers.sortedData,
  sortingName: state.activeCityOffers.sortingName
});


const mapDispatchToProps = (dispatch) => ({
  onHoverOffer: (offerId) => dispatch(ActionCreator.hoverOffer(offerId))
});

export {MainOfferList};
export default connect(mapStateToProps, mapDispatchToProps)(MainOfferList);
