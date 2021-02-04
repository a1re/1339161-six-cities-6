import React from 'react';

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <a href="" className="header__logo-link header__logo-link--active">
            <img src="img/logo.svg" alt="6 cities logo" width="81" height="41" className="header__logo"/>
          </a>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              <a className="header__nav-link header__nav-link--profile" href="#">
                <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
