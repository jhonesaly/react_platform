import React from 'react';
import logo from '../../assets/logo-name.png';
import usericon from '../../assets/anon_icon.jpg';

import { Navigator } from '../Navigator';
import { Button } from '../Button';
import { UserIcon } from '../UserIcon';

import { Container, Logo } from './styles';

const Header = ({logado}) => {
    return (
    <Container>
            <Logo src={logo} alt="Logo da plataforma"/>
            {logado ? (<>
                <UserIcon src={usericon} alt="Imagem do usuário"/>
                <Button title='Sair' />
            </>) : (<>
                <Navigator title='Entrar' href='/login' />
            </>)}
    </Container>
    )
}

export { Header }