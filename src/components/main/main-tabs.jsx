import React from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../custom-prop-types';

const MainTabs = ({cities, selectedCityName, onSelectCity}) => {
  return <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Object.entries(cities).map(([, city]) => <li className="locations__item" key={`city-${city.name}`}>
          <a
            className={`locations__item-link tabs__item${city.name === selectedCityName ? ` tabs__item--active` : ``}`}
            onClick={(evt) => {
              evt.preventDefault();
              onSelectCity(city.name);
            }}
          >
            <span>{city.name}</span>
          </a>
        </li>
        )}
      </ul>
    </section>
  </div>;
};

MainTabs.propTypes = {
  cities: PropTypes.arrayOf(CustomPropTypes.city).isRequired,
  selectedCityName: PropTypes.string.isRequired,
  onSelectCity: PropTypes.func.isRequired
};

export default MainTabs;
