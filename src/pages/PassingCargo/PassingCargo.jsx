import React, {useEffect} from 'react';
import L from 'leaflet';
import "leaflet-routeboxer";
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

var map, draggMarker, popup, group;
function PassingCargo () {

useEffect(() => {  

    const addMarker = (e) => {
      var markerNum = group.getLayers().length;
      if(markerNum <= 2){
        var newMarker = new L.marker(e.latlng, {draggable: true}).addTo(map).addTo(group);
        var layers = group.getLayers();
        let wayPoints = [];
        layers.map(layer =>{
          wayPoints.push(layer._latlng);
        });

        var route = L.Routing.control({
          show: false,
          addWaypoints: false,// заборона додавати проміжні пункти
          draggableWaypoints: true,
          waypoints: wayPoints,
          lineOptions: {
            styles: [
              {
                color: "blue",
                opacity: 0.6,
                weight: 4
              }
            ]
          },
        }).addTo(map); 
      }
    }
var map = L.map('map').setView([50.3814876755621, 30.59675216674805], 13);
var group = L.layerGroup();
//map.on('click', addMarker);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 13,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
})



  const searchPassingCargo = (e) => {
    console.log(e);   
  }

  L.Control.Button = L.Control.extend({
    options: {
        position: 'topright'
    },
    onAdd: function (map) {
        var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control');
        var button1 = L.DomUtil.create('a', 'leaflet-control-button', container);
        button1.innerHTML = '<button>search</button>';

        L.DomEvent.disableClickPropagation(button1);
        L.DomEvent.on(button1, 'click', function(){
            searchPassingCargo(map);
        });
        return container;
    },
    onRemove: function(map) {},
});

var control = new L.Control.Button()
control.addTo(map);

 

      async function fetchCargoJSON(){
        const response = await axios.get('backend/cargoPoints.json');
        console.log(response);
      }


    return (
      <>
        <div id="map"></div>
      </>
      );
 

}
export default PassingCargo;