/* eslint-disable no-unused-vars */
import * as React from 'react';
import { useEffect } from 'react';
import mapboxgl, { Marker } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export default function MapBox() {
  const mapNode = React.useRef(null);

  useEffect(() => {
    const node = mapNode.current;
    if (typeof window === 'undefined' || node === null) return;

    const map = new mapboxgl.Map({
      container: 'map',
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-71.621762, -33.048903],
      zoom: 14,
    });
    const marker = new Marker({
      color: '#007fff',
      draggable: true,
    })
      .setLngLat([-71.621762, -33.048903])
      .addTo(map);
  });

  return (
    <>
      <div ref={mapNode} type="geojson" className="_container-map" id="map">
        <div id="marker" />
      </div>
      <style jsx>{`
        ._container-map {
          width: 100%;
          height: 100%;
        }
        .marker {
          display: block;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          padding: 0;
        }
      `}</style>
    </>
  );
}
