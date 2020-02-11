import React from 'react';
import Title from './Title';
import Button from './elements/Button';
import styled from 'styled-components';

const Display = styled.div`
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    align-items: center;
    justify-content: space-between;
`;


const ThemeDisplay = () => (
    <div>
        <Display>
            <Title backgroundColor={'linear-gradient(to right, rgb(34, 34, 34) 50%, rgb(221, 221, 221) 50%);'} id={'dafafd'} title={'Combination'} />
            <div>
                <Button black>Random ⭯</Button>
                <Button black>Swap ⇌</Button>
            </div>
        </Display>
    </div>
);

export default ThemeDisplay;