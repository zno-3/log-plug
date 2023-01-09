import React from 'react';
import { Link} from "react-router-dom";

import './Sidebar.css';
//import Navbar from 'react-bootstrap/Navbar';
function SideBar () {
    return (
      <>
      <div className="side-bar">
        <div className="inherit">
        <Link to="map">map</Link>
        <br/>
        <Link to="autocomplite">autocomplite</Link> 
        </div>
    </div>
    </>
    );
}

export default SideBar;