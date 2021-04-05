import React from 'react';
import CustomPropTypes from '../../custom-prop-types';
import RoomBookmarkButton from './room-bookmark-button';
import RoomReviewList from './room-review-list';

const RoomInfo = ({offer}) => {
  return <React.Fragment>
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {offer.images.map((image) => (<div className="property__image-wrapper" key={image}>
          <img className="property__image" src={image} alt="Photo studio" />
        </div>))}
      </div>
    </div>
    <div className="property__container container">
      <div className="property__wrapper">
        {offer.isPremium &&
        <div className="property__mark">
          <span>Premium</span>
        </div>
        }
        <div className="property__name-wrapper">
          <h1 className="property__name">{offer.title}</h1>
          <RoomBookmarkButton
            id={offer.id}
            key={`toggle-bookmark-${offer.id}`}
            wrappingClassName="property"
            width={31} height={33}
            isFavorite={offer.isFavorite}
          />
        </div>
        <div className="property__rating rating">
          <div className="property__stars rating__stars">
            <span style={{width: offer.rating * 20 + `%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
          <span className="property__rating-value rating__value">{offer.rating}</span>
        </div>
        <ul className="property__features">
          <li className="property__feature property__feature--entire">{offer.type}</li>
          <li className="property__feature property__feature--bedrooms">{offer.bedrooms} {offer.bedrooms > 1 ? `Bedrooms` : `Bedroom`}</li>
          <li className="property__feature property__feature--adults">Max {offer.maxAdults} {offer.maxAdults > 1 ? `adults` : `adult`}</li>
        </ul>
        <div className="property__price">
          <b className="property__price-value">€{offer.price}</b>
          <span className="property__price-text">&nbsp;night</span>
        </div>
        <div className="property__inside">
          <h2 className="property__inside-title">What&apos;s inside</h2>
          <ul className="property__inside-list">
            {offer.goods.map((good, i) => <li className="property__inside-item" key={`good-${i}`}>{good}</li>)}
          </ul>
        </div>
        <div className="property__host">
          <h2 className="property__host-title">Meet the host</h2>
          <div className="property__host-user user">
            <div className={`property__avatar-wrapper${offer.host.isPro ? ` property__avatar-wrapper--pro` : ``}  user__avatar-wrapper`}>
              <img className="property__avatar user__avatar" src={offer.host.avatarUrl} width={74} height={74} alt="Host avatar" />
            </div>
            <span className="property__user-name">{offer.host.name}</span>
          </div>
          <div className="property__description">
            <p className="property__text">
              {offer.description}
            </p>
          </div>
        </div>
        <RoomReviewList key={`Room${offer.id}-ReviewList`} id={offer.id} />
      </div>
    </div>
  </React.Fragment>;
};

RoomInfo.propTypes = {
  offer: CustomPropTypes.offer.isRequired
};

export default RoomInfo;
