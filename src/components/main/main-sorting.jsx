import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {SortingMethod, ESC_KEYCODE} from '../../const';

const MainSorting = ({activeSortingName, onSortingChange}) => {
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
      {activeSortingName}
      <svg className="places__sorting-arrow" width={7} height={4}>
        <use xlinkHref="#icon-arrow-select" />
      </svg>
    </span>
    <ul className={classNames(`places__options`, `places__options--custom`, isSortingOpen && `places__options--opened`)}>
      {Object.values(SortingMethod).map((sortingName) =>
        <li
          key={sortingName}
          className={classNames(`places__option`, activeSortingName === sortingName && `places__option--active`)}
          tabIndex={0}
          onClick={() => {
            onSortingChange(sortingName);
            openSorting(false);
          }}
        >
          {sortingName}
        </li>)
      }
    </ul>
  </form>;
};

MainSorting.propTypes = {
  activeSortingName: PropTypes.string.isRequired,
  onSortingChange: PropTypes.func.isRequired
};

export default MainSorting;
