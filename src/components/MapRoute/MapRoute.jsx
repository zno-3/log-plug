import React, {useEffect} from 'react';
import './MapRoute.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import "leaflet-routeboxer";
// --------------------------https://codesandbox.io/s/react-leaflet-routing-machine-s660b?from-embed=&file=/src/Map.js

function MapRoute (props) {

  useEffect(() => {
    
    var map = L.map('map');
    var test = L.Routing.control({
      show: false,
      addWaypoints: false,// заборона додавати проміжні пункти
      draggableWaypoints: false,
      waypoints: [
        L.latLng(props.coordinates[0], props.coordinates[1]),
        L.latLng(props.coordinates[2], props.coordinates[3])
      ],
      lineOptions: {
        styles: [
          {
            color: "red",
            opacity: 0.6,
            weight: 5
          }
        ]
      },
    }).addTo(map);
    
    
    

test.on('routeselected', function(e) {
  
    var route = L.polyline(e.route.coordinates);
    // Do something with the route here
    var distance = 3; // Distance in km
    var boxes = L.RouteBoxer.box(route, distance);

console.log(boxes); // OSRM polyline decoding);

for (var i = 0; i < boxes.length; i++) {
  L.rectangle(boxes[i], {color: "#ff7800", weight: 1}).addTo(map);

}

});

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 13,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);


  });
  return (
    <div id='map'></div>
  );
}
export default MapRoute;