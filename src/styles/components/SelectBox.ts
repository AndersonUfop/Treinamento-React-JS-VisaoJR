import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    .select {
    width: 20rem;
    font-family: 'Montserrat';
    font-size: 12pt;
    border-color: var(--primary);

    border-radius: 0.4rem;
}

`;

export const Label = styled.div`
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 0.8rem;
    margin-bottom: 0.2rem;
    color: var(--primary);
`;

