import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const cityList = [
  {title: `Paris`, href: `#`},
  {title: `Cologne`, href: `#`},
  {title: `Brussels`, href: `#`},
  {title: `Amsterdam`, href: `#`},
  {title: `Hamburg`, href: `#`},
  {title: `Dusseldorf`, href: `#`}
];

const offerList = [
  {
    id: 1,
    title: `Beautiful &amp; luxurious apartment at great location`,
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

const defaultCity = `Amsterdam`;

const authorizedUser = `Oliver.conner@gmail.com`;

ReactDOM.render(
    <App
      cityList={cityList}
      offerList={offerList}
      defaultCity={defaultCity}
      authorizedUser={authorizedUser}
    />,
    document.querySelector(`#root`)
);
