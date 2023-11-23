import React from 'react';
import logo from '../../assets/logo-name.png';
import usericon from '../../assets/anon_icon.jpg';

import { useNavigate } from "react-router-dom";

import { Button } from '../Button';

import { Container, Menu, Logo, UserIcon} from './styles';

import { useAuth } from '../../services/AuthContext';

const Header = () => {

    const navigate = useNavigate();
    const { login, handleLogin, handleLogout } = useAuth();

    const handleClickEntrar = () => {
        navigate('/login');
        handleLogin();
    }

    const handleClickSair = () => {
        handleLogout();
        navigate('/');
    }

    const handleClickHome = () => {
        navigate('/');
    }

    return (
    <Container>
            <Logo src={logo} alt="Logo da plataforma"/>
            <Menu>
            {login ? (<>
                <UserIcon src={usericon} alt="Imagem do usuário"/>
                <Button title='Home' onClick={handleClickHome}/>
                <Button title='Sair' onClick={handleClickSair}/>
            </>) : (<>
                <Button title='Home' onClick={handleClickSair}/>
                <Button title='Entrar' onClick={handleClickEntrar} />
            </>)}
            </Menu>
    </Container>
    )
}

export { Header }