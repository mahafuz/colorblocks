import React from 'react';
import {steps} from '../data/colors';
import { Circle } from './elements/Circle';


const Navigation = () => (
    <div className="navigation">
        {
            steps.map( step => <Circle key={step.value} backgroundColor={step.value}/>)
        }
    </div>
);

export default Navigation;