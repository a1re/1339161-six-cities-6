import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import CustomPropTypes from '../../custom-prop-types';
import MainSorting from './main-sorting';
import MainOfferCard from './main-offer-card';
import Map from '../map/map';

const MainOfferList = ({offersInCity, onSelectOffer, selectedCity}) => {

  return (<div className="cities__places-container container">
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offersInCity.length} {offersInCity.length > 1 ? `places` : `place`} to stay in {selectedCity.name}</b>
      <MainSorting />
      <div className="cities__places-list places__list tabs__content">
        {offersInCity.map((offer) => <MainOfferCard
          key={`offer-card-${offer.id}`}
          offer={offer}
          onHoverIn={() => onSelectOffer(offer.id) }
          onHoverOut={() => onSelectOffer(0) }
        />)}
      </div>
    </section>
    <div className="cities__right-section">
      <Map
        latitude={selectedCity.location.latitude}
        longitude={selectedCity.location.longitude}
        zoom={selectedCity.location.zoom}
        points={offersInCity}
        className="cities__map"
      />
    </div>
  </div>);
};

MainOfferList.propTypes = {
  selectedCity: CustomPropTypes.city.isRequired,
  offersInCity: PropTypes.arrayOf(CustomPropTypes.offer).isRequired,
  onSelectOffer: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onSelectOffer: (offerId) => dispatch(ActionCreator.selectOffer(offerId))
});

export {MainOfferList};
export default connect(null, mapDispatchToProps)(MainOfferList);
