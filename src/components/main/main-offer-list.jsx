import React from 'react';
import MainSorting from './main-sorting';
import MainOfferCard from './main-offer-card';
import Map from '../map/map';
import {useSelector, useDispatch} from 'react-redux';
import {hoverOffer} from '../../store/action';

const MainOfferList = () => {
  const {activeCityName, cityList} = useSelector((state) => state.CITY);
  const {activeCityOfferList} = useSelector((state) => state.OFFER_LIST);
  const selectedCity = cityList.find((city) => city.name === activeCityName);

  const dispatch = useDispatch();

  return (<div className="cities__places-container container">
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{activeCityOfferList.length} {activeCityOfferList.length > 1 ? `places` : `place`} to stay in {activeCityName}</b>
      <MainSorting />
      <div className="cities__places-list places__list tabs__content">
        {activeCityOfferList.map((offer) => <MainOfferCard
          key={`offer-card-${offer.id}`}
          offer={offer}
          onHoverIn={() => {
            dispatch(hoverOffer(offer.id));
          }}
          onHoverOut={() => dispatch(hoverOffer(null)) }
        />)}
      </div>
    </section>
    <div className="cities__right-section">
      <Map
        latitude={selectedCity.location.latitude}
        longitude={selectedCity.location.longitude}
        zoom={selectedCity.location.zoom}
        markers={activeCityOfferList}
        className="cities__map"
      />
    </div>
  </div>);
};

export default React.memo(MainOfferList);
