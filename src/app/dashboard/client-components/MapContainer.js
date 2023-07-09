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
  const [lng, setLng] = useState(-98.55);
  const [lat, setLat] = useState(39.81);
  const [zoomSetting, setZoomSetting] = useState(5);
  const [cMarker, setcMarker] = useState(null);
  let isAtStart = true;

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/sablr/cljuoyyko006x01occbim6b2i',
      center: [lng, lat],
      zoom: zoomSetting,
    });

    const nav = new mapboxgl.NavigationControl({
      visualizePitch: true,
    });
    map.current.addControl(nav, 'bottom-left');
  });

  // For the sake of sanity, do something to clear this out or make it shorter.
  const updateMap = (newLng, newLat) => {
    const start = {
      center: [lng, lat],
      zoom: 1,
      pitch: 0,
      bearing: 0,
    };
    const end = {
      center: [newLng, newLat],
      zoom: 7,
      bearing: 0,
      pitch: 50,
    };

    const target = isAtStart ? end : start;
    isAtStart = !isAtStart;

    if (cMarker) {
      cMarker.remove();
    }

    if (!map.current) return; // wait for map to initialize

    const marker = new mapboxgl.Marker({
      color: '#FFFFFF',
      draggable: false,
    })
      .setLngLat([newLng, newLat])
      .addTo(map.current);

    map.current.flyTo({
      ...target,
      duration: 4000,
      center: [newLng, newLat],
    });

    setcMarker(marker);
    setLng(lng);
    setLat(lat);
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
