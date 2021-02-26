import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../custom-prop-types';
import classNames from 'classnames';

const RoomCard = ({offer, imgWidth, imgHeight, infoWrappingClassName, imageWrappingClassName}) => (
  <React.Fragment>
    {offer.isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    }
    <div className={classNames(imageWrappingClassName, `imageWrappingClassName`)}>
      <Link to={`/offer/${offer.id}`}>
        <img className="place-card__image" src={offer.images[0]} width={imgWidth} height={imgHeight} alt={offer.title} />
      </Link>
    </div>
    <div className={classNames(infoWrappingClassName, `place-card__info`)}>
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">€{offer.price}</b>
          <span className="place-card__price-text">/&nbsp;night</span>
        </div>
        <button className={`place-card__bookmark-button button${offer.isFavorite ? ` place-card__bookmark-button--active` : ``}`} type="button">
          <svg className="place-card__bookmark-icon" width={18} height={19}>
            <use xlinkHref="#icon-bookmark" />
          </svg>
          <span className="visually-hidden">{offer.isFavorite ? `In bookmarks` : `To bookmarks`}</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: offer.rating * 20 + `%`}} />
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
      </h2>
      <p className="place-card__type">{offer.type}</p>
    </div>
  </React.Fragment>
);

RoomCard.propTypes = {
  offer: CustomPropTypes.offer.isRequired,
  imgWidth: PropTypes.number.isRequired,
  imgHeight: PropTypes.number.isRequired,
  infoWrappingClassName: PropTypes.string,
  imageWrappingClassName: PropTypes.number.isRequired
};

export default RoomCard;
