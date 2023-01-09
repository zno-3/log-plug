import React from 'react';
import Sidebar from './components/Sidebar/Sidebar.jsx'
import {BrowserRouter as Router, 
		Routes, Route} from "react-router-dom";

const App = () => {
	return (
		<Router>
      <Sidebar/>
   			<Routes>
   				<Route path="/Sidebar" element={<Sidebar/>}/>
   			</Routes>
		</Router>
		)
}

export default App;