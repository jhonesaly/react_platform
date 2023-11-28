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

    const { control, handleSubmit, formState: { errors }, register, watch } = useForm({
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
            const { namesignin, emailsignin, senhasignin, uploadPhoto, profilePhoto } = formData;
            const userData = {
                name: namesignin,
                email: emailsignin,
                senha: senhasignin,
            };

            if (uploadPhoto && profilePhoto) {
                const formData = new FormData();
                formData.append('profilePhoto', profilePhoto[0]);
                userData.image = profilePhoto[0].name;
            }

            const response = await api.post('/users', userData);

            if (response.data && response.data.id) {
                alert('Cadastro realizado com sucesso!');
                navigate('/');
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
                    
                    <div>
                        <input
                            type="checkbox"
                            id="uploadPhoto"
                            name="uploadPhoto"
                            {...register('uploadPhoto')}
                            checked={watch('uploadPhoto')}
                        />
                        <label htmlFor="uploadPhoto">Deseja enviar uma foto?</label>
                    </div>

                    {watch('uploadPhoto') && (
                        <div>
                            <input
                                type="file"
                                name="profilePhoto"
                                {...register('profilePhoto')}
                                accept="image/*"
                            />
                        </div>
                    )}

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