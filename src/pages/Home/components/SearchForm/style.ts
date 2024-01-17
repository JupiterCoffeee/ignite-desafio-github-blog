import styled from "styled-components";

export const SearchFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    div {
        display: flex;
        justify-content: space-between;

        h3 {
            font-size: 1.125rem;
            color: ${props => props.theme['gray-200']};
        }

        span {
            color: ${props => props.theme['dark-blue-300']}
        }
    }

    input {
        display: flex;
        padding: 0.75rem 1rem;
        align-items: center;
        gap: 0.5rem;

        border-radius: 0.375rem;
        border: 1px solid ${props => props.theme['dark-blue-500']};
        background: transparent;
        color: ${props => props.theme['gray-300']};

        &:focus::placeholder {
            color: ${props => props.theme['gray-300']};
        }
    }
`;