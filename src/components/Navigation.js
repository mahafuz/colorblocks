import React, { Component } from 'react';
import {steps} from '../data/colors';
import { Circle } from './elements/Circle';

class Navigation extends Component {
    handleClick(id) {
        document.getElementById(id).scrollIntoView({
            behavior: 'smooth'
        });
    }

    render() {
        return(
            <div className="navigation">
                {
                    steps.map( step => <Circle data-id={step.name} key={step.value} onClick={ id => this.handleClick(step.name)} backgroundColor={step.value}/>)
                }
            </div>
        )
    }
}

export default Navigation;