import { Header } from '../../components/Header';
import { ContentContainer, Column, Title } from './styles';

const Login = () => {
    return (<>
        <Header/>
        <ContentContainer>
            <Column>
                <Title>CADASTRO</Title>
            </Column>
            <Column>
                <Title>ENTRAR</Title>
            </Column>
        </ContentContainer>
    </>)
}

export { Login }