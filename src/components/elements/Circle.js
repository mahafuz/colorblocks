import styled from 'styled-components';

export const Circle = styled.div`
    background: ${ props => (props.backgroundColor) };
    cursor: pointer;
    display: inline-block;
    margin: 8px;
    padding: 16px;
    border-radius: 50%;
`;