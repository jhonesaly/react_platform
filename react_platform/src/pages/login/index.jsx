import { Header } from '../../components/Header';

import { ContentContainer, Column } from './styles';

const Login = () => {
    return (<>
        <Header/>
        <ContentContainer>
            <Column>
                <h1>Novo Cadastro</h1>
            </Column>
            <Column>
                <h1>Já possuo cadastro</h1>
            </Column>
        </ContentContainer>
    </>)
}

export { Login }