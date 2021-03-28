import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {SORTING_METHODS, ESC_KEYCODE} from '../../const';
import {connect} from 'react-redux';
import {selectSorting} from '../../store/action';

const MainSorting = ({activeSortingName, onSelectSorting}) => {
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
      {SORTING_METHODS.map((sorting) =>
        <li
          key={sorting.name}
          className={classNames(`places__option`, activeSortingName === sorting.name && `places__option--active`)}
          tabIndex={0}
          onClick={() => {
            onSelectSorting(sorting);
            openSorting(false);
          }}
        >
          {sorting.name}
        </li>)
      }
    </ul>
  </form>;
};

MainSorting.propTypes = {
  activeSortingName: PropTypes.string.isRequired,
  onSelectSorting: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  activeSortingName: state.activeCityOfferList.sortingName
});

const mapDispatchToProps = (dispatch) => ({
  onSelectSorting: (sorting) => dispatch(selectSorting(sorting))
});

export {MainSorting};
export default connect(mapStateToProps, mapDispatchToProps)(MainSorting);
