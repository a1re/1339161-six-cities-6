import React, {useState} from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../custom-prop-types';
import MainSorting from './main-sorting';
import MainOfferCard from './main-offer-card';
import Map from '../map/map';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {Sorting} from '../../const';

const MainOfferList = ({offersInCity, onSelectOffer, selectedCity}) => {
  const [sortingMethod, setSortingMethod] = useState(Object.entries(Sorting).find(([, method]) => method.isDefault)[1]);
  const offers = [...offersInCity].sort(sortingMethod.callback);

  return (<div className="cities__places-container container">
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} {offers.length > 1 ? `places` : `place`} to stay in {selectedCity.name}</b>
      <MainSorting activeMethodName={sortingMethod.name} onSelectMethod={setSortingMethod}/>
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => <MainOfferCard
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
