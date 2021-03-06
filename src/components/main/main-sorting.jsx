import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Sorting, ESC_KEYCODE} from '../../const';

const MainSorting = ({activeMethodName, onSelectMethod}) => {
  const [isSortingOpen, openSorting] = useState(false);

  const closeSortingByEsc = (evt) => {
    if (evt.keyCode === ESC_KEYCODE) {
      openSorting(false);
    }
  };

  useEffect(() => {
    document.addEventListener(`keydown`, closeSortingByEsc, false);

    return () => {
      document.removeEventListener(`keydown`, closeSortingByEsc, false);
    };
  }, []);

  return <form className="places__sorting" action="#" method="get">
    <span className="places__sorting-caption">Sort by</span>
    &nbsp;
    <span className="places__sorting-type" tabIndex={0} onClick={() => openSorting(!isSortingOpen)}>
      {activeMethodName}
      <svg className="places__sorting-arrow" width={7} height={4}>
        <use xlinkHref="#icon-arrow-select" />
      </svg>
    </span>
    <ul className={classNames(`places__options`, `places__options--custom`, isSortingOpen && `places__options--opened`)}>
      {Object.entries(Sorting).map(([methodKey, method]) =>
        <li
          key={methodKey}
          className={classNames(`places__option`, activeMethodName === method.name && `places__option--active`)}
          tabIndex={0}
          onClick={() => {
            onSelectMethod(method);
            openSorting(false);
          }}
        >
          {method.name}
        </li>)
      }
    </ul>
  </form>;
};

MainSorting.propTypes = {
  activeMethodName: PropTypes.string.isRequired,
  onSelectMethod: PropTypes.func.isRequired
};

export default MainSorting;
