import React from 'react';
import HeaderNav from './header-nav';

const Header = () => {
  return <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <img src="img/logo.svg" alt="6 cities logo" width="81" height="41" className="header__logo"/>
        </div>
        <HeaderNav />
      </div>
    </div>
  </header>;
};

export default Header;
