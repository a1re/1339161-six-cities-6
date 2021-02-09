import React from 'react';
import PropTypes from 'prop-types';

const Tabs = ({cities, selectedCity}) => {
  return <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => <TabLink key={`tab-city-${city.id}`} link={city} isActive={city.title === selectedCity} />)}
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

const TabLink = ({link, isActive}) => {
  return <li className="locations__item">
    <a className={`locations__item-link tabs__item${isActive ? ` tabs__item--active` : ``}`} href={link.href}>
      <span>{link.title}</span>
    </a>
  </li>;
};

TabLink.propTypes = {
  link: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
  }).isRequired,
  isActive: PropTypes.bool.isRequired
};

export default Tabs;
