import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import MatColor from './components/MatColor';
import ColorPicker from './components/ColorPicker';
import Display from './components/Display';
import { theme, GlobalStyle } from './style/style';
import { ThemeProvider } from 'styled-components';
import {connect} from 'react-redux';

function App(props) {
  return (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<div className="App">
			<div className="container">
				<Header />
				<Navigation />
				<Display {...props}/>
				<ColorPicker />
				<MatColor />
			</div>
		</div>
	</ThemeProvider>
  );
}

const mapStateToProps = (state) => {
	return {
		displayColors: state.displayColors
	}
}

export default connect(mapStateToProps)(App);
