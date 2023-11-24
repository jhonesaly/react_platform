import React from 'react';

import { InputContainer, IconContainer } from './styles';

const Input = ({leftIcon, ...rest}) => {
    return(
        <InputContainer>
            {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
        </InputContainer>
    )
}

export { Input };