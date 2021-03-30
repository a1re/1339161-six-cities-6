import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Header from '../header/header';
import RoomReviewList from './room-review-list';
import RoomNearbyMap from './room-nearby-map';
import RoomNearbyOfferList from './room-nearby-offer-list';
import RoomBookmarkButton from './room-bookmark-button';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Spinner from '../spinner/spinner';
import {useSelector, useDispatch} from 'react-redux';
import {fetchOffer, fetchNearbyOfferList} from '../../store/api-actions';
import {HttpCode} from '../../const';

const RoomScreen = () => {
  const offer = useSelector((state) => state.ACTIVE_OFFER.offer);
  const nearbyOfferList = useSelector((state) => state.ACTIVE_OFFER.nearbyOfferList);
  const dispatch = useDispatch();
  const params = useParams();
  const id = parseInt(params.id, 10);
  const [isNotFound, setNotFoundStatus] = useState(false);

  useEffect(() => {
    if (!offer || offer.id !== id) {
      dispatch(fetchOffer(id))
        .catch((error) => {
          if (error.response.status === HttpCode.NOT_FOUND) {
            setNotFoundStatus(true);
          }
        });

      dispatch(fetchNearbyOfferList(id));
    }
  }, [offer, nearbyOfferList, id]);

  if (isNotFound) {
    return <NotFoundScreen />;
  }

  if (!offer) {
    return <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container" style={{justifyContent: `center`, alignItems: `center`}}>
          <Spinner />
        </div>
      </main>
    </div>;
  }

  return (<div className="page">
    <Header/>
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
            <RoomReviewList key={`Room${id}-ReviewList`} id={id} />
          </div>
        </div>
        <RoomNearbyMap
          key={`Room${id}-NearbyMap`}
          highlightedOffer={offer}
          nearbyOfferList={nearbyOfferList}
        />
      </section>
      <RoomNearbyOfferList key={`Room${id}-NearbyOfferList`} nearbyOfferList={nearbyOfferList} />
    </main>
  </div>);
};

export default RoomScreen;
