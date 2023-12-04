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

import { MdEmail, MdLock, MdPerson } from 'react-icons/md';

const schema = yup
    .object({
        email: yup
            .string()
            .email("E-mail inválido")
            .required("Campo obrigatório"),
        password: yup
            .string()
            .min(6, "No mínimo 6 caracteres")
            .required("Campo obrigatório"),
    })
    .required();

const Login = () => {

    const navigate = useNavigate();
    const { handleLogin } = useAuth();

    const { control, handleSubmit, formState: { errors } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    })

    const handleClickEnviarLogin = async (formData) => {
        try{
            const {data} = await api.get(`/users?email=${formData.emaillogin}&senha=${formData.senhalogin}`);
            if(data.length && data[0].id){
                handleLogin(data[0]);
                navigate('/');
            } else {
                alert('Usuário ou senha inválido')
            }

            return
        }catch(e){
            alert('Erro: ', e)
        }
    }

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
                    <Input leftIcon={<MdPerson />} placeholder="Nome" name="namesignin" control={control}/>
                    {errors.namesignin && <span>Nome é obrigatório</span>}
                    
                    <Input leftIcon={<MdEmail />} placeholder="E-mail" name = "emailsignin" control={control}/>
                    {errors.emailsignin && <span>E-mail é obrigatório</span>}
                    
                    <Input leftIcon={<MdLock />} placeholder="Senha" name = "senhasignin" control={control}/>
                    {errors.senhasignin && <span>Senha é obrigatória</span>}

                    <Button title="Enviar" type="submit" />
                </form>
            </Column>
            <Column>
                <Title>ENTRAR</Title>
                <form onSubmit={handleSubmit(handleClickEnviarLogin)}>
                    <Input leftIcon={<MdEmail />} placeholder="E-mail" name = "emaillogin" control={control}/>
                    {errors.emaillogin && <span>E-mail é obrigatório</span>}
                    <Input leftIcon={<MdLock />} placeholder="Senha" name = "senhalogin" control={control}/>
                    {errors.senhalogin && <span>Senha é obrigatória</span>}
                    <Button title="Enviar" type="submit"/>
                </form>
            </Column>
        </ContentContainer>
    </>)
}

export { Login }