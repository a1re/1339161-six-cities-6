import React, {useEffect} from 'react';
import Header from '../header/header';
import FooterLogo from '../footer-logo/footer-logo';
import FavoritesEmpty from './favorites-empty';
import FavoritesList from './favorites-list';
import Spinner from '../spinner/spinner';
import {useSelector, useDispatch} from 'react-redux';
import {fetchFavoritesList} from '../../store/api-actions';

const FavoritesScreen = () => {
  const isFavoritesListLoaded = useSelector((state) => state.USER.isFavoritesListLoaded);
  const favoritesList = useSelector((state) => state.USER.favoritesList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoritesList());
  }, [favoritesList]);

  if (!isFavoritesListLoaded) {
    return <div className="pagen">
      <Header/>
      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container" style={{justifyContent: `center`, alignItems: `center`}}>
          <Spinner />
        </div>
      </main>
    </div>;
  }

  return (
    <div className={`page${favoritesList.length ? `` : ` page--favorites-empty`}`}>
      <Header/>
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
