import React, {useEffect} from 'react';
import HeaderMain from '../header/header-main';
import MainTabs from './main-tabs';
import MainOfferList from './main-offer-list';
import MainEmpty from './main-empty';
import SpinnerSceen from '../spinner/spinner-screen';
import {useSelector, useDispatch} from 'react-redux';
import {fetchOfferList} from '../../store/api-actions';
import {getFilteredOfferListSelector} from '../../store/selectors';

const MainScreen = () => {
  const isOfferListLoaded = useSelector((state) => state.OFFER_LIST.isOfferListLoaded);
  const activeCityName = useSelector((state) => state.CITY.activeCityName);
  const offerList = useSelector((state) => getFilteredOfferListSelector(state));

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isOfferListLoaded) {
      dispatch(fetchOfferList());
    }
  }, [isOfferListLoaded]);

  if (!isOfferListLoaded) {
    return <SpinnerSceen isMain={true}/>;
  }

  return <div className="page page--gray page--main">
    <HeaderMain/>
    <main className={`page__main page__main--index${offerList.length ? `` : ` page__main--index-empty`}`}>
      <h1 className="visually-hidden">Cities</h1>
      <MainTabs/>
      <div className="cities">
        {
          offerList.length
            ? <MainOfferList key={`${activeCityName}`} offerList={offerList} activeCityName={activeCityName}/>
            : <MainEmpty activeCityName={activeCityName}/>
        }
      </div>
    </main>
  </div>;
};

export default MainScreen;
