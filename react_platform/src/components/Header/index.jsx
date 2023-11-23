import React from 'react';
import logo from '../../assets/logo-name.png'

import { Button } from '../Button';

import { Container, Logo } from './styles';

const Header = ({logado}) => {
    return (
    <Container>
            <Logo src={logo} alt="Logo da plataforma"/>
            {logado ? (<>
                <Button title='Sair' />
            </>) : (<>
                <Button title='Entrar' />
            </>)}
    </Container>
    )
}

export { Header }