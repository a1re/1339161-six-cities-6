import React from 'react';
import PropTypes from 'prop-types';

const MainTabs = ({cities, selectedCity}) => {
  return <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => <li className="locations__item" key={`city-${city.toLowerCase()}`}>
          <a className={`locations__item-link tabs__item${city === selectedCity ? ` tabs__item--active` : ``}`} href={`#${city.toLowerCase()}`}>
            <span>{city}</span>
          </a>
        </li>
        )}
      </ul>
    </section>
  </div>;
};

MainTabs.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCity: PropTypes.string.isRequired
};

export default MainTabs;
