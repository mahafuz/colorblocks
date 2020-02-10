import styled, { css } from 'styled-components';

const Button = styled.button`
    display: inline-flex;
    margin: 4px;
    padding: 0 16px;
    height: 40px;
    border-radius: 4px;
    ${ (props) => props.black && css `
        background: #000000;
        color: #ffffff;
    `}
    font-weight: 700;
    font-size: 18px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border: 0px solid;
`;

export default Button;