import React from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../custom-prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';


const MainTabs = ({cityList, selectedCityName, onSelectCity}) => {
  return <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cityList.map(({name}) => <li className="locations__item" key={`city-${name}`}>
          <a
            className={`locations__item-link tabs__item${name === selectedCityName ? ` tabs__item--active` : ``}`}
            onClick={(evt) => {
              evt.preventDefault();
              onSelectCity(name);
            }}
          >
            <span>{name}</span>
          </a>
        </li>
        )}
      </ul>
    </section>
  </div>;
};

MainTabs.propTypes = {
  cityList: PropTypes.arrayOf(CustomPropTypes.city).isRequired,
  selectedCityName: PropTypes.string.isRequired,
  onSelectCity: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  selectedCityName: state.activeCityName,
  cityList: state.cityList
});

const mapDispatchToProps = (dispatch) => ({
  onSelectCity: (cityName) => dispatch(ActionCreator.selectCity(cityName))
});

export {MainTabs};
export default connect(mapStateToProps, mapDispatchToProps)(MainTabs);
