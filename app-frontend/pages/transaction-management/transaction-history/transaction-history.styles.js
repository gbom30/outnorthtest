import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 800px) {
        border-left: 1px solid black;  
    }
`;

export const HistoryItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 1000px;

    @media (min-width: 800px) {
        margin-left: 3rem;
        min-width: 400px;
    }

    @media (min-width: 1025px) {
        margin-left: 6.5rem;
    }
`;

export const Header = styled.h1`
    display: flex;

    @media (min-width: 800px) {
        align-self: flex-start;
    }
`;