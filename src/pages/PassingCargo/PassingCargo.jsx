import React, {useEffect} from 'react';
import L from 'leaflet';
import "leaflet-routeboxer";
import 'leaflet/dist/leaflet.css';
import './PassingCargo.css';
import { Button } from 'react-bootstrap';

const data = 
[
  {
      "id": 170,
      "latlng": {
          "lat": 50.44876015027149,
          "lng": 30.473327636718754
      },
      "description": "Вантаж #170",
      "weght": 10
  },
  {
      "id": 173,
      "latlng": {
          "lat": 50.51517303835635,
          "lng": 30.81527709960938
      },
      "description": "Вантаж #173",
      "weght": 14
  },
  {
      "id": 299,
      "latlng": {
          "lat": 51.05736531652844,
          "lng": 31.880950927734375
      },
      "description": "Вантаж #299",
      "weght": 15
  },
  {
      "id": 341,
      "latlng": {
          "lat": 51.42147659056747,
          "lng": 31.59255981445313
      },
      "description": "Вантаж #341",
      "weght": 16
  },
  {
      "id": 343,
      "latlng": {
          "lat": 51.50532341149335,
          "lng": 31.26022338867188
      },
      "description": "Вантаж #343",
      "weght": 19
  },
  {
      "id": 481,
      "latlng": {
          "lat": 50.91169247570917,
          "lng": 34.78340148925782
      },
      "description": "Вантаж #481",
      "weght": 15
  },
  {
      "id": 619,
      "latlng": {
          "lat": 49.9759551873433,
          "lng": 36.12304687500001
      },
      "description": "Вантаж #619",
      "weght": 13
  },
  {
      "id": 621,
      "latlng": {
          "lat": 50.07300647938297,
          "lng": 36.34002685546876
      },
      "description": "Вантаж #621",
      "weght": 18
  },
  {
      "id": 623,
      "latlng": {
          "lat": 49.89374972006238,
          "lng": 36.28509521484376
      },
      "description": "Вантаж #623",
      "weght": 18
  },
  {
      "id": 677,
      "latlng": {
          "lat": 49.58934857766429,
          "lng": 34.53002929687501
      },
      "description": "Вантаж #677",
      "weght": 10
  },
  {
      "id": 771,
      "latlng": {
          "lat": 47.88872266659918,
          "lng": 33.33526611328126
      },
      "description": "Вантаж #771",
      "weght": 6
  },
  {
      "id": 891,
      "latlng": {
          "lat": 49.23149891808389,
          "lng": 28.490295410156254
      },
      "description": "Вантаж #891",
      "weght": 7
  },
  {
      "id": 937,
      "latlng": {
          "lat": 49.41812070066643,
          "lng": 26.993408203125004
      },
      "description": "Вантаж #937",
      "weght": 3
  },
  {
      "id": 939,
      "latlng": {
          "lat": 49.40024999665212,
          "lng": 27.081298828125004
      },
      "description": "Вантаж #939",
      "weght": 9
  },
  {
      "id": 1003,
      "latlng": {
          "lat": 48.67736049788919,
          "lng": 26.586914062500004
      },
      "description": "Вантаж #1003",
      "weght": 2
  },
  {
      "id": 1079,
      "latlng": {
          "lat": 48.926108577622024,
          "lng": 24.730224609375004
      },
      "description": "Вантаж #1079",
      "weght": 1
  },
  {
      "id": 1081,
      "latlng": {
          "lat": 48.89271247049609,
          "lng": 24.68765258789063
      },
      "description": "Вантаж #1081",
      "weght": 9
  },
  {
      "id": 1195,
      "latlng": {
          "lat": 52.19750685699392,
          "lng": 20.9893798828125
      },
      "description": "Вантаж #1195",
      "weght": 9
  },
  {
      "id": 1197,
      "latlng": {
          "lat": 52.09975692575725,
          "lng": 23.664550781250004
      },
      "description": "Вантаж #1197",
      "weght": 11
  },
  {
      "id": 1395,
      "latlng": {
          "lat": 54.30370443989811,
          "lng": 18.588867187500004
      },
      "description": "Вантаж #1395",
      "weght": 18
  },
  {
      "id": 1459,
      "latlng": {
          "lat": 50.08181960206071,
          "lng": 22.000122070312504
      },
      "description": "Вантаж #1459",
      "weght": 11
  },
  {
      "id": 1461,
      "latlng": {
          "lat": 49.87693780072528,
          "lng": 24.010620117187504
      },
      "description": "Вантаж #1461",
      "weght": 5
  },
  {
      "id": 1463,
      "latlng": {
          "lat": 50.10648772767332,
          "lng": 24.345703125
      },
      "description": "Вантаж #1463",
      "weght": 8
  },
  {
      "id": 1465,
      "latlng": {
          "lat": 49.745781306155735,
          "lng": 23.779907226562504
      },
      "description": "Вантаж #1465",
      "weght": 10
  },
  {
      "id": 1561,
      "latlng": {
          "lat": 44.968684437948376,
          "lng": 34.09057617187501
      },
      "description": "Вантаж #1561",
      "weght": 7
  },
  {
      "id": 1563,
      "latlng": {
          "lat": 45.131679975460536,
          "lng": 35.40344238281251
      },
      "description": "Вантаж #1563",
      "weght": 3
  },
  {
      "id": 1573,
      "latlng": {
          "lat": 46.86394700508323,
          "lng": 35.39245605468751
      },
      "description": "Вантаж #1573",
      "weght": 3
  },
  {
      "id": 1575,
      "latlng": {
          "lat": 46.67205646734499,
          "lng": 32.67333984375001
      },
      "description": "Вантаж #1575",
      "weght": 7
  },
  {
      "id": 1577,
      "latlng": {
          "lat": 46.94276208682137,
          "lng": 32.01416015625001
      },
      "description": "Вантаж #1577",
      "weght": 6
  },
  {
      "id": 1651,
      "latlng": {
          "lat": 49.06486885623368,
          "lng": 33.43139648437501
      },
      "description": "Вантаж #1651",
      "weght": 0
  },
  {
      "id": 1653,
      "latlng": {
          "lat": 48.92069450900384,
          "lng": 33.36273193359376
      },
      "description": "Вантаж #1653",
      "weght": 1
  },
  {
      "id": 1661,
      "latlng": {
          "lat": 49.66407240384585,
          "lng": 32.06359863281251
      },
      "description": "Вантаж #1661",
      "weght": 4
  },
  {
      "id": 1717,
      "latlng": {
          "lat": 49.595579941102535,
          "lng": 33.18695068359376
      },
      "description": "Вантаж #1717",
      "weght": 3
  },
  {
      "id": 1821,
      "latlng": {
          "lat": 50.761653413004304,
          "lng": 31.36734008789063
      },
      "description": "Вантаж #1821",
      "weght": 3
  },
  {
      "id": 1877,
      "latlng": {
          "lat": 50.2682767372753,
          "lng": 28.663330078125004
      },
      "description": "Вантаж #1877",
      "weght": 7
  },
  {
      "id": 1879,
      "latlng": {
          "lat": 50.597186230587035,
          "lng": 27.625122070312504
      },
      "description": "Вантаж #1879",
      "weght": 18
  },
  {
      "id": 1939,
      "latlng": {
          "lat": 48.556614108721284,
          "lng": 39.26513671875001
      },
      "description": "Вантаж #1939",
      "weght": 2
  },
  {
      "id": 1995,
      "latlng": {
          "lat": 47.09069560264967,
          "lng": 37.55676269531251
      },
      "description": "Вантаж #1995",
      "weght": 2
  },
  {
      "id": 1997,
      "latlng": {
          "lat": 47.25872815157012,
          "lng": 37.54577636718751
      },
      "description": "Вантаж #1997",
      "weght": 18
  },
  {
      "id": 2057,
      "latlng": {
          "lat": 45.690832836458185,
          "lng": 34.39819335937501
      },
      "description": "Вантаж #2057",
      "weght": 9
  },
  {
      "id": 2129,
      "latlng": {
          "lat": 47.82790816919329,
          "lng": 34.98046875000001
      },
      "description": "Вантаж #2129",
      "weght": 9
  },
  {
      "id": 2131,
      "latlng": {
          "lat": 47.86108855623179,
          "lng": 35.34851074218751
      },
      "description": "Вантаж #2131",
      "weght": 11
  },
  {
      "id": 2139,
      "latlng": {
          "lat": 46.931509883369316,
          "lng": 32.21740722656251
      },
      "description": "Вантаж #2139",
      "weght": 0
  },
  {
      "id": 2223,
      "latlng": {
          "lat": 50.543108443488386,
          "lng": 30.220642089843754
      },
      "description": "Вантаж #2223",
      "weght": 2
  },
  {
      "id": 2273,
      "latlng": {
          "lat": 50.54572653975848,
          "lng": 30.17532348632813
      },
      "description": "Вантаж #2273",
      "weght": 5
  },
  {
      "id": 2343,
      "latlng": {
          "lat": 50.45488102906116,
          "lng": 30.60653686523438
      },
      "description": "Вантаж #2343",
      "weght": 5
  },
  {
      "id": 2375,
      "latlng": {
          "lat": 50.40107765043511,
          "lng": 30.685501098632816
      },
      "description": "Вантаж #2375",
      "weght": 15
  },
  {
      "id": 2401,
      "latlng": {
          "lat": 50.406767075712835,
          "lng": 30.520706176757816
      },
      "description": "Вантаж #2401",
      "weght": 15
  },
  {
      "id": 2433,
      "latlng": {
          "lat": 50.359480346298696,
          "lng": 30.399169921875004
      },
      "description": "Вантаж #2433",
      "weght": 7
  },
  {
      "id": 2435,
      "latlng": {
          "lat": 50.556197471327174,
          "lng": 30.429382324218754
      },
      "description": "Вантаж #2435",
      "weght": 8
  },
  {
      "id": 2437,
      "latlng": {
          "lat": 50.57887651221436,
          "lng": 30.736999511718754
      },
      "description": "Вантаж #2437",
      "weght": 13
  },
  {
      "id": 2439,
      "latlng": {
          "lat": 50.41726883571085,
          "lng": 30.808410644531254
      },
      "description": "Вантаж #2439",
      "weght": 19
  },
  {
      "id": 2479,
      "latlng": {
          "lat": 50.06242859370096,
          "lng": 29.913024902343754
      },
      "description": "Вантаж #2479",
      "weght": 18
  },
  {
      "id": 2481,
      "latlng": {
          "lat": 50.20854899229104,
          "lng": 30.239868164062504
      },
      "description": "Вантаж #2481",
      "weght": 5
  },
  {
      "id": 2483,
      "latlng": {
          "lat": 50.13114315479007,
          "lng": 30.640869140625004
      },
      "description": "Вантаж #2483",
      "weght": 8
  }
];

