import { useNavigate } from "react-router-dom";

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { ContentContainer, Column, Title } from './styles';

import { useAuth } from '../../services/AuthContext';

const Login = () => {

    const navigate = useNavigate();
    const { handleLogin } = useAuth();

    const handleClickEnviarLogin = () => {
        navigate('/');
        handleLogin();
    }

    const handleClickEnviarSignin = () => {
        navigate('/');
        handleLogin();
    }

    return (<>
        <Header/>
        <ContentContainer>
            <Column>
                <Title>CADASTRO</Title>
                <Input />
                <Button title="Enviar" onClick={handleClickEnviarSignin}/>
            </Column>
            <Column>
                <Title>ENTRAR</Title>
                <Button title="Enviar" onClick={handleClickEnviarLogin}/>
            </Column>
        </ContentContainer>
    </>)
}

export { Login }