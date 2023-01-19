import React, {useEffect} from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


  var map;

function CreateJSON () {


 var group = L.layerGroup();


  useEffect(() => {

  const addMarker = (e) => {
    console.log(e);
    var newMarker = new L.marker(e.latlng, {draggable: false}).addTo(map).addTo(group);
  }

    var map = new L.map('map').setView([50.3814876755621, 30.59675216674805], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 13,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    map.on('click', addMarker);


    L.Control.Button = L.Control.extend({
      options: {
          position: 'topright'
      },
      onAdd: function (map) {
          var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control');
          var button1 = L.DomUtil.create('a', 'leaflet-control-button', container);
          button1.innerHTML = '<button>create</button>';
  
          L.DomEvent.disableClickPropagation(button1);
          L.DomEvent.on(button1, 'click', function(){
              var pointsJson = [];
              var markers = group.getLayers();
              var point;
              markers.map(marker =>{
                point = {
                  "id": marker._leaflet_id,
                  "latlng": marker._latlng,
                  "description": "Вантаж #"+marker._leaflet_id,
                  "weght" : Math.floor(Math.random() * 20)
                };
                pointsJson.push(point);
              });
              console.log(pointsJson);
          });
          return container;
      },
      onRemove: function(map) {},
  });

  var control = new L.Control.Button()
control.addTo(map);



  });


    return (
      <>
        <div id="map"></div>
      </>
      );


}
export default CreateJSON;