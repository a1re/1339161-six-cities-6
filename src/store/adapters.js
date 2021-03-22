import {OfferTypeMap} from '../const';

export const adaptOffer = (offer) => {
  const adaptedOffer = {
    ...offer,
    isFavorite: offer[`is_favorite`],
    isPremium: offer[`is_premium`],
    maxAdults: offer[`max_adults`],
    type: OfferTypeMap.get(offer[`type`]),
    host: {
      ...offer.host,
      avatarUrl: offer.host[`avatar_url`],
      isPro: offer.host[`is_pro`]
    },
    previewImage: offer[`preview_image`]
  };

  delete adaptedOffer[`is_favorite`];
  delete adaptedOffer[`is_premium`];
  delete adaptedOffer[`max_adults`];
  delete adaptedOffer[`preview_image`];
  delete adaptedOffer.host[`avatar_url`];
  delete adaptedOffer.host[`is_pro`];

  return adaptedOffer;
};

export const adaptAuthInfo = (authInfo) => {
  const adaptedAuthInfo = {
    ...authInfo,
    avatarUrl: authInfo[`avatar_url`],
    isPro: authInfo[`is_pro`]
  };

  delete adaptedAuthInfo[`avatar_url`];
  delete adaptedAuthInfo[`is_pro`];

  return adaptedAuthInfo;
};

export const adaptReview = (review) => {
  const adaptedReview = {
    ...review,
    user: {
      avatarUrl: review.user[`avatar_url`],
      id: review.user[`id`],
      isPro: review.user[`is_pro`],
      name: review.user[`name`]
    }
  };

  return adaptedReview;
};
