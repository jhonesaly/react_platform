import { ButtonContainer } from './styles';

const Button = ({title, onClick, disabled=false}) => {
    return(
        <ButtonContainer onClick={onClick} disabled={disabled}>
            {title}
        </ButtonContainer>
    )
}

export { Button }