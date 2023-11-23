import React from 'react';

import { UserIconContainer } from './styles'; 

const UserIcon = ({source}) => {
    return(
        <UserIconContainer src={source}/>
    )
}

export { UserIcon }