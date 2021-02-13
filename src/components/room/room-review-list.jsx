import React from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../custom-prop-types';
import ReviewItem from './room-review-item';

const ReviewList = ({reviews}) => {
  return (<ul className="reviews__list">
    {reviews.map((review) => <ReviewItem key={`review-${review.id}`} review={review} />)}
  </ul>);
};

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(CustomPropTypes.review).isRequired
};

export default ReviewList;
