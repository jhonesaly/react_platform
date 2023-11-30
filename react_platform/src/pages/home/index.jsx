import { Header } from '../../components/Header';
import { useAuth } from '../../services/AuthContext'; 

import please from '../../assets/please_login.jpg';
import content from '../../assets/content1.jpg';

import { ContentContainer, ContentImage } from './styles';

const Home = () => {
    const { login } = useAuth();

    return (<>
        <Header/>
        {login ? (
                <ContentContainer>
                    <ContentImage src={content} alt='Conteúdo' />
                </ContentContainer>
            ) : (
                <ContentContainer>
                    <ContentImage src={please} alt='Faça o login' />
                </ContentContainer>
            )}

    </>)
}

export { Home }