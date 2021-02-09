import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import FooterLogo from '../footer-logo/footer-logo';

const NotFoundScreen = ({authorizedUser}) => (
  <div className="page page--favorites-empty">
    <Header isMain={false} authorizedUser={authorizedUser}/>
    <main className="page__main page__main--favorites page__main--favorites-empty">
      <div className="page__favorites-container container">
        <section className="favorites favorites--empty">
          <h1 className="visually-hidden">Error 404</h1>
          <div className="favorites__status-wrapper">
            <b className="favorites__status">Not found.</b>
            <p className="favorites__status-description">You&apos;ve mistypes the address or clicked on a broken link.</p>
          </div>
        </section>
      </div>
    </main>
    <FooterLogo />
  </div>
);

NotFoundScreen.propTypes = {
  authorizedUser: PropTypes.string
};

export default NotFoundScreen;
