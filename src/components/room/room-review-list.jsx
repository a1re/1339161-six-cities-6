import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import ReviewItem from './room-review-item';
import RoomReviewForm from './room-review-form';
import Spinner from '../spinner/spinner';
import {useSelector, useDispatch} from 'react-redux';
import {fetchReviewList} from '../../store/api-actions';
import {AuthorizationStatus} from '../../const';
import {getSortedReviewListSelector} from '../../store/selectors';

const RoomReviewList = ({id}) => {
  const reviewList = useSelector((state) => getSortedReviewListSelector(state));
  const authorizationStatus = useSelector((state) => state.USER.authorizationStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!reviewList) {
      dispatch(fetchReviewList(id));
    }
  }, [reviewList]);

  if (!reviewList) {
    return <div style={{textAlign: `center`}}>
      <Spinner />
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
  id: PropTypes.number.isRequired
};

export default RoomReviewList;
