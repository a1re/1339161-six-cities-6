import React from 'react';
import PropTypes from 'prop-types';

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

const Tabs = ({cityList, defaultCity}) => {
  return <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cityList.map((link, i) => <TabLink key={`tablink${i}`} link={link} isActive={link.title === defaultCity} />)}
      </ul>
    </section>
  </div>;
};

Tabs.propTypes = {
  cityList: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired
      })
  ).isRequired,
  defaultCity: PropTypes.string.isRequired
};

export default Tabs;
