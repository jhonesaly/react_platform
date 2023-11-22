import React from 'react';
import logo from '../../assets/logo-name.png'

import { Container, Logo } from './styles';

const Header = () => {
    return (
    <Container>
            <Logo src={logo} alt="Logo da plataforma"/>
    </Container>
    )
}

export { Header }