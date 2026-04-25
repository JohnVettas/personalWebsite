import { useState, useEffect } from 'react';
import './App.css';
import BigNav from './navbar.jsx';
import {Home, Skills} from './home.jsx';
import {Education} from './edprab.jsx';

function App() {
	// const [hasStarted, setHasStarted] = useState(false);
	


	return (
		<>
			<BigNav></BigNav>
			<Home></Home>
			<Skills></Skills>
			<Education></Education>
		</>
	)
}

export default App;