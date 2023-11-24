import React from 'react';

import { InputContainer } from './styles';

const Input = ({leftIcon, ...rest}) => {
    return(
        <InputContainer>
            {leftIcon ? (<>{leftIcon}</>) : null}
        </InputContainer>
    )
}

export { Input };