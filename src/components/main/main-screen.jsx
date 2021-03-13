import React from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../custom-prop-types';
import Header from '../header/header';
import MainTabs from './main-tabs';
import MainOfferList from './main-offer-list';
import MainEmpty from './main-empty';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

const MainScreen = ({cities, offers, selectedCityName, authorizedUser}) => {
  const selectedCity = cities.find((city) => city.name === selectedCityName);

  return (<div className="page page--gray page--main">
    <Header isMain={true} authorizedUser={authorizedUser}/>
    <main className={`page__main page__main--index${offers.length ? `` : ` page__main--index-empty`}`}>
      <h1 className="visually-hidden">Cities</h1>
      <MainTabs cities={cities}/>
      <div className="cities">
        {
          offers.length > 0
            ? <MainOfferList key={`${selectedCityName}`} selectedCity={selectedCity} />
            : <MainEmpty/>
        }
      </div>
    </main>
  </div>);
};

MainScreen.propTypes = {
  cities: PropTypes.arrayOf(CustomPropTypes.city).isRequired,
  offers: PropTypes.arrayOf(CustomPropTypes.offer).isRequired,
  selectedCityName: PropTypes.string.isRequired,
  authorizedUser: CustomPropTypes.authorizedUser,
  onSelectCity: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  offers: state.activeCityOffers.data,
  selectedCityName: state.activeCityName,
  authorizedUser: state.authorizedUser
});

const mapDispatchToProps = (dispatch) => ({
  onSelectCity: (cityName) => dispatch(ActionCreator.selectCity(cityName))
});

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
