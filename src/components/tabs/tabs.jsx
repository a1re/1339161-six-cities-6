import React from 'react';
import PropTypes from 'prop-types';
import TabsLink from './tabs-link';

const Tabs = ({cities, selectedCity}) => {
  return <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => <TabsLink key={`tab-city-${city.id}`} link={city} isActive={city.title === selectedCity} />)}
      </ul>
    </section>
  </div>;
};

Tabs.propTypes = {
  cities: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired
      })
  ).isRequired,
  selectedCity: PropTypes.string.isRequired
};

export default Tabs;
