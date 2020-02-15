import React, { Component } from 'react';
import styled from 'styled-components';
import { ChromePicker } from 'react-color';
import {connect} from 'react-redux';

const EachPicker = styled.div`
    width: 50%;
    height: 100%;
    margin-left: 3px;
`;

const BackgroundColor = styled.div`
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

class BGColor extends Component {
    state = {
        displayColorPicker: false,
        color: '#D521DB'
    };

    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };
    
    handleClose = () => {
        this.setState({ displayColorPicker: false })
    };
    
    handleChange = ({hex}) => {
        this.setState({ color: hex });
        this.props.updateBGColor(hex);
    };

    render() {
        const { bgColor } = this.props.displayColors;

        return (
            <EachPicker>
                <BackgroundColor color={ bgColor } className="color" onClick={ this.handleClick }>
                    <Color color={bgColor} />
                </BackgroundColor>
                { this.state.displayColorPicker ? <Popover>
                    <Cover onClick={ this.handleClose }/>
                    <ChromePicker color={ bgColor } onChange={ this.handleChange } />
                </Popover> : null }
                <b>Background Color</b>
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
		updateBGColor: (color) => { dispatch({type: 'UPDATE_BG_COLOR', color: color}) }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(BGColor);