var map, draggMarker, popup, group, control;
function PassingCargo () {




useEffect(() => { 

var myIcon = L.Icon.extend({
    options: {
        shadowUrl: require('../../../src/img/markers/marker-shadow.png'),
        iconSize:     [25, 41],
        shadowSize:   [41, 41],
        iconAnchor:   [12, 41],
        shadowAnchor: [12, 41]
     //   popupAnchor:  [-3, -76]
    }
});



const markerGreen = new myIcon({
    iconUrl: require('../../../src/img/markers/marker-green.png')
});

const markerRed = new myIcon({
    iconUrl: require('../../../src/img/markers/marker-red.png')
});
const markerYellow = new myIcon({
    iconUrl: require('../../../src/img/markers/marker-yellow.png')
});

var map = L.map('map').setView([50.3814876755621, 30.59675216674805], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);


map.on('click', function(e) {
    var container = L.DomUtil.create('div', 'context-popup'),
        startBtn = createButton('Пункт відправління', 'btn btn-outline-success btn-sm', container),
        destBtn = createButton('Пункт призначення', 'btn btn-outline-danger btn-sm mt-2', container);

    L.DomEvent.on(startBtn, 'click', function() {
        control.spliceWaypoints(0, 1, e.latlng);
        control.name = 'start';
        map.closePopup();
        console.log(control.getWaypoints()[0].name = 'start');
    });        

    L.DomEvent.on(destBtn, 'click', function() {
        control.spliceWaypoints(control.getWaypoints().length - 1, 1, e.latlng);
        map.closePopup();
        var arr = control.getWaypoints();
        console.log(arr[arr.length - 1].name = 'dist');
    });

    L.popup()
        .setContent(container)
        .setLatLng(e.latlng)
        .openOn(map);  
});

function createButton(label, className, container) {
    var btn = L.DomUtil.create('button', className, container);
    btn.setAttribute('type', 'button');
    btn.innerHTML = label;
    return btn;
}

var markerClick = (e) => {
        var container = L.DomUtil.create('div', 'context-popup'),
        markerDelBtn = createButton('Видалити', 'btn btn-outline-success btn-sm', container);


    L.DomEvent.on(markerDelBtn, 'click', function(e) {
        console.log(e);
    });        

    
}


var control = L.Routing.control({
    show: false,
    draggableWaypoints: true,
    createMarker: function(i, wp, nWps) {
        if (i === 0 ) {
            return L.marker(wp.latLng, {icon: markerGreen, draggable: true})
            .on('click', markerClick());
        } 
        else if(i === nWps - 1){
            return L.marker(wp.latLng, {icon: markerRed, draggable: true});
        }
        else {
            return L.marker(wp.latLng, {icon: markerYellow, draggable: true});
        }
    }
}).on('routingerror', function(e) {
    try {
        map.getCenter();
    } catch (e) {
        map.fitBounds(L.latLngBounds(control.getWaypoints().map(function(wp) { return wp.latLng; })));
    }
    handleError(e);
}).on('routeselected', function(e) {
  
    var route = L.polyline(e.route.coordinates);
    // Do something with the route here
    var distance = 3; // Distance in km
    var boxes = L.RouteBoxer.box(route, distance);

console.log(boxes); // OSRM polyline decoding);

for (var i = 0; i < boxes.length; i++) {
  L.rectangle(boxes[i], {color: "#ff7800", weight: 1}).addTo(map);

}

}).addTo(map);

const handleError = (error) => {
    console.log(error);
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
    onRemove: function(map) {}
});
  
})
  const searchPassingCargo = (e) => {
    console.log(e);   
  }



    return (
      <>
        <div id="map"></div>
      </>
      );
 

}
export default PassingCargo;