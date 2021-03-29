import React, {useState, useEffect} from 'react';
import classNames from 'classnames';
import {SORTING_METHODS, ESC_KEYCODE, DEFAULT_SORTING_NAME} from '../../const';
import {useSelector, useDispatch} from 'react-redux';
import {updateCityOfferList} from '../../store/action';

const MainSorting = () => {
  const [isSortingOpen, openSorting] = useState(false);
  const [sortingName, setSortingName] = useState(DEFAULT_SORTING_NAME);
  const {activeCityName} = useSelector((state) => state.CITY);

  const dispatch = useDispatch();

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
      {sortingName}
      <svg className="places__sorting-arrow" width={7} height={4}>
        <use xlinkHref="#icon-arrow-select" />
      </svg>
    </span>
    <ul className={classNames(`places__options`, `places__options--custom`, isSortingOpen && `places__options--opened`)}>
      {SORTING_METHODS.map((sorting) =>
        <li
          key={sorting.name}
          className={classNames(`places__option`, sortingName === sorting.name && `places__option--active`)}
          tabIndex={0}
          onClick={() => {
            dispatch(updateCityOfferList(activeCityName, sorting.name));
            setSortingName(sorting.name);
            openSorting(false);
          }}
        >
          {sorting.name}
        </li>)
      }
    </ul>
  </form>;
};

export default MainSorting;
