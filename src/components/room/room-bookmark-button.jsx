import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {updateFavoritesStatus} from '../../store/api-actions';
import {HttpCode, AppRoute} from "../../const";

const RoomBookmarkButton = ({id, wrappingClassName, width, height, isFavorite}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(updateFavoritesStatus(id, !isFavorite))
      .catch(({response}) => {
        if (response.status === HttpCode.UNAUTHORIZED) {
          history.push(AppRoute.LOGIN);
        }
      });
  };

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
