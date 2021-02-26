import React from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../custom-prop-types';
import Header from '../header/header';
import MainTabs from './main-tabs';
import MainOfferList from './main-offer-list';
import MainEmpty from './main-empty';

const MainScreen = ({cities, offers, city, authorizedUser}) => {
  const offersInCity = offers.filter((offer) => offer.city.name === city);
  return (<div className="page page--gray page--main">
    <Header isMain={true} authorizedUser={authorizedUser}/>
    <main className={`page__main page__main--index${offersInCity.length ? `` : ` page__main--index-empty`}`}>
      <h1 className="visually-hidden">Cities</h1>
      <MainTabs cities={cities} selectedCity={city}/>
      <div className="cities">
        {
          offersInCity.length > 0
            ? <MainOfferList offers={offersInCity} />
            : <MainEmpty city={city}/>
        }
      </div>
    </main>
  </div>);
};

MainScreen.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  offers: PropTypes.arrayOf(CustomPropTypes.offer).isRequired,
  city: PropTypes.string.isRequired,
  authorizedUser: CustomPropTypes.authorizedUser
};

export default MainScreen;
