import React, { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import 'leaflet/dist/leaflet.css';



function ChangeMap({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }
  
const Map = ({center, zoom}) => {
  return (
        <MapContainer>
            <ChangeMap center={center} zoom={zoom} />
            <TileLayer
                attribution='&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={center}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
  );
};

export default Map;