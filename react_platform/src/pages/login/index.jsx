import { useNavigate } from "react-router-dom";

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { ContentContainer, Column, Title } from './styles';

import { useAuth } from '../../services/AuthContext';
import { api } from '../../services/api';

import { useForm } from 'react-hook-form';

import { MdEmail, MdLock, MdPerson } from 'react-icons/md';

const Login = () => {

    const navigate = useNavigate();
    const { handleLogin } = useAuth();

    const { control, handleSubmit, formState: { errors }, setValue, register, watch } = useForm({
        reValidadeMode: 'onChange',
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

    const handleClickEnviarSignin = () => {
        navigate('/');
        handleLogin();
    }

    return (<>
        <Header/>
        <ContentContainer>
            <Column>
                <Title>CADASTRO</Title>

                <form onSubmit={handleSubmit(handleClickEnviarSignin)}>
                    <Input leftIcon={<MdPerson />} placeholder="Nome" name="namesignin" control={control}/>
                    {errors.email && <span>Nome é obrigatório</span>}
                    
                    <Input leftIcon={<MdEmail />} placeholder="E-mail" name = "emailsignin" control={control}/>
                    {errors.email && <span>E-mail é obrigatório</span>}
                    
                    <Input leftIcon={<MdLock />} placeholder="Senha" name = "senhasignin" control={control}/>
                    {errors.email && <span>Senha é obrigatória</span>}
                    
                    <label>
                        Deseja enviar uma foto?
                        <input
                            type="checkbox"
                            name="uploadPhoto"
                            {...register('uploadPhoto')}
                            checked={watch('uploadPhoto')}
                        />
                    </label>

                    {watch('uploadPhoto') && (
                        <>
                            <input
                                type="file"
                                name="profilePhoto"
                                {...register('profilePhoto')}
                                accept="image/*"
                                onChange={(e) => {
                                    setValue('uploadPhoto', true);
                                }}
                            />
                        </>
                    )}

                    <Button title="Enviar" type="submit" />
                </form>
            </Column>
            <Column>
                <Title>ENTRAR</Title>
                <form onSubmit={handleSubmit(handleClickEnviarLogin)}>
                    <Input leftIcon={<MdEmail />} placeholder="E-mail" name = "emaillogin" control={control}/>
                    {errors.email && <span>E-mail é obrigatório</span>}
                    <Input leftIcon={<MdLock />} placeholder="Senha" name = "senhalogin" control={control}/>
                    {errors.email && <span>Senha é obrigatória</span>}
                    <Button title="Enviar" type="submit"/>
                </form>
            </Column>
        </ContentContainer>
    </>)
}

export { Login }