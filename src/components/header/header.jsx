import React from 'react';
import {Link} from 'react-router-dom';
import HeaderNav from './header-nav';
import {AppRoute} from '../../const';

const HeaderMain = () => {
  return <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <Link to={AppRoute.ROOT} className={`header__logo-link`}>
            <img src="img/logo.svg" alt="6 cities logo" width="81" height="41" className="header__logo"/>
          </Link>
        </div>
        <HeaderNav />
      </div>
    </div>
  </header>;
};

export default HeaderMain;
