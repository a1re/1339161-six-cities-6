import React from 'react';
import PropTypes from 'prop-types';
import Spinner from './spinner';
import HeaderMain from '../header/header-main';
import Header from '../header/header';

const SpinnerScreen = ({isMain}) => (
  <div className="page page--gray page--main">
    {isMain ? <HeaderMain /> : <Header />}
    <main className="page__main page__main--favorites page__main--favorites-empty">
      <div className="page__favorites-container container" style={{justifyContent: `center`, alignItems: `center`}}>
        <Spinner />
      </div>
    </main>
  </div>
);

SpinnerScreen.propTypes = {
  isMain: PropTypes.bool
};

export default React.memo(SpinnerScreen);
