import React from 'react';
import MainSorting from './main-sorting';
import MainOfferCard from './main-offer-card';
import Map from '../map/map';
import {useSelector, useDispatch} from 'react-redux';
import {hoverOffer} from '../../store/action';
import {getSortingSelector} from '../../store/selectors';

const MainOfferList = () => {
  const cityList = useSelector((state) => state.CITY.cityList);
  const activeCityName = useSelector((state) => state.CITY.activeCityName);
  const activeCity = cityList.find((city) => city.name === activeCityName);
  const activeSortingName = useSelector((state) => state.CITY.activeSortingName);
  const getSortedOfferList = getSortingSelector(activeSortingName);
  const offerList = useSelector(
      (state) => getSortedOfferList(state, activeCityName),
      (a, b) => a.length === b.length
  );

  const dispatch = useDispatch();

  return (<div className="cities__places-container container">
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offerList.length} {offerList.length > 1 ? `places` : `place`} to stay in {activeCity.name}</b>
      <MainSorting />
      <div className="cities__places-list places__list tabs__content">
        {offerList.map((offer) => <MainOfferCard
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
        latitude={activeCity.location.latitude}
        longitude={activeCity.location.longitude}
        zoom={activeCity.location.zoom}
        markers={offerList}
        className="cities__map"
      />
    </div>
  </div>);
};

export default React.memo(MainOfferList);
