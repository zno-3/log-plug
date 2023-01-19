import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import MapRoute from '../../components/MapRoute/MapRoute.jsx';
import './SetRoute.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function SetRoute () {

  const [lat1, setLat1] = useState(51.29);
  const [lng1, setLng1] = useState(31.17);
  const [lat2, setLat2] = useState(48.29);
  const [lng2, setLng2] = useState(27.17);

  const coordinates = [lat1, lng1, lat2, lng2];
  
  const update = (tt)=>{
    console.log(tt);
  }

  return (
  <>
    <MapRoute coordinates={coordinates}/>
     <Form.Control onChange={e => setLat1(e.target.value)} value={lat1} />
     <Button>Set New Route</Button>
  </>
  );
}
export default SetRoute;