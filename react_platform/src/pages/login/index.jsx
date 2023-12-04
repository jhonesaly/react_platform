import { useNavigate } from "react-router-dom";

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { ContentContainer, Column, Title } from './styles';

import { useAuth } from '../../services/AuthContext';
import { api } from '../../services/api';

import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { MdEmail, MdLock } from 'react-icons/md';

const schemaLogin = yup
    .object({
        emaillogin: yup
            .string()
            .required("Campo obrigatório"),
        senhalogin: yup
            .string()
            .required("Campo obrigatório"),
    }).required();

const Login = () => {

    const navigate = useNavigate();
    const { handleLogin } = useAuth();

    const { 
        control, 
        handleSubmit, 
        formState: { errors } 
    } = useForm({
        resolver: yupResolver(schemaLogin),
        mode: 'onChange',
        reValidateMode: 'onChange',
        
    })

    const handleClickEnviarLogin = async (formData) => {
        try{
            const {data} = await api.get(`/users?email=${formData.emaillogin}&senha=${formData.senhalogin}`);
            if(data.length && data[0].id){
                handleLogin(data[0]);
                navigate('/');
            } else {
                alert('Usuário ou senha inválido');
            }
        } catch (e) {
            console.error('Erro ao enviar dados para a API:', e);
        }
    };

    return (<>
        <Header/>
        <ContentContainer>
            <Column>
                <Title>ENTRAR</Title>
                <form onSubmit={handleSubmit(handleClickEnviarLogin)}>
                    <Input 
                        name = "emaillogin" 
                        leftIcon={<MdEmail />} 
                        placeholder="E-mail"  
                        control={control}
                        errorMessage={errors?.email?.message}
                    />

                    <Input 
                        name = "senhalogin" 
                        leftIcon={<MdLock />} 
                        placeholder="Senha"  
                        control={control}
                        errorMessage={errors?.password?.message}
                    />

                    <Button title="Enviar" type="submit"/>
                </form>
            </Column>
        </ContentContainer>
    </>)
}

export { Login }