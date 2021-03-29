import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import MainTabs from './main-tabs';
import MainOfferList from './main-offer-list';
import MainEmpty from './main-empty';
import {useSelector, useDispatch} from 'react-redux';
import {fetchOfferList} from '../../store/api-actions';
import {updateCityOfferList} from '../../store/action';
import {DEFAULT_SORTING_NAME} from '../../const';

const MainScreen = ({renderSpinner}) => {
  const {activeCityOfferList, isOfferListLoaded} = useSelector((state) => state.OFFER_LIST);
  const {activeCityName} = useSelector((state) => state.CITY);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isOfferListLoaded) {
      dispatch(fetchOfferList())
        .then(() => dispatch(updateCityOfferList(activeCityName, DEFAULT_SORTING_NAME)));
    }
  }, [isOfferListLoaded]);

  if (!isOfferListLoaded) {
    return <div className="page page--gray page--main">
      <Header isMain={true}/>
      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container" style={{justifyContent: `center`, alignItems: `center`}}>
          {renderSpinner()}
        </div>
      </main>
    </div>;
  }

  return <div className="page page--gray page--main">
    <Header isMain={true}/>
    <main className={`page__main page__main--index${activeCityOfferList.length ? `` : ` page__main--index-empty`}`}>
      <h1 className="visually-hidden">Cities</h1>
      <MainTabs/>
      <div className="cities">
        {activeCityOfferList.length ? <MainOfferList key={`${activeCityName}`} /> : <MainEmpty/>}
      </div>
    </main>
  </div>;
};

MainScreen.propTypes = {
  renderSpinner: PropTypes.func.isRequired
};

export default MainScreen;
