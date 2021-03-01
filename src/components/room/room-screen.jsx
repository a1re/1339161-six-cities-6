import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../custom-prop-types';
import Header from '../header/header';
import RoomReviewForm from './room-review-form';
import RoomReviewList from './room-review-list';
import RoomNearOffer from './room-near-offer';
import Map from '../map/map';

const RoomScreen = (props) => {
  const {minReviewLength, authorizedUser, offers} = props;
  const params = useParams();
  const offer = offers.find((offerItem) => offerItem.id === parseInt(params.id, 10));
  const nearbyOffers = offers.filter((offerItem) => offerItem.city.name === offer.city.name).slice(0, 3);
  const [reviews, setReviews] = useState(props.reviews);

  return (<div className="page">
    <Header isMain={false} authorizedUser={authorizedUser} />
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {offer.images.map((image, i) => (<div className="property__image-wrapper" key={`image-${i}`}>
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
              <button className={`property__bookmark-button button${offer.isFavorite ? ` property__bookmark-button--active` : ``}`} type="button">
                <svg className="property__bookmark-icon" width={31} height={33}>
                  <use xlinkHref="#icon-bookmark" />
                </svg>
                <span className="visually-hidden">{offer.isFavorite ? `In bookmarks` : `To bookmarks`}</span>
              </button>
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
            <section className="property__reviews reviews">
              <h2 className="reviews__title">
                Reviews
                {reviews.length ? ` · ` : ``}
                {reviews.length ? <span className="reviews__amount">{reviews.length}</span> : ``}
              </h2>
              {reviews.length ? <RoomReviewList reviews={reviews} /> : ``}
              {authorizedUser ? <RoomReviewForm
                authorizedUser={authorizedUser}
                minReviewLength={minReviewLength}
                onPost={(formData) => {
                  const userReview = {...formData, id: reviews.length ? reviews[reviews.length - 1].id + 1 : 1};
                  setReviews([...reviews, userReview]);
                  return true;
                }} /> : ``}
            </section>
          </div>
        </div>
        <Map city={offer.city} points={nearbyOffers} className="property__map"/>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            {nearbyOffers.map((offerItem) => <RoomNearOffer key={`offer-card-${offerItem.id}`} offer={offerItem} />)}
          </div>
        </section>
      </div>
    </main>
  </div>);
};

RoomScreen.propTypes = {
  offers: PropTypes.arrayOf(CustomPropTypes.offer).isRequired,
  reviews: PropTypes.arrayOf(CustomPropTypes.review).isRequired,
  minReviewLength: PropTypes.number.isRequired,
  authorizedUser: CustomPropTypes.authorizedUser
};

export default RoomScreen;
