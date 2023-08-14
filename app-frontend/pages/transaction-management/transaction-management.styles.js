import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0 1.5rem;

    @media (min-width: 800px) {
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
        padding: 0 3rem;
    }  
`;
