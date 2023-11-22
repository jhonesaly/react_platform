import React from 'react';
import logo from '../../assets/logo-name.png'

import { Container, Logo } from './styles';

const Header = ({logado}) => {
    return (
    <Container>
            <Logo src={logo} alt="Logo da plataforma"/>
            {logado ? (<>
                <button>Sair</button>
            </>) : (<>
                <button>Entrar</button>
            </>)}
    </Container>
    )
}

export { Header }