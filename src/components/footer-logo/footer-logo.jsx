import React from 'react';

const FooterLogo = () => {
  return (
    <footer className="footer">
      <a className="footer__logo-link" href="main.html">
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33} />
      </a>
    </footer>
  );
};

export default FooterLogo;
