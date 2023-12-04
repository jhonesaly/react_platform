import { Controller } from 'react-hook-form'; 

import { InputContainer, IconContainer, InputText } from './styles';

import { IInput } from './types'

const Input = ({leftIcon, name, control, placeholder}: IInput) => {
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