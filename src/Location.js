import React, { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import './Location.css';

const Location = () => {
    const [currentLocation, setCurrentLocation] = useState({lat: 52.52437, lng: 13.41053 });
    const [zoom, setZoom] = useState(12);
    
  return (
    <div>
      <h1>Hello from Location</h1>
      <button onClick={() => setZoom(zoom + 1)}>Click</button>
      <MapContainer center={currentLocation} zoom={zoom}>
      <TileLayer
          attribution='&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
    </MapContainer>
    </div>
  );
};

export default Location;