import React from 'react';
import PropTypes from 'prop-types';

const TabLink = ({link}) => {
  return <li className="locations__item">
    <a className={`locations__item-link tabs__item${link.isActive ? ` tabs__item--active` : ``}`} href="{link.href}">
      <span>{link.title}</span>
    </a>
  </li>;
};

TabLink.propTypes = {
  link: PropTypes.shape({
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    isActive: PropTypes.bool
  }).isRequired
};

const Tabs = ({citiesList}) => {
  return <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {citiesList.map((link, i) => <TabLink key={`tablink` + i} link={link} />)}
      </ul>
    </section>
  </div>;
};

Tabs.propTypes = {
  citiesList: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
        isActive: PropTypes.bool
      })
  ).isRequired
};

export default Tabs;
