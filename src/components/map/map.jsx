import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../custom-prop-types';
import leaflet from 'leaflet';
import classNames from 'classnames';
import {PIN_WIDTH, PIN_HEIGHT} from '../../const';

import "leaflet/dist/leaflet.css";

const Map = ({city, points, className}) => {
  const mapRef = useRef();

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: city.location.latitude,
        lng: city.location.longitude
      },
      zoom: city.location.zoom,
      zoomControl: false,
      marker: true
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    points.forEach((point) => {
      const customIcon = leaflet.icon({
        iconUrl: `img/pin.svg`,
        iconSize: [PIN_WIDTH, PIN_HEIGHT]
      });

      leaflet.marker({
        lat: point.location.latitude,
        lng: point.location.longitude
      },
      {
        icon: customIcon
      })
      .addTo(mapRef.current);
    });

    return () => {
      mapRef.current.remove();
    };
  }, []);

  return <div id="map" className={classNames(className, `map`)}></div>;
};

Map.propTypes = {
  city: CustomPropTypes.city.isRequired,
  points: PropTypes.arrayOf(CustomPropTypes.offer).isRequired,
  className: PropTypes.string.isRequired
};

export default Map;
