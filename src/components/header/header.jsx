import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AuthorizationStatus, AppRoute} from '../../const';

const Header = ({isMain}) => {
  const {authorizedUser, authorizationStatus} = useSelector((state) => state.USER);

  return <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <Link to={AppRoute.ROOT} className={`header__logo-link${isMain ? ` header__logo-link--active` : ``}`}>
            <img src="img/logo.svg" alt="6 cities logo" width="81" height="41" className="header__logo"/>
          </Link>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              <Link
                to={authorizationStatus === AuthorizationStatus.AUTH ? AppRoute.FAVORITES : AppRoute.LOGIN}
                className="header__nav-link header__nav-link--profile" href="#">
                <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                {
                  authorizationStatus === AuthorizationStatus.AUTH
                    ? <span className="header__user-name user__name">{authorizedUser.email}</span>
                    : <span className="header__login">Sign in</span>
                }
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>;
};

Header.propTypes = {
  isMain: PropTypes.bool.isRequired
};

export default Header;
