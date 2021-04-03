import {
  ActionType,
  setCity,
  setSorting,
  hoverOffer,
  setOfferList,
  setCityListByOfferList,
  setActiveOffer,
  setNearbyOfferList,
  setReviewList,
  setFavoritesList,
  setFavoritesStatus,
  updateOffer,
  setAuthorizationStatus,
  setAuthorizationInfo
} from './action';

const testOfferList = [
  {
    name: `Offer 1`,
    city: {
      name: `Paris`,
      location: {latitude: 0, longitude: 0, zoom: 0}
    }
  }, {
    name: `Offer 2`,
    city: {
      name: `Cologne`,
      location: {latitude: 0, longitude: 0, zoom: 0}
    }
  }, {
    name: `Offer 3`,
    city: {
      name: `Moscow`,
      location: {latitude: 0, longitude: 0, zoom: 0}
    }
  }
];

const testReviewList = [
  {
    id: 1,
    comment: `Review 1`,
    user: {
      name: `User 1`
    }
  }, {
    id: 2,
    comment: `Review 2`,
    user: {
      name: `User 2`
    }
  }, {
    id: 3,
    comment: `Review 3`,
    user: {
      name: `User 3`
    }
  }
];

const testUserInfo = {
  name: `Test User`,
  email: `user@test.org`
};

describe(`Action creators work correctly`, () => {
  it(`Action creator for setting the active city returns correct action`, () => {
    const testValue = `Test city name`;

    const expectedAction = {
      type: ActionType.SET_CITY,
      payload: testValue
    };

    expect(setCity(testValue)).toEqual(expectedAction);
  });

  it(`Action creator for setting the active sorting returns correct action`, () => {
    const testValue = `Test sorting type`;

    const expectedAction = {
      type: ActionType.SET_SORTING,
      payload: testValue
    };

    expect(setSorting(testValue)).toEqual(expectedAction);
  });

  it(`Action creator for setting the active hover id returns correct action`, () => {
    const testValue = 1;

    const expectedAction = {
      type: ActionType.HOVER_OFFER,
      payload: testValue
    };

    expect(hoverOffer(testValue)).toEqual(expectedAction);
  });

  it(`Action creator for setting the offer list returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_OFFER_LIST,
      payload: testOfferList
    };

    expect(setOfferList(testOfferList)).toEqual(expectedAction);
  });

  it(`Action creator for setting the city list by offer listreturns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_CITY_LIST_BY_OFFER_LIST,
      payload: [
        {
          name: `Paris`,
          location: {latitude: 0, longitude: 0, zoom: 0}
        }, {
          name: `Cologne`,
          location: {latitude: 0, longitude: 0, zoom: 0}
        }, {
          name: `Brussels`,
          location: {latitude: 0, longitude: 0, zoom: 0}
        }, {
          name: `Amsterdam`,
          location: {latitude: 0, longitude: 0, zoom: 0}
        }, {
          name: `Hamburg`,
          location: {latitude: 0, longitude: 0, zoom: 0}
        }, {
          name: `Dusseldorf`,
          location: {latitude: 0, longitude: 0, zoom: 0}
        },
      ]
    };

    expect(setCityListByOfferList(testOfferList)).toEqual(expectedAction);
  });

  it(`Action creator for setting the active offer returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_OFFER,
      payload: testOfferList[0]
    };

    expect(setActiveOffer(testOfferList[0])).toEqual(expectedAction);
  });

  it(`Action creator for setting the nearby offers returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_NEARBY_OFFER_LIST,
      payload: testOfferList
    };

    expect(setNearbyOfferList(testOfferList)).toEqual(expectedAction);
  });

  it(`Action creator for setting the review list returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_REVIEW_LIST,
      payload: testReviewList
    };

    expect(setReviewList(testReviewList)).toEqual(expectedAction);
  });

  it(`Action creator for setting the favorites list returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_FAVORITES_LIST,
      payload: testOfferList
    };

    expect(setFavoritesList(testOfferList)).toEqual(expectedAction);
  });

  it(`Action creator for setting the favorites status returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_FAVORITES_STATUS,
      payload: true
    };

    expect(setFavoritesStatus(true)).toEqual(expectedAction);
  });

  it(`Action creator for setting the updated offer info returns correct action`, () => {
    const expectedAction = {
      type: ActionType.UPDATE_OFFER,
      payload: testOfferList[0]
    };

    expect(updateOffer(testOfferList[0])).toEqual(expectedAction);
  });

  it(`Action creator for setting the authorization status returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_AUTHORIZATION_STATUS,
      payload: `AUTH`
    };

    expect(setAuthorizationStatus(`AUTH`)).toEqual(expectedAction);
  });

  it(`Action creator for setting the authorization info returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_AUTHORIZATION_INFO,
      payload: testUserInfo
    };

    expect(setAuthorizationInfo(testUserInfo)).toEqual(expectedAction);
  });
});
