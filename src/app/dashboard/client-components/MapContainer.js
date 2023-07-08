'use client';
// Client-side component!
// This can POTENTIALLY be a server-side component if I get clever with the coordinates.
import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import QuakeTable from '../server-components/QuakeTable';
import useUSGS from '@/app/hooks/useUSGS';

// DEV TOKEN
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAP;

export default function MapContainer() {
  const { quakes, isLoading, isError } = useUSGS();

  console.log(isLoading);

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom,
    });
  });

  const updateMap = (lng, lat) => {
    console.log('The map should update');
    console.log(lng, lat);
    setLng(lng);
    setLat(lat);
    if (!map.current) return; // wait for map to initialize
    map.current.flyTo({
      center: [lng, lat],
    });
  };

  return (
    <>
      <div>
        <div ref={mapContainer} className='map-container' />
        {!isLoading && (
          <QuakeTable qdata={quakes.features} updateMap={updateMap} />
        )}
      </div>
    </>
  );
}
