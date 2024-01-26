import styled from "styled-components";

export const PostContainer = styled.main`
    display: flex;
    flex-direction: column;
    gap: 3rem;

    width: 100%;
    max-width: 54rem;
    margin: 0 auto;
    margin-bottom: 2rem;
`;

export const PostHeader = styled.header`
    display: flex;
    flex-direction: column;
    margin-top: -5rem;
    padding: 2rem 2.5rem;
    gap: 1.5rem;

    background-color: ${props => props.theme['dark-blue-700']};
    box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);
    border-radius: 0.625rem;

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        a {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.75rem;

            svg {
                margin-bottom: 3px;
            }
        }
    }

    div ~ div {
        display: flex;
        justify-content: flex-start;
        gap: 2rem;

        span {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 0.5rem;
            color: ${props => props.theme['dark-blue-400']};
        }
    }
    
`;

export const PostSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;