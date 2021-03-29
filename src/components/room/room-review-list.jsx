import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import ReviewItem from './room-review-item';
import RoomReviewForm from './room-review-form';
import {useSelector, useDispatch} from 'react-redux';
import {fetchReviewList} from '../../store/api-actions';
import {AuthorizationStatus} from '../../const';

const RoomReviewList = ({id, renderSpinner}) => {
  const {activeOffer} = useSelector((state) => state.ACTIVE_OFFER);
  const {data: offer, reviewList} = activeOffer;
  const {authorizationStatus} = useSelector((state) => state.USER);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!reviewList || offer.id !== id) {
      dispatch(fetchReviewList(id));
    }
  }, [reviewList]);

  if (!reviewList) {
    return <div style={{textAlign: `center`}}>
      {renderSpinner()}
    </div>;
  }

  return <section className="property__reviews reviews">
    <h2 className="reviews__title">
      {reviewList.length || authorizationStatus === AuthorizationStatus.AUTH ? `Reviews` : ``}
      {reviewList.length ? ` · ` : ``}
      {reviewList.length ? <span className="reviews__amount">{reviewList.length}</span> : ``}
    </h2>
    <ul className="reviews__list">
      {reviewList.map((review) => <ReviewItem key={`review-${review.id}`} review={review} />)}
    </ul>
    {authorizationStatus === AuthorizationStatus.AUTH && <RoomReviewForm id={id}/>}
  </section>;
};

RoomReviewList.propTypes = {
  id: PropTypes.number.isRequired,
  renderSpinner: PropTypes.func.isRequired
};

export default RoomReviewList;
