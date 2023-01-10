import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import './MapRoute.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// --------------------------https://codesandbox.io/s/react-leaflet-routing-machine-s660b?from-embed=&file=/src/Map.js

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

var map = L.map('map');

var click = () => {
  console.log('red');
}

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.Routing.control({
    waypoints: [
        L.latLng(57.74, 12.94),
        L.latLng(57.6792, 11.949)
    ]
}).addTo(map);

function Map () {
    return (
<MapContainer center={[57.70, 11.945]} zoom={5} scrollWheelZoom={true} onClick={click}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
</MapContainer>
    );
}

export default Map;