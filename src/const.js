export const City = {
  Paris: `Paris`,
  Cologne: `Cologne`,
  Brussels: `Brussels`,
  Amsterdam: `Amsterdam`,
  Hamburg: `Hamburg`,
  Dusseldorf: `Dusseldorf`
};

export const SORTING_METHODS = [
  {name: `Popular`},
  {name: `Price: low to high`, callback: (offerA, offerB) => offerA.price - offerB.price},
  {name: `Price: high to low`, callback: (offerA, offerB) => offerB.price - offerA.price},
  {name: `Top rated first`, callback: (offerA, offerB) => offerB.rating - offerA.rating}
];

export const DEFAULT_CITY = City.Paris;
export const DEFAULT_SORTING_NAME = `Popular`;
export const MIN_REVIEW_LENGTH = 50;
export const MAX_REVIEW_LENGTH = 300;
export const PIN_WIDTH = 30;
export const PIN_HEIGHT = 30;
export const ESC_KEYCODE = 27;
export const SPINNER_COLOR = `#4481C3`;

export const BACKEND_URL = `https://6.react.pages.academy/six-cities`;
export const REQUEST_TIMEOUT = 5000;

export const APIRoute = {
  OFFER_LIST: `/hotels`,
  LOGIN: `/login`,
  OFFER: `/hotels/:id`,
  NEARBY_OFFER_LIST: `/hotels/:id/nearby`,
  REVIEW_LIST: `/comments/:id`
};

export const AppRoute = {
  ROOT: `/`,
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  ROOM: `/offer/:id`
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`
};

export const HttpCode = {
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400
};
