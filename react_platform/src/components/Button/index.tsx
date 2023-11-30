import React from 'react'

import { ButtonContainer } from './styles';

import { IButton } from './types';

const Button = ({title, onClick}: IButton) => {
    return(
        <ButtonContainer onClick={onClick}>{title}</ButtonContainer>
    )
}

export { Button }