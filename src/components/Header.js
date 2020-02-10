import React from 'react';
import Button from './elements/Button';
import styled from 'styled-components';
import githubLogo from '../images/icons/github.svg';

const Head = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 50px 0 20px 0;
`;

const Div = styled.div`
    display: flex;
    align-items: center;
`;

const Logo = styled.h1`
    font-size: 32px;
    font-weight: bold;
`;

const Header = () => (
    <Head>
        <Logo>ColorBlock</Logo>
        <Div>
            <Button black>HEX ↔ RGB</Button>
            <Button black><img src={githubLogo} alt={'colorblock-logo'} />GitHub</Button>
        </Div>
    </Head>
);

export default Header;