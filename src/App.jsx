import { useState, useEffect } from 'react';
import './App.css';
import BigNav from './navbar.jsx';
import {Home} from './home.jsx';

function App() {
	// const [hasStarted, setHasStarted] = useState(false);
	


	return (
		<>
			<BigNav></BigNav>
			<Home></Home>
		</>
	)
}

export default App;