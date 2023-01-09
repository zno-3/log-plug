import React from 'react';
import Sidebar from './components/Sidebar/Sidebar.jsx'
import {BrowserRouter as Router, 
		Routes, Route} from "react-router-dom";
import Map from './components/Map/Map.jsx';
import Autocomplite from './components/Autocomplite/Autocomplite.jsx';

const App = () => {
	return (
		<Router>
      		<Sidebar/>
			<div id="content">
			<Routes>
					<Route path="/map" element={<Map/>}/>
					<Route path="/autocomplite" element = {<Autocomplite/>}/>						
			</Routes>
			</div>
		</Router>
	)
}

export default App;