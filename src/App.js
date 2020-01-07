import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import GlobalStyles from './styles/GlobalStyles';

function App() {
	return (
		<div className="App">
			<GlobalStyles />
			<Header />
			<LandingPage />
		</div>
	);
}

export default App;
