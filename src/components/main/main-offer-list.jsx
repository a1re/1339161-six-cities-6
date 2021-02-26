import React, {useState} from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../custom-prop-types';
import MainSorting from './main-sorting';
import MainOfferCard from './main-offer-card';
import Map from '../map/map';

const MainOfferList = (props) => {
  const [offers] = useState(props.offers);
  const [, setActiveOffer] = useState(null);

  return (<div className="cities__places-container container">
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} {offers.length > 1 ? `places` : `place`} to stay in Amsterdam</b>
      <MainSorting />
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => <MainOfferCard
          key={`offer-card-${offer.id}`}
          offer={offer}
          onHoverIn={() => setActiveOffer(offer.id) }
          onHoverOut={() => setActiveOffer(null) }
        />)}
      </div>
    </section>
    <div className="cities__right-section">
      <Map city={props.city} points={offers} className="cities__map"/>
    </div>
  </div>);
};

MainOfferList.propTypes = {
  city: CustomPropTypes.city.isRequired,
  offers: PropTypes.arrayOf(CustomPropTypes.offer).isRequired,
};

export default MainOfferList;
