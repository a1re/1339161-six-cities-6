import React from 'react';
import PropTypes from 'prop-types';

const TabsLink = ({link, isActive}) => {
  return <li className="locations__item">
    <a className={`locations__item-link tabs__item${isActive ? ` tabs__item--active` : ``}`} href={link.href}>
      <span>{link.title}</span>
    </a>
  </li>;
};

TabsLink.propTypes = {
  link: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
  }).isRequired,
  isActive: PropTypes.bool.isRequired
};

export default TabsLink;
