import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ProjectPage from './components/ProjectPage';
import GlobalStyles from './styles/GlobalStyles';

function App() {
	return (
		<div className="App">
			<GlobalStyles />
			<Header />
			<ProjectPage />
		</div>
	);
}

export default App;
