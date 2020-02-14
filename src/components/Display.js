import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
    background: ${ props => (props.bgColor) };

    h1 {
        padding: 50px;
        color: ${ props => (props.fgColor) };
    }
`;

const Display = (props) => {
    const {fgColor, bgColor} = props.displayColors;
    console.log('updated', fgColor);
    return(
        <Section fgColor={fgColor} bgColor={bgColor}>
            <h1>Color Blocks Big Title</h1>
        </Section>
    )
};

export default Display;