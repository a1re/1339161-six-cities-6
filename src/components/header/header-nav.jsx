import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AuthorizationStatus, AppRoute} from '../../const';

const HeaderNav = () => {
  const {authorizedUser, authorizationStatus} = useSelector((state) => state.USER);

  return <nav className="header__nav">
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
  </nav>;
};

export default React.memo(HeaderNav);
