import {City, SortingMethod, DEFAULT_CITY, DEFAULT_SORTING} from '../../const';
import {adaptedCityList} from '../../test-data';
import {ActionType} from '../action';
import {city} from './city';

const defaultState = {
  cityList: [],
  activeCityName: DEFAULT_CITY,
  activeSortingName: DEFAULT_SORTING
};

const testCity = City.DUSSELDORF;
const testSortingMethod = SortingMethod.RATING;

describe(`Direct operations in reducer 'city' work correctly`, () => {
  it(`Setting the active city returns correct state`, () => {
    const setCityAction = {
      type: ActionType.SET_CITY,
      payload: testCity
    };

    expect(city(defaultState, setCityAction)).toEqual({
      ...defaultState,
      activeCityName: testCity, activeSortingName: DEFAULT_SORTING
    });
  });

  it(`Setting the active sorting returns correct state`, () => {
    const setSortingAction = {
      type: ActionType.SET_SORTING,
      payload: testSortingMethod
    };

    expect(city(defaultState, setSortingAction)).toEqual({
      ...defaultState,
      activeSortingName: testSortingMethod
    });
  });

  it(`Setting the city list returns correct state`, () => {
    const setCityListAction = {
      type: ActionType.SET_CITY_LIST_BY_OFFER_LIST,
      payload: adaptedCityList
    };

    expect(city(defaultState, setCityListAction)).toEqual({
      ...defaultState,
      cityList: adaptedCityList
    });
  });
});
