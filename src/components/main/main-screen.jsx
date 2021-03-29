import React, {useEffect} from 'react';
import Header from '../header/header';
import MainTabs from './main-tabs';
import MainOfferList from './main-offer-list';
import MainEmpty from './main-empty';
import Spinner from '../spinner/spinner';
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
    return <div className="page page--gray page--main">
      <Header isMain={true}/>
      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container" style={{justifyContent: `center`, alignItems: `center`}}>
          <Spinner />
        </div>
      </main>
    </div>;
  }

  return <div className="page page--gray page--main">
    <Header isMain={true}/>
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
