import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;  
    align-items: center;
`;

export const Header = styled.h1`
    display: flex;

    @media (min-width: 800px) {
        align-self: flex-start;
    }
`;

export const FormContainer = styled.form`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    padding: 3.7rem;

    @media (min-width: 800px) {
        margin-right: 3rem;
    }

    @media (min-width: 1025px) {
        margin-right: 6.5rem;
    }
`;

export const IdContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
`;

export const AmountContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
`;

export const LabelItem = styled.label`
    margin-bottom: 0.3rem;
`;

export const Input = styled.input`
    width: 100%;
`;