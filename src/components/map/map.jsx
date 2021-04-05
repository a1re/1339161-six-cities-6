import React, {useEffect, useState, useRef} from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../custom-prop-types';
import leaflet from 'leaflet';
import classNames from 'classnames';
import {Pin} from '../../const';
import {useSelector} from 'react-redux';

import "leaflet/dist/leaflet.css";

const Map = ({latitude, longitude, zoom, markers, className}) => {
  const mapRef = useRef();
  const [placedMarkers, setPlacedMarkers] = useState({});
  const {hoverOfferId} = useSelector((state) => state.OFFER_LIST);

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: latitude,
        lng: longitude
      },
      zoom,
      zoomControl: false,
      marker: true
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    markers.map((marker) => {
      const customIcon = leaflet.icon({
        iconUrl: `img/pin.svg`,
        iconSize: [Pin.WIDTH, Pin.HEIGHT]
      });

      placedMarkers[marker.id] = leaflet.marker({
        lat: marker.location.latitude,
        lng: marker.location.longitude
      },
      {
        icon: customIcon
      })
      .addTo(mapRef.current);
    });

    setPlacedMarkers(placedMarkers);

    return () => {
      mapRef.current.remove();
    };
  }, []);

  useEffect(() => {
    Object.entries(placedMarkers).forEach(([markerId, marker]) => {
      marker.setIcon(leaflet.icon({
        iconUrl: parseInt(markerId, 10) === hoverOfferId ? `img/pin-active.svg` : `img/pin.svg`,
        iconSize: [Pin.WIDTH, Pin.HEIGHT]
      }));
    });
  }, [hoverOfferId]);

  return <div id="map" className={classNames(className, `map`)}></div>;
};

Map.propTypes = {
  longitude: PropTypes.number.isRequired,
  latitude: PropTypes.number.isRequired,
  zoom: PropTypes.number.isRequired,
  markers: PropTypes.arrayOf(CustomPropTypes.offer).isRequired,
  className: PropTypes.string.isRequired
};

export default Map;
