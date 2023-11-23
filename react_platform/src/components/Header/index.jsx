import React from 'react';
import logo from '../../assets/logo-name.png';

import { Navigator } from '../Navigator';

import { Container, Logo } from './styles';

const Header = ({logado}) => {
    return (
    <Container>
            <Logo src={logo} alt="Logo da plataforma"/>
            {logado ? (<>
                <Navigator title='Sair' />
            </>) : (<>
                <Navigator title='Entrar' />
            </>)}
    </Container>
    )
}

export { Header }