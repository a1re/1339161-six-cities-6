import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../custom-prop-types';
import Header from '../header/header';
import RoomReviewList from './room-review-list';
import RoomNearbyMap from './room-nearby-map';
import RoomNearbyOfferList from './room-nearby-offer-list';
import withSpinner from '../../hocs/with-spinner/with-spinner';
import {connect} from 'react-redux';
import {fetchOffer} from '../../store/api-actions';
import {ActionCreator} from '../../store/action';

const RoomNearbyMapWrapped = withSpinner(RoomNearbyMap);
const RoomNearbyOfferListWrapped = withSpinner(RoomNearbyOfferList);
const RoomReviewListWrapped = withSpinner(RoomReviewList);

const RoomScreen = ({offer, renderSpinner, onLoadOffer}) => {
  const params = useParams();
  const id = parseInt(params.id, 10);

  useEffect(() => {
    if (!offer || offer.id !== id) {
      onLoadOffer(id);
    }
  }, [offer, id]);

  if (!offer) {
    return <div className="page page--gray page--main">
      <Header isMain={true}/>
      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container" style={{justifyContent: `center`, alignItems: `center`}}>
          {renderSpinner()}
        </div>
      </main>
    </div>;
  }

  return (<div className="page">
    <Header isMain={false}/>
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
            <RoomReviewListWrapped key={`Room${id}-ReviewList`} id={id} />
          </div>
        </div>
        <RoomNearbyMapWrapped
          key={`Room${id}-NearbyMap`}
          id={id}
          latitude={offer.city.location.latitude}
          longitude={offer.city.location.longitude}
          zoom={offer.city.location.zoom}
        />
      </section>
      <RoomNearbyOfferListWrapped key={`Room${id}-NearbyOfferList`} id={id} />
    </main>
  </div>);
};

RoomScreen.propTypes = {
  offer: CustomPropTypes.offer,
  renderSpinner: PropTypes.func.isRequired,
  onLoadOffer: PropTypes.func.isRequired,
  onResetOffer: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  offer: state.activeOffer.data
});

const mapDispatchToProps = (dispatch) => ({
  onLoadOffer: (id) => dispatch(fetchOffer(id)),
  onResetOffer: () => dispatch(ActionCreator.resetActiveOffer())
});

export {RoomScreen};
export default connect(mapStateToProps, mapDispatchToProps)(RoomScreen);
