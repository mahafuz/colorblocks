import React from 'react';
import { colors } from '../data/colors';
import Title from './Title';
import Family from './Family';

const MatColor = () => (
    <div className="matcolors">
        {
            Object.keys(colors).map( color => {
                return(
                    <div key={color.toLowerCase()}>
                        <Title backgroundColor={colors[color][500]} id={color.toLowerCase().split(' ').join('-')} title={color} />
                        <Family color={color} />
                    </div>
                )
            })
        }
    </div>
);

export default MatColor;