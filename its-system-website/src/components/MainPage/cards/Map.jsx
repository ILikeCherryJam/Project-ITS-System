import React, { useEffect, useRef } from 'react';
import { load } from '@2gis/mapgl';

const Map = () => {
  // Use a ref to access the DOM element where the map will be rendered
  const mapContainerRef = useRef(null); 
  // Use a ref to store the map instance to use in the cleanup function
  const mapInstanceRef = useRef(null); 

  useEffect(() => {
    // Check if the container ref is available
    if (!mapContainerRef.current) return;

    load().then((mapglAPI) => {
      // Initialize the map on the referenced DOM element
      const map = new mapglAPI.Map(mapContainerRef.current, {
        center: [55.31878, 25.23584], // Example coordinates (Dubai)
        zoom: 13,
        key: 'YOUR_API_ACCESS_KEY', // Replace with your actual API key
      });
      mapInstanceRef.current = map; // Store the map instance

    }).catch(error => {
      console.error('Failed to load 2GIS map:', error);
    });

    // Cleanup function to destroy the map instance when the component unmounts
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.destroy();
        mapInstanceRef.current = null;
      }
    };
  }, []); // The empty dependency array ensures this runs only once on mount

  return (
    // The div element must have a specific size for the map to render correctly
    <div 
      ref={mapContainerRef} 
      style={{ width: '100%', height: '500px' }} 
    />
  );
};

export default Map;
