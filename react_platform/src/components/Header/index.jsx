import React, { useState } from 'react';
import logo from '../../assets/logo-name.png';
import usericon from '../../assets/anon_icon.jpg';

import { useNavigate } from "react-router-dom";

import { Button } from '../Button';

import { Container, Logo, UserIcon} from './styles';

const Header = () => {

    const navigate = useNavigate();
    const [login, setLogin] = useState(false)

    const handleClickEntrar = () => {
        setLogin(true);
        navigate('/login');
    }

    const handleClickSair = () => {
        setLogin(false);
        navigate('/');
    }

    return (
    <Container>
            <Logo src={logo} alt="Logo da plataforma"/>
            {login ? (<>
                <UserIcon src={usericon} alt="Imagem do usuário"/>
                <Button title='Sair' onClick={handleClickSair}/>
            </>) : (<>
                <Button title='Entrar' onClick={handleClickEntrar} />
            </>)}
    </Container>
    )
}

export { Header }