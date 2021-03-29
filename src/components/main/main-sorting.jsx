import React, {useState, useEffect} from 'react';
import classNames from 'classnames';
import {SortingMethod, ESC_KEYCODE} from '../../const';
import {useSelector, useDispatch} from 'react-redux';
import {setSorting} from '../../store/action';

const MainSorting = () => {
  const [isSortingOpen, openSorting] = useState(false);
  const activeSortingName = useSelector((state) => state.CITY.activeSortingName);

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
            dispatch(setSorting(sortingName));
            openSorting(false);
          }}
        >
          {sortingName}
        </li>)
      }
    </ul>
  </form>;
};

export default MainSorting;
