import React from 'react';
import logo from '../../assets/logo-name.png';

import { Navigator } from '../Navigator';
import { Button } from '../Button';

import { Container, Logo } from './styles';

const Header = ({logado}) => {
    return (
    <Container>
            <Logo src={logo} alt="Logo da plataforma"/>
            {logado ? (<>
                <Button title='Sair' />
            </>) : (<>
                <Navigator title='Entrar' href='/login' />
            </>)}
    </Container>
    )
}

export { Header }