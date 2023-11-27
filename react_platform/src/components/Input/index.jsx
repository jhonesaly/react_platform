import React from 'react';
import { Controller } from 'react-hook-form'; 

import { InputContainer, IconContainer, InputText } from './styles';

const Input = ({leftIcon, name, control, placeholder}) => {
    return(
        <InputContainer>
            {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
            <Controller 
                name={name}
                control={control}
                render={({ field }) => <InputText {...field} placeholder={placeholder}/>}
            />
        </InputContainer>
    )
}

export { Input };