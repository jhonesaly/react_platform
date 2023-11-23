import styled from 'styled-components';

export const NavigatorContainer = styled.a`
    background: #777;
    border-radius: 22px;
    color: #FFF;
    width: 100px;
    margin: 10px 15px;
    margin-left: auto;
    cursor: pointer;
    transition: background 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid #FFF;

    display: flex;
    align-items: center;
    justify-content: center;

    box-shadow: 0 4px 4px rgba(255, 255, 255, 0.5);

    &:hover {
        background: #999;
        box-shadow: 0 4px 4px rgba(255, 255, 255, 0.7);
    }
`