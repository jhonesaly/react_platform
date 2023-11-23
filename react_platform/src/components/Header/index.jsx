import React, { useState } from 'react';
import logo from '../../assets/logo-name.png';
import usericon from '../../assets/anon_icon.jpg';

import { useNavigate } from "react-router-dom";

import { Button } from '../Button';

import { Container, Menu, Logo, UserIcon} from './styles';

const Header = ({login}) => {

    const navigate = useNavigate();

    const handleClickEntrar = () => {
        navigate('/login');
    }

    const handleClickSair = () => {
        navigate('/');
    }

    return (
    <Container>
            <Logo src={logo} alt="Logo da plataforma"/>
            <Menu>
            {login ? (<>
                <UserIcon src={usericon} alt="Imagem do usuário"/>
                <Button title='Home' onClick={handleClickSair}/>
                <Button title='Sair' onClick={handleClickSair}/>
            </>) : (<>
                <Button title='Entrar' onClick={handleClickEntrar} />
            </>)}
            </Menu>
    </Container>
    )
}

export { Header }