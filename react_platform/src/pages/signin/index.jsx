import { useNavigate } from "react-router-dom";


import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { ContentContainer, Column, Title } from './styles';

import { api } from '../../services/api';

import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { MdEmail, MdLock, MdPerson } from 'react-icons/md';

const schemaSignin = yup
    .object({
        namesignin: yup
            .string()
            .required("Campo obrigatório"),
        emailsignin: yup
            .string()
            .email("E-mail inválido")
            .required("Campo obrigatório"),
        senhasignin: yup
            .string()
            .min(6, "No mínimo 6 caracteres")
            .required("Campo obrigatório"),
    }).required();

const Signin = () => {

    const navigate = useNavigate();

    const { 
        control, 
        handleSubmit, 
        formState: { errors } 
    } = useForm({
        resolver: yupResolver(schemaSignin),
        mode: 'onBlur',
        reValidateMode: 'onChange',
    })

    const handleClickEnviarSignin = async (formData) => {
        try{
            const { namesignin, emailsignin, senhasignin } = formData;
            const userData = {
                name: namesignin,
                email: emailsignin,
                senha: senhasignin,
            };

            const response = await api.post('/users', userData);

            if (response.data && response.data.id) {
                navigate('/');
                alert('Cadastro realizado com sucesso! Faça o login para entrar na plataforma.');
            } else {
                alert('Erro ao cadastrar usuário');
            }

        }catch (error) {
            alert('Erro: ', error);
        }

    }

    return (<>
        <Header/>
        <ContentContainer>
            <Column>
                <Title>CADASTRO</Title>

                <form onSubmit={handleSubmit(handleClickEnviarSignin)}>
                    <Input 
                        name="namesignin" 
                        leftIcon={<MdPerson />} 
                        placeholder="Nome"  
                        control={control}
                        errorMessage={errors?.namesignin?.message}
                    />
                    
                    <Input 
                        name = "emailsignin" 
                        leftIcon={<MdEmail />} 
                        placeholder="E-mail" 
                        control={control} 
                        errorMessage={errors?.emailsignin?.message}
                    />
                    
                    <Input 
                        name = "senhasignin"
                        leftIcon={<MdLock />} 
                        placeholder="Senha" 
                        control={control}
                        errorMessage={errors?.senhasignin?.message}
                    />

                    <Button title="Enviar" type="submit" />
                </form>
            </Column>
        </ContentContainer>
    </>)
}

export { Signin }