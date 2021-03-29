import React, {useMemo, useCallback} from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../custom-prop-types';
import MainSorting from './main-sorting';
import MainOfferCard from './main-offer-card';
import Map from '../map/map';
import {useSelector, useDispatch} from 'react-redux';
import {setSorting, hoverOffer} from '../../store/action';
import {getSortedOfferListSelector} from '../../store/selectors';

const MainOfferList = ({offerList, activeCityName}) => {
  const cityList = useSelector((state) => state.CITY.cityList);
  const activeSortingName = useSelector((state) => state.CITY.activeSortingName);
  const activeCity = useMemo(() => cityList.find((city) => city.name === activeCityName), [cityList, activeCityName]);
  const sortedOfferList = useSelector((state) => getSortedOfferListSelector(state, offerList));
  const handleSortingChange = useCallback((sortingName) => dispatch(setSorting(sortingName)), [activeSortingName]);

  const dispatch = useDispatch();

  return (<div className="cities__places-container container">
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offerList.length} {offerList.length > 1 ? `places` : `place`} to stay in {activeCity.name}</b>
      <MainSorting activeSortingName={activeSortingName} onSortingChange={handleSortingChange}/>
      <div className="cities__places-list places__list tabs__content">
        {sortedOfferList.map((offer) => <MainOfferCard
          key={`offer-card-${offer.id}`}
          offer={offer}
          onHoverIn={() => dispatch(hoverOffer(offer.id)) }
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

MainOfferList.propTypes = {
  offerList: PropTypes.arrayOf(CustomPropTypes.offer).isRequired,
  activeCityName: PropTypes.string.isRequired
};

export default React.memo(MainOfferList);
