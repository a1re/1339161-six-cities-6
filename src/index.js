import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {CITIES, DEFATULT_CITY_INDEX} from './const';

const offers = [
  {
    id: 1,
    title: `Beautiful & luxurious apartment at great location`,
    city: `Amsterdam`,
    type: `Apartment`,
    price: 120,
    rating: 4,
    img: `img/apartment-01.jpg`,
    imgSmall: `img/apartment-small-01.jpg`,
    isPremium: true
  },
  {
    id: 2,
    title: `Wood and stone place`,
    city: `Amsterdam`,
    type: `Private room`,
    price: 80,
    rating: 4,
    img: `img/room.jpg`,
    imgSmall: `img/room-small.jpg`,
    isFavorite: true
  },
  {
    id: 3,
    title: `Canal View Prinsengracht`,
    city: `Amsterdam`,
    type: `Apartment`,
    price: 132,
    rating: 4,
    img: `img/apartment-02.jpg`,
    imgSmall: `img/apartment-small-02.jpg`,
  },
  {
    id: 4,
    title: `Nice, cozy, warm big bed apartment`,
    city: `Amsterdam`,
    type: `Apartment`,
    price: 180,
    rating: 5,
    img: `img/apartment-03.jpg`,
    imgSmall: `img/apartment-small-03.jpg`,
    isPremium: true
  },
  {
    id: 5,
    title: `Wood and stone place`,
    city: `Amsterdam`,
    type: `Private room`,
    price: 80,
    rating: 4,
    img: `img/room.jpg`,
    imgSmall: `img/room-small.jpg`,
    isFavorite: true
  },
  {
    id: 6,
    title: `White castle`,
    city: `Cologne`,
    type: `Apartment`,
    price: 180,
    rating: 5,
    img: `img/apartment-02.jpg`,
    imgSmall: `img/apartment-small-04.jpg`,
    isFavorite: true
  }
];

const authorizedUser = `Oliver.conner@gmail.com`;

ReactDOM.render(
    <App
      cities={CITIES}
      offers={offers}
      defaultCity={CITIES[DEFATULT_CITY_INDEX]}
      authorizedUser={authorizedUser}
    />,
    document.querySelector(`#root`)
);
