import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {useDispatch} from 'react-redux';
import {updateFavoritesStatus} from '../../store/api-actions';

const RoomBookmarkButton = ({id, wrappingClassName, width, height, isFavorite}) => {
  const handleClick = () => {
    dispatch(updateFavoritesStatus(id, !isFavorite));
  };

  const dispatch = useDispatch();

  return <button className={classNames(
      `${wrappingClassName}__bookmark-button`,
      `button`,
      isFavorite && `${wrappingClassName}__bookmark-button--active`
  )} type="button" onClick={handleClick}>
    <svg className={`${wrappingClassName}__bookmark-icon`} width={width} height={height}>
      <use xlinkHref="#icon-bookmark" />
    </svg>
    <span className="visually-hidden">{isFavorite ? `In bookmarks` : `To bookmarks`}</span>
  </button>;
};

RoomBookmarkButton.propTypes = {
  id: PropTypes.number.isRequired,
  wrappingClassName: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired
};

export default RoomBookmarkButton;
