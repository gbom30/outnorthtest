import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    max-width: 500px;
    border: 1px solid grey;
    padding: 1% 1% 1% 2%;
    margin-bottom: 3%;

    @media (min-width: 800px) {
        width: 100%;
        border-left: 1px solid black;  
    }
`;