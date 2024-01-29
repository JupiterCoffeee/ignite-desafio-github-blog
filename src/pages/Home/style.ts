import styled from "styled-components";

export const HomeContainer = styled.div`
    width: 100%;
`;

export const HomeContent = styled.main`
    display: flex;
    flex-direction: column;
    gap: 3rem;

    width: 100%;
    max-width: 54rem;
    margin: 0 auto;
    margin-bottom: 2rem;
`;

export const HomeCardsContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    a {
        all: unset;

        &:hover {
            all: unset;
        }
    }
`;