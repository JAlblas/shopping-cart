import React, { useState } from 'react';
import Map from './Map';
import Navigation from './Navigation'

import './Location.css';

const Location = () => {
    const [center, setCenter] = useState({lat: 52.52437, lng: 13.41053 });
    const [zoom, setZoom] = useState(12);

  return (
      <div>
          <Navigation />
          <button onClick={() => setZoom(zoom + 1)}>Zoom in map!</button>
          <button onClick={() => setZoom(zoom + -1)}>Zoom out map!</button>
          <Map center={center} zoom={zoom}></Map>
      </div>
      
  );
};

export default Location;