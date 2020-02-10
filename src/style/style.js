import { createGlobalStyle } from 'styled-components';

const theme =  {
    
};

const GlobalStyle = createGlobalStyle`
	body {
		font-family: 'Nunito', sans-serif;
    }
    
    .container {
        max-width: 95%;
        margin: 0 auto;
    }
`;


export { theme, GlobalStyle };
