import React, { Component } from 'react';
import styled from 'styled-components';
import { ChromePicker } from 'react-color';
import {connect} from 'react-redux';

const EachPicker = styled.div`
    width: 50%;
    height: 100%;
    margin-right: 3px;
`;

const ForgroundColor = styled.div`
    height: 100%;
    width: 100%;
    background: ${ props => props.color };
    cursor: url(https://s1.iconbird.com/ico/0612/GooglePlusInterfaceIcons/w18h181338911221dropper.png), pointer;
`;

const Popover = styled.div`
    position: absolute;
    zIndex: 2;
`;

const Cover = styled.div`
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
`;

const Color = styled.div`
    background: ${props => props.color};
`;

class FGColor extends Component {
    state = {
        displayColorPicker: false,
        color: '#418097'
    };

    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };
    
    handleClose = () => {
        this.setState({ displayColorPicker: false })
    };
    
    handleChange = ({hex}) => {
        this.setState({ color: hex });
        this.props.updateFGColor(hex);
    };

    render() {
        return (
            <EachPicker>
                <ForgroundColor color={ this.state.color } className="color" onClick={ this.handleClick }>
                    <Color color={this.state.color} />
                </ForgroundColor>
                
                { this.state.displayColorPicker ? <Popover>
                    <Cover onClick={ this.handleClose }/>
                    <ChromePicker color={ this.state.color } onChange={ this.handleChange } />
                </Popover> : null }

                <b>Forground Color</b>
            </EachPicker>
        )
    }
}

const mapStateToProps = state => {
	return {
		displayColors: state.displayColors
	}
};

const mapDispatchToProps = dispatch => {
	return {
		updateFGColor: (color) => { dispatch({type: 'UPDATE_FG_COLOR', color: color}) }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FGColor);