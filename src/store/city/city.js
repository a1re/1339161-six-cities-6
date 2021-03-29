import {createReducer} from '@reduxjs/toolkit';
import {setCity, setCityListByOfferList} from '../action';
import {DEFAULT_CITY} from '../../const';

const initialState = {
  cityList: [],
  activeCityName: DEFAULT_CITY
};

const city = createReducer(initialState, (builder) => {

  builder.addCase(setCity, (state, action) => {
    state.activeCityName = action.payload;
  });

  builder.addCase(setCityListByOfferList, (state, action) => {
    state.cityList = action.payload;
  });

});

export {city};
