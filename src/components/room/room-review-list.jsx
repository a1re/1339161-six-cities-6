import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../custom-prop-types';
import ReviewItem from './room-review-item';
import RoomReviewForm from './room-review-form';
import {connect} from 'react-redux';
import {fetchReviewList} from '../../store/api-actions';
import {AuthorizationStatus} from '../../const';

const RoomReviewList = ({id, offer, reviewList, renderSpinner, authorizationStatus, onLoadReviewList}) => {
  useEffect(() => {
    if (!reviewList || offer.id !== id) {
      onLoadReviewList(id);
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
  offer: CustomPropTypes.offer,
  reviewList: PropTypes.arrayOf(CustomPropTypes.review),
  renderSpinner: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  onLoadReviewList: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  offer: state.activeOffer.data,
  reviewList: state.activeOffer.reviewList,
  authorizationStatus: state.authorizationStatus
});

const mapDispatchToProps = (dispatch) => ({
  onLoadReviewList: (id) => dispatch(fetchReviewList(id))
});

export {RoomReviewList};
export default connect(mapStateToProps, mapDispatchToProps)(RoomReviewList);
