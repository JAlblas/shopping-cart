import React, { useState } from 'react';
import Map from './Map';
import Navigation from './Navigation'
import Footer from './Footer'

import './Location.css';

const Location = () => {
    const [center, setCenter] = useState({lat: 52.52437, lng: 13.41053 });
    const [zoom, setZoom] = useState(12);

  return (
      <div>
          <Navigation />
          <div id="content">
            <h1>You can find us at the following locations:</h1>
            <button onClick={() => setZoom(zoom + 1)}>Zoom in map!</button>
            <button onClick={() => setZoom(zoom + -1)}>Zoom out map!</button>
            <Map center={center} zoom={zoom}></Map>
          </div>
          <Footer />
      </div>
      
  );
};

export default Location;