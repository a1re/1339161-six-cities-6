const DEFAULT_CITY_ZOOM = 12;

export const City = {
  Paris: {
    location: {
      latitude: 48.858607,
      longitude: 2.337361,
      zoom: DEFAULT_CITY_ZOOM
    },
    name: `Paris`
  },
  Cologne: {
    location: {
      latitude: 50.938057,
      longitude: 6.966325,
      zoom: DEFAULT_CITY_ZOOM
    },
    name: `Cologne`
  },
  Brussels: {
    location: {
      latitude: 50.846663,
      longitude: 4.352585,
      zoom: DEFAULT_CITY_ZOOM
    },
    name: `Brussels`
  },
  Amsterdam: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: DEFAULT_CITY_ZOOM
    },
    name: `Amsterdam`
  },
  Hamburg: {
    location: {
      latitude: 53.543563,
      longitude: 9.985637,
      zoom: DEFAULT_CITY_ZOOM
    },
    name: `Hamburg`
  },
  Dusseldorf: {
    location: {
      latitude: 51.226093,
      longitude: 6.776462,
      zoom: DEFAULT_CITY_ZOOM
    },
    name: `Dusseldorf`
  }
};

export const SORTING_METHODS = [
  {name: `Popular`},
  {name: `Price: low to high`, callback: (offerA, offerB) => offerA.price - offerB.price},
  {name: `Price: high to low`, callback: (offerA, offerB) => offerB.price - offerA.price},
  {name: `Top rated first`, callback: (offerA, offerB) => offerB.rating - offerA.rating}
];

export const DEFAULT_CITY = `Paris`;
export const DEFAULT_SORTING_NAME = `Popular`;
export const MIN_REVIEW_LENGTH = 50;
export const PIN_WIDTH = 30;
export const PIN_HEIGHT = 30;
export const ESC_KEYCODE = 27;
export const SPINNER_COLOR = `#4481C3`;
