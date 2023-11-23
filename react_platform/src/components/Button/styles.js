import styled from 'styled-components';

export const ButtonContainer = styled.button`
    background: #777;
    border-radius: 22px;
    color: #FFF;
    width: 100px;
    margin: 10px 15px;
    margin-left: auto;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
        background: #999; /* Altera a cor de fundo ao passar o mouse por cima */
    }
`