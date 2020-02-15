import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from '../data/colors';

const FamilyTag = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0 0 32px 0;
`;

const Color = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2px;
    flex-grow: 1;
    width: 120px;
    input {
        max-width: 80px;
        color: #555555;
        text-transform: uppercase;
        text-overflow: ellipsis;
        font-size: inherit;
        font-family: inherit;
        cursor: pointer;
        border: 0px solid;
    }
`;

const ColorBtn = styled.div`
    background: ${ props => props.backgroundColor };
    display: flex;
    padding: 32px;
    border-radius: 4px;
    cursor: url(https://s1.iconbird.com/ico/0612/GooglePlusInterfaceIcons/w18h181338911221dropper.png), pointer;
    transition: .2s;
`;

class Family extends Component {
    render() {
        const { color } = this.props;
        return(
            <FamilyTag className="family">
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
            </FamilyTag>
        )
    }
}

export default Family;