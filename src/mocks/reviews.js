import {getRandomNumber, getRandomDate, getRandomBoolean} from '../utils';
import getText from './text';

const AVATAR_URL = `https://i.pravatar.cc/128`;

const REVIEWS_MIN = 0;
const REVIEWS_MAX = 10;

const STARTING_ID = 1000;

const RATING_MIN = 1;
const RATING_MAX = 5;

const AUTHOR_ID_MIN = 1;
const AUTHOR_ID_MAX = 100;

const MIN_REVIEW_SIZE = 2;
const MAX_REVIEW_SIZE = 5;

const MIN_REVIEW_DATE = `2020-01-01`;
const MAX_REVIEW_DATE = `2020-12-31`;

const names = [`Angelina`, `Max`, `Trevor`, `Anna`, `Peter`, `John`, `Maria`, `Agatha`];

const reviews = [];
let id = STARTING_ID;

for (let i = 0; i < getRandomNumber(REVIEWS_MIN, REVIEWS_MAX); i++) {
  reviews.push({
    id,
    comment: getText(MIN_REVIEW_SIZE, MAX_REVIEW_SIZE),
    date: getRandomDate(new Date(MIN_REVIEW_DATE), new Date(MAX_REVIEW_DATE)).toISOString(),
    rating: getRandomNumber(RATING_MIN * 10, RATING_MAX * 10) / 10,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: getRandomNumber(AUTHOR_ID_MIN, AUTHOR_ID_MAX),
      isPro: getRandomBoolean(),
      name: names[getRandomNumber(0, names.length - 1)]
    }
  });
  id++;
}

export default reviews;
