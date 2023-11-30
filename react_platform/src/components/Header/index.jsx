import React from 'react';
import logo from '../../assets/logo-name.png';
import defaultIcon from '../../assets/anon_icon.jpg';

import { useNavigate } from "react-router-dom";

import { Button } from '../Button';

import { Container, Menu, Logo, UserIcon} from './styles';

import { useAuth } from '../../services/AuthContext';

const Header = () => {

    const navigate = useNavigate();
    const { login, user, handleLogout } = useAuth();

    const handleClickEntrar = () => {
        navigate('/login');
    }

    const handleClickSair = () => {
        handleLogout();
        navigate('/');
    }

    const handleClickHome = () => {
        navigate('/');
    }

    const renderUserIcon = () => {
        if (login && user.image) {
            try {
                const userImagePath = require(`../../db/images/${user.image}`);
                console.log('user.image:' + user.image)
                console.log('userImagePath: ' + userImagePath)
                return <UserIcon src={userImagePath} alt="Imagem do usuário" />;
            } catch (error) {
                console.error(`Erro ao importar a imagem: ${error}`);
            }
        }
        return <UserIcon src={defaultIcon} alt="Imagem do usuário" />;
    };

    return (
    <Container>
            <Logo src={logo} alt="Logo da plataforma"/>
            <Menu>
            {login ? (
                <>
                    {renderUserIcon()}
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