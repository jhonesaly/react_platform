import { useNavigate } from "react-router-dom";

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { ContentContainer, Column, Title } from './styles';

import { useAuth } from '../../services/AuthContext';
import { api } from '../../services/api';

import { useForm } from 'react-hook-form';

import { MdEmail } from 'react-icons/md';

const Login = () => {

    const navigate = useNavigate();
    const { handleLogin } = useAuth();

    const { control, handleSubmit, formState: { errors } } = useForm({
        reValidadeMode: 'onChange',
        mode: 'onChange',
    })

    const handleClickEnviarLogin = async (formData) => {
        try{
            const {data} = await api.get(`/users?email=${formData.email}&senha=${formData.senha}`);

            if(DataTransfer.length && data[0].id){
                handleLogin();
                navigate('/');
            } else {
                alert('Usuário ou senha inválido')
            }

            return
        }catch(e){
            alert('Erro: ', e)
        }
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
                <Input leftIcon={<MdEmail />} placeholder="E-mail" name = "email" control={control}/>
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