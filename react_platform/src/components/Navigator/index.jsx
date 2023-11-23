import React from 'react';

import { NavigatorContainer } from './styles'; 

const Navigator = ({title, href}) => {
    return(
        <NavigatorContainer href={href}>{title}</NavigatorContainer>
    )
}

export { Navigator }