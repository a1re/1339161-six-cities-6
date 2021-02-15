import React from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../custom-prop-types';
import {Link} from 'react-router-dom';

const Header = ({isMain, authorizedUser}) => (
  <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <Link to="/" className={`header__logo-link${isMain ? ` header__logo-link--active` : ``}`}>
            <img src="img/logo.svg" alt="6 cities logo" width="81" height="41" className="header__logo"/>
          </Link>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              <a className="header__nav-link header__nav-link--profile" href="#">
                <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                {
                  authorizedUser
                    ? <span className="header__user-name user__name">{authorizedUser.email}</span>
                    : <span className="header__login">Sign in</span>
                }
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  isMain: PropTypes.bool.isRequired,
  authorizedUser: CustomPropTypes.authorizedUser
};

export default Header;
