import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Header from '../header/header';
import RoomNearbyMap from './room-nearby-map';
import RoomNearbyOfferList from './room-nearby-offer-list';
import RoomInfo from './room-info';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import SpinnerScreen from '../spinner/spinner-screen';
import {useSelector, useDispatch} from 'react-redux';
import {fetchOffer, fetchNearbyOfferList} from '../../store/api-actions';
import {HttpCode} from '../../const';

const RoomScreen = () => {
  const offer = useSelector((state) => state.ACTIVE_OFFER.offer);
  const params = useParams();
  const id = parseInt(params.id, 10);
  const dispatch = useDispatch();
  const [isNotFound, setNotFoundStatus] = useState(false);

  useEffect(() => {
    dispatch(fetchOffer(id))
      .catch((error) => {
        if (error.response.status === HttpCode.NOT_FOUND) {
          setNotFoundStatus(true);
        }
      });

    dispatch(fetchNearbyOfferList(id));
  }, [id]);

  if (isNotFound) {
    return <NotFoundScreen />;
  }

  if (!offer || id !== offer.id) {
    return <SpinnerScreen />;
  }

  return (<div className="page">
    <Header/>
    <main className="page__main page__main--property">
      <section className="property">
        <RoomInfo key={`Room${id}-Info`} offer={offer} />
        <RoomNearbyMap
          key={`Room${id}-NearbyMap`}
        />
      </section>
      {<RoomNearbyOfferList key={`Room${id}-NearbyOfferList`} />}
    </main>
  </div>);
};

export default RoomScreen;
