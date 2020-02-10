import React from 'react';
import styled from 'styled-components';
import { colors } from '../data/colors';
import { Circle } from './elements/Circle';

const ColorBtn = styled.div`
    background: ${ props => props.backgroundColor };
    display: flex;
    padding: 32px;
    border-radius: 4px;
    cursor: url(https://s1.iconbird.com/ico/0612/GooglePlusInterfaceIcons/w18h181338911221dropper.png), pointer;
    transition: .2s;
`;

const Nav = styled.nav`
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    align-items: center;
`;

const Family = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Color = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2px;
    flex-grow: 1;
`;

const MatColor = () => (
    <div className="matcolors">
        {
            Object.keys(colors).map( color => {
                return(
                    <div key={color.toLowerCase()}>
                        <Nav className="title" >
                            <Circle backgroundColor={colors[color][500]}></Circle>
                            <h4 id={color.toLowerCase()} >{color}</h4>
                        </Nav>
                        <Family className="family">
                            {
                                Object.keys(colors[color]).map( key => {
                                    return(
                                        <Color className="color" key={key}>
                                            <ColorBtn backgroundColor={colors[color][key]}></ColorBtn>
                                            <b>{key}</b>
                                            <input type="text" readOnly value={colors[color][key]} />
                                        </Color>
                                    )
                                })
                            }
                        </Family>
                    </div>
                )
            })
        }
    </div>
);

export default MatColor;