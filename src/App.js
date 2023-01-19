import React from 'react';
import Sidebar from './components/Sidebar/Sidebar.jsx'
import {BrowserRouter as Router, 
		Routes, Route} from "react-router-dom";
import Map from './components/Map/Map.jsx';
import SetRoute from './pages/SetRoute/SetRoute.jsx';
import PassingCargo from './pages/PassingCargo/PassingCargo';
import CreateJSON from './pages/CreateJSON/CreateJSON.jsx';
import Autocomplite from './components/Autocomplite/Autocomplite.jsx';
import Users from './pages/Users/Users.jsx';
import User from './pages/User/User.jsx';

const App = () => {
	return (
		<Router>
      		<Sidebar/>
			<div id="content">
			<Routes>
					<Route path="/map" element={<Map/>}/>
					<Route path="/autocomplite" element = {<Autocomplite/>}/>
					<Route path="/map-route" element = {<SetRoute/>}/>
					<Route path="/passing-cargo" element = {<PassingCargo/>}/>
					<Route path="/create-json" element = {<CreateJSON/>}/>
					<Route path="/users" element = {<Users/>}/>					
					<Route path="/user/:id" element = {<User/>}/>					
			</Routes>
			</div>
		</Router>
	)
}

export default App;