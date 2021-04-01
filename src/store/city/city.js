import {createReducer} from '@reduxjs/toolkit';
import {setCity, setCityListByOfferList, setSorting} from '../action';
import {DEFAULT_CITY, DEFAULT_SORTING} from '../../const';

const initialState = {
  cityList: [],
  activeCityName: DEFAULT_CITY,
  activeSortingName: DEFAULT_SORTING
};

const city = createReducer(initialState, (builder) => {

  builder.addCase(setCity, (state, action) => {
    state.activeCityName = action.payload;
    state.activeSortingName = DEFAULT_SORTING;
  });

  builder.addCase(setCityListByOfferList, (state, action) => {
    state.cityList = action.payload;
  });

  builder.addCase(setSorting, (state, action) => {
    state.activeSortingName = action.payload;
  });

});

export {city};
