import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import RoomBookmarkButton from './room-bookmark-button';
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
        <RoomBookmarkButton
          id={offer.id}
          key={`toggle-bookmark-${offer.id}`}
          wrappingClassName="place-card"
          width={18} height={19}
          isFavorite={offer.isFavorite}
        />
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
  imageWrappingClassName: PropTypes.string.isRequired
};

export default RoomCard;
