import { useState, useEffect } from 'react';
import './App.css';
import BigNav from './navbar.jsx';
import {Home, Skills} from './home.jsx';
import {Education, Projects} from './edprab.jsx';

function App() {
	// const [hasStarted, setHasStarted] = useState(false);
	


	return (
		<>
			<BigNav></BigNav>
			<Home></Home>
			<Skills></Skills>
			<Education></Education>
			<Projects></Projects>
		</>
	)
}

export default App;