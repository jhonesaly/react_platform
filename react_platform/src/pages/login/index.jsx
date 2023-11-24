import { Header } from '../../components/Header';
import { Button } from '../../components/Button';

import { ContentContainer, Column, Title } from './styles';

const Login = () => {
    return (<>
        <Header/>
        <ContentContainer>
            <Column>
                <Title>CADASTRO</Title>
                <Button title="Enviar"/>
            </Column>
            <Column>
                <Title>ENTRAR</Title>
                <Button title="Enviar"/>
            </Column>
        </ContentContainer>
    </>)
}

export { Login }