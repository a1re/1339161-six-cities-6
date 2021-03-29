import React from 'react';
import Header from '../header/header';
import FooterLogo from '../footer-logo/footer-logo';
import FavoritesEmpty from './favorites-empty';
import FavoritesList from './favorites-list';
import {useSelector} from 'react-redux';

const FavoritesScreen = () => {
  const {offerList} = useSelector((state) => state.OFFER_LIST);
  const favoritesList = offerList.filter((offer) => offer.isFavorite === true);

  return (
    <div className={`page${favoritesList.length ? `` : ` page--favorites-empty`}`}>
      <Header isMain={false}/>
      <main className={`page__main page__main--favorites${favoritesList.length ? `` : ` page__main--favorites-empty`}`}>
        <div className="page__favorites-container container">
          {
            favoritesList.length
              ? <FavoritesList favoritesList={favoritesList} />
              : <FavoritesEmpty />
          }
        </div>
      </main>
      <FooterLogo />
    </div>
  );
};

export default FavoritesScreen;
