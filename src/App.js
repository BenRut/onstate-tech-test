import React from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectPage from './components/ProjectPage';
import GlobalStyles from './styles/GlobalStyles';
import { ProjectPageWrapper } from './styles/ProjectPage';

function App() {
	return (
		<div className="App">
			<GlobalStyles />
			<Header />
			<ProjectPageWrapper>
				<ProjectPage />
				<Footer />
			</ProjectPageWrapper>
		</div>
	);
}

export default App;
