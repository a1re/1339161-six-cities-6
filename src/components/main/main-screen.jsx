import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../custom-prop-types';
import Header from '../header/header';
import MainTabs from './main-tabs';
import MainOfferList from './main-offer-list';
import MainEmpty from './main-empty';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {fetchOfferList} from '../../store/api-actions';

const MainScreen = ({offerList, selectedCityName, authorizedUser, renderSpinner, isOfferListLoaded, onLoadOfferList}) => {
  useEffect(() => {
    if (!isOfferListLoaded) {
      onLoadOfferList();
    }
  }, [isOfferListLoaded]);

  if (!isOfferListLoaded) {
    return <div className="page page--gray page--main">
      <Header isMain={true} authorizedUser={authorizedUser}/>
      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container" style={{justifyContent: `center`, alignItems: `center`}}>
          {renderSpinner()}
        </div>
      </main>
    </div>;
  }

  return (<div className="page page--gray page--main">
    <Header isMain={true} authorizedUser={authorizedUser}/>
    <main className={`page__main page__main--index${offerList.length ? `` : ` page__main--index-empty`}`}>
      <h1 className="visually-hidden">Cities</h1>
      <MainTabs/>
      <div className="cities">
        {
          offerList.length > 0
            ? <MainOfferList key={`${selectedCityName}`} />
            : <MainEmpty/>
        }
      </div>
    </main>
  </div>);
};

MainScreen.propTypes = {
  offerList: PropTypes.arrayOf(CustomPropTypes.offer).isRequired,
  selectedCityName: PropTypes.string.isRequired,
  authorizedUser: CustomPropTypes.authorizedUser,
  onSelectCity: PropTypes.func.isRequired,
  isOfferListLoaded: PropTypes.bool.isRequired,
  renderSpinner: PropTypes.func.isRequired,
  onLoadOfferList: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  offerList: state.activeCityOfferList.data,
  selectedCityName: state.activeCityName,
  authorizedUser: state.authorizedUser,
  isOfferListLoaded: state.isOfferListLoaded
});

const mapDispatchToProps = (dispatch) => ({
  onSelectCity: (cityName) => dispatch(ActionCreator.selectCity(cityName)),
  onLoadOfferList: () => dispatch(fetchOfferList())
});

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
