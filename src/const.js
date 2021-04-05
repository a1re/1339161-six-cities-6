export const City = {
  PARIS: `Paris`,
  COLOGNE: `Cologne`,
  BRUSSELS: `Brussels`,
  AMSTERDAM: `Amsterdam`,
  HAMBURG: `Hamburg`,
  DUSSELDORF: `Dusseldorf`
};

export const SortingMethod = {
  POPULAR: `Popular`,
  PRICE_ASC: `Price: low to high`,
  PRICE_DESC: `Price: high to low`,
  RATING: `Top rated first`
};

export const DEFAULT_CITY = City.PARIS;
export const DEFAULT_SORTING = SortingMethod.POPULAR;
export const MIN_REVIEW_LENGTH = 50;
export const MAX_REVIEW_LENGTH = 300;
export const MAX_REVIEW_AMOUNT = 10;
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
  REVIEW_LIST: `/comments/:id`,
  FAVORITES_LIST: `/favorite`,
  UPDATE_FAVORITES_STATUS: `/favorite/:id/:status`
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
  BAD_REQUEST: 400,
  NOT_FOUND: 404
};

export const ErrorMessage = {
  SIGN_IN_FAILURE: `Failed to login with this e-mail and password.`,
  NO_CONNECTION: `Server is not available.`
};

export const OfferTypeMap = new Map([
  [`apartment`, `Apartment`],
  [`room`, `Private Room`],
  [`house`, `House`],
  [`hotel`, `Hotel`]
]);
