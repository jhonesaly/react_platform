import styled from 'styled-components';

export const ContentContainer = styled.main`
    display: flex;
    flex-direction: row;
`

export const Column = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &:not(:last-child) {
        border-right: 3px solid #fff;
    }
`

export const Title = styled.h1`
    font-family: 'Arial';
    font-weight: 700;
    font-size: 32px;
    margin: 10px;
`