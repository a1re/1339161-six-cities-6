import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setCity} from '../../store/action';

const MainTabs = () => {
  const activeCityName = useSelector((state) => state.CITY.activeCityName);
  const cityList = useSelector((state) => state.CITY.cityList);

  const dispatch = useDispatch();

  return <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cityList.map(({name}) => <li className="locations__item" key={`city-${name}`}>
          <a
            className={`locations__item-link tabs__item${name === activeCityName ? ` tabs__item--active` : ``}`}
            onClick={(evt) => {
              evt.preventDefault();
              dispatch(setCity(name));
            }}
          >
            <span>{name}</span>
          </a>
        </li>
        )}
      </ul>
    </section>
  </div>;
};

export default MainTabs;
