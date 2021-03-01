import {getRandomNumber, randomSort, getRandomBoolean} from '../utils';
import getText from './text';
import {City} from '../const';

const AVATAR_URL = `https://i.pravatar.cc/128`;

const OFFERS_PER_CITY_MIN = 0;
const OFFERS_PER_CITY_MAX = 10;

const DEFAULT_OFFER_ZOOM = 8;

const BEDROOMS_MIN = 1;
const BEDROOMS_MAX = 3;

const PRICE_MIN = 50;
const PRICE_MAX = 500;

const RATING_MIN = 1;
const RATING_MAX = 5;

const HOST_ID_MIN = 1;
const HOST_ID_MAX = 100;

const ADULTS_MIN = 1;
const ADULTS_MAX = 5;

const STARTING_ID = 100;

const POINT_DIFFUSION = 25;

const titles = [
  `Gold Alley Property`, `A old cargo ship from 1897`, `Canal View Prinsengracht`,
  `Amazing Private Canal Place`, `Lovely bright apartment near Vondelpark`,
  `Room in a charming canal house`, `Chess Suite`, `Klassiek Appartement met Balkon`,
  `Private & Cosy Studio`, `Wood and stone place`, `Beautiful & luxurious studio at great location`
];

const goods = [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cable TV`];

const names = [`Angelina`, `Max`, `Trevor`, `Anna`, `Peter`, `John`, `Maria`, `Agatha`];

const photos = [
  `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/room.jpg`
];

const previews = [
  `img/apartment-small-03.jpg`, `img/apartment-small-04.jpg`, `img/room-small.jpg`
];

const types = [`apartment`, `room`, `house`, `hotel`];

const offers = [];

let id = STARTING_ID;

Object.entries(City).forEach(([, city]) => {
  for (let i = 0; i < getRandomNumber(OFFERS_PER_CITY_MIN, OFFERS_PER_CITY_MAX); i++) {
    offers.push({
      id,
      bedrooms: getRandomNumber(BEDROOMS_MIN, BEDROOMS_MAX),
      city,
      description: getText(),
      goods: randomSort(goods).slice(0, getRandomNumber(1, goods.length - 1)),
      host: {
        avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
        id: getRandomNumber(HOST_ID_MIN, HOST_ID_MAX),
        isPro: getRandomBoolean(),
        name: names[getRandomNumber(0, names.length - 1)]
      },
      images: randomSort(photos),
      isFavorite: getRandomBoolean(),
      isPremium: getRandomBoolean(),
      location: {
        latitude: city.location.latitude + (Math.random() - 0.5) / POINT_DIFFUSION,
        longitude: city.location.longitude + (Math.random() - 0.5) / POINT_DIFFUSION,
        zoom: DEFAULT_OFFER_ZOOM
      },
      maxAdults: getRandomNumber(ADULTS_MIN, ADULTS_MAX),
      previewImage: previews[getRandomNumber(0, previews.length - 1)],
      price: getRandomNumber(PRICE_MIN, PRICE_MAX),
      rating: getRandomNumber(RATING_MIN * 10, RATING_MAX * 10) / 10,
      title: titles[getRandomNumber(0, titles.length - 1)],
      type: types[getRandomNumber(0, types.length - 1)]
    });

    id++;
  }
});

export default offers;
