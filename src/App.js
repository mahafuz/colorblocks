import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import MatColor from './components/MatColor';
import ThemeDisplay from './components/ThemeDisplay';
import { theme, GlobalStyle } from './style/style';
import { ThemeProvider } from 'styled-components';


function App() {
  return (
	  <ThemeProvider theme={theme}>
		  <GlobalStyle />
		<div className="App">
			<div className="container">
				<Header />
				<Navigation />
				<ThemeDisplay />
				<MatColor />
			</div>
		</div>
	</ThemeProvider>
  );
}

export default App;
