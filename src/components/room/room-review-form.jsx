import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {MIN_REVIEW_LENGTH, MAX_REVIEW_LENGTH} from '../../const';
import {connect} from 'react-redux';
import {postReview} from '../../store/api-actions';
import {AuthorizationStatus} from '../../const';

const RoomReviewForm = ({id, onPostReview, authorizationStatus}) => {
  if (authorizationStatus !== AuthorizationStatus.AUTH) {
    return null;
  }

  const [isPostingAllowed, setPostingStatus] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState(``);
  const [isError, setErrorStatus] = useState(false);

  useEffect(() => {
    const postingStatus = rating >= 1 && rating <= 5
      && comment.length >= MIN_REVIEW_LENGTH
      && comment.length <= MAX_REVIEW_LENGTH;

    setPostingStatus(postingStatus);
  }, [rating, comment]);

  const handleRatingChange = (evt) => {
    setRating(parseInt(evt.target.value, 10));
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    if (!isPostingAllowed) {
      return;
    }

    setPostingStatus(false);

    onPostReview({id, comment, rating})
      .then(() => {
        setRating(0);
        setComment(``);
        setErrorStatus(false);
      })
      .catch(() => setErrorStatus(true))
      .finally(() => setPostingStatus(true));
  };

  return (<form className="reviews__form form" action="#" method="post" onSubmit={handleFormSubmit}>
    <label className="reviews__label form__label" htmlFor="review">Your review</label>
    <div className="reviews__rating-form form__rating">
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={5}
        id="5-stars"
        type="radio"
        checked={rating === 5}
        onChange={handleRatingChange}/>
      <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={4}
        id="4-stars"
        type="radio"
        checked={rating === 4}
        onChange={handleRatingChange}/>
      <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={3}
        id="3-stars"
        type="radio"
        checked={rating === 3}
        onChange={handleRatingChange}/>
      <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={2}
        id="2-stars"
        type="radio"
        checked={rating === 2}
        onChange={handleRatingChange}/>
      <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={1}
        id="1-star"
        type="radio"
        checked={rating === 1}
        onChange={handleRatingChange}/>
      <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </div>
    <textarea
      className="reviews__textarea form__textarea"
      id="review"
      name="review"
      placeholder="Tell how was your stay, what you like and what can be improved"
      onChange={(evt) => setComment(evt.target.value)}
      maxLength={MAX_REVIEW_LENGTH}
      value={comment}/>
    <div className="reviews__button-wrapper">
      <p className="reviews__help">
        {isError && <span style={{color: `red`}}>Error occured while posting your review. Please try again later<br /><br /></span>}
        To submit review please make sure to set <span className="reviews__star">rating</span>
        and describe your stay with at least <b className="reviews__text-amount">{MIN_REVIEW_LENGTH} characters</b>.
      </p>
      <button className="reviews__submit form__submit button" type="submit" disabled={!isPostingAllowed}>Submit</button>
    </div>
  </form>);
};

RoomReviewForm.propTypes = {
  id: PropTypes.number.isRequired,
  onPostReview: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus
});

const mapDispatchToProps = (dispatch) => ({
  onPostReview: ({id, comment, rating}) => dispatch(postReview({id, comment, rating}))
});

export {RoomReviewForm};
export default connect(mapStateToProps, mapDispatchToProps)(RoomReviewForm);
