import React from 'react';
import styled from 'styled-components';
import { Circle } from './elements/Circle';

const Nav = styled.nav`
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    align-items: center;
`;

const Title = ({backgroundColor, id, title}) => {
    // console.log(backgroundColor);

    return (
        <Nav className="title" >
            <Circle backgroundColor={backgroundColor}></Circle>
            <h4 id={id} >{title}</h4>
        </Nav>
    )
}

export default Title;