import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const citiesList = [
  {title: `Paris`, href: `#`},
  {title: `Cologne`, href: `#`},
  {title: `Brussels`, href: `#`},
  {title: `Amsterdam`, href: `#`, isActive: true},
  {title: `Hamburg`, href: `#`},
  {title: `Dusseldorf`, href: `#`}
];

const offerList = [
  {
    id: 1,
    title: `Beautiful &amp; luxurious apartment at great location`,
    type: `Apartment`,
    price: 120,
    rating: 4,
    img: `img/apartment-01.jpg`,
    isPremium: true
  },
  {
    id: 2,
    title: `Wood and stone place`,
    type: `Private room`,
    price: 80,
    rating: 4,
    img: `img/room.jpg`,
    isFavorite: true
  },
  {
    id: 3,
    title: `Canal View Prinsengracht`,
    type: `Apartment`,
    price: 132,
    rating: 4,
    img: `img/apartment-02.jpg`,
  },
  {
    id: 4,
    title: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    price: 180,
    rating: 5,
    img: `img/apartment-03.jpg`,
    isPremium: true
  },
  {
    id: 5,
    title: `Wood and stone place`,
    type: `Private room`,
    price: 80,
    rating: 4,
    img: `img/room.jpg`,
    isFavorite: true
  }
];

ReactDOM.render(
    <App
      citiesList={citiesList}
      offerList={offerList}
    />,
    document.querySelector(`#root`)
);
