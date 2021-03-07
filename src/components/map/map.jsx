import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../custom-prop-types';
import leaflet from 'leaflet';
import classNames from 'classnames';
import {PIN_WIDTH, PIN_HEIGHT} from '../../const';
import {connect} from 'react-redux';

import "leaflet/dist/leaflet.css";

const Map = ({latitude, longitude, zoom, markers, className, activeOfferId}) => {
  const mapRef = useRef();

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

    markers.forEach((marker) => {
      const customIcon = leaflet.icon({
        iconUrl: marker.id === activeOfferId ? `img/pin-active.svg` : `img/pin.svg`,
        iconSize: [PIN_WIDTH, PIN_HEIGHT]
      });

      leaflet.marker({
        lat: marker.location.latitude,
        lng: marker.location.longitude
      },
      {
        icon: customIcon
      })
      .addTo(mapRef.current);
    });

    return () => {
      mapRef.current.remove();
    };
  }, [activeOfferId]);

  return <div id="map" className={classNames(className, `map`)}></div>;
};

Map.propTypes = {
  longitude: PropTypes.number.isRequired,
  latitude: PropTypes.number.isRequired,
  zoom: PropTypes.number.isRequired,
  markers: PropTypes.arrayOf(CustomPropTypes.offer).isRequired,
  className: PropTypes.string.isRequired,
  activeOfferId: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  activeOfferId: state.activeOfferId
});

export {Map};
export default connect(mapStateToProps, null)(Map);
