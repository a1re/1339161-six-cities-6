import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../custom-prop-types';
import {MIN_REVIEW_LENGTH} from '../../const';

const RoomReviewForm = ({onPost, authorizedUser}) => {
  const [isPostingAllowed, setPostingStatus] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState(``);

  useEffect(() => {
    setPostingStatus(rating >= 1 && rating <= 5 && comment.length >= MIN_REVIEW_LENGTH);
  }, [rating, comment]);

  const handleRatingChange = (evt) => {
    setRating(parseInt(evt.target.value, 10));
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    if (!isPostingAllowed) {
      return;
    }

    const reviewData = {
      rating,
      comment,
      date: new Date().toISOString(),
      user: {
        avatarUrl: authorizedUser.avatarUrl,
        id: authorizedUser.id,
        isPro: authorizedUser.isPro,
        name: authorizedUser.name
      }
    };

    if (onPost(reviewData)) {
      setRating(0);
      setComment(``);
    }
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
      value={comment}/>
    <div className="reviews__button-wrapper">
      <p className="reviews__help">
        To submit review please make sure to set <span className="reviews__star">rating</span>
        and describe your stay with at least <b className="reviews__text-amount">{MIN_REVIEW_LENGTH} characters</b>.
      </p>
      <button className="reviews__submit form__submit button" type="submit" disabled={!isPostingAllowed}>Submit</button>
    </div>
  </form>);
};

RoomReviewForm.propTypes = {
  onPost: PropTypes.func.isRequired,
  authorizedUser: CustomPropTypes.authorizedUser
};

export default RoomReviewForm;
