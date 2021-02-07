import React from 'react';
import PropTypes from 'prop-types';

const Tabs = ({cities, defaultCity}) => {
  return <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((link, i) => <TabLink key={`tablink${i}`} link={link} isActive={link.title === defaultCity} />)}
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
  defaultCity: PropTypes.string.isRequired
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
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
  }).isRequired,
  isActive: PropTypes.bool.isRequired
};

export default Tabs;
