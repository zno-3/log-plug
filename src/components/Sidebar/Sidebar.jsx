import React from 'react';
import { Link} from "react-router-dom";
import { Accordion, Nav } from 'react-bootstrap';

import './Sidebar.css';
//import Navbar from 'react-bootstrap/Navbar';
function SideBar () {
    return (
        <div className="side-bar">


    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Maps</Accordion.Header>
        <Accordion.Body>
          <Nav.Item>
            <Link to="map">Map</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="map-route">map route</Link>
          </Nav.Item>
          <Nav.Item>
              <Link to="passing-cargo">passing cargo</Link>
          </Nav.Item>
          <Nav.Item>
              <Link to="create-json">Create JSON</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="autocomplite">autocomplite</Link>
          </Nav.Item>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Users</Accordion.Header>
        <Accordion.Body>
        <Link to="users">users</Link>

        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>



    </div>
    );
}

export default SideBar;