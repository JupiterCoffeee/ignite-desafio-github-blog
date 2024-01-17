import styled from "styled-components";

export const ProfileCardContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: -5rem;
    padding: 2rem 2.5rem;
    gap: 1.5rem;

    background-color: ${props => props.theme['dark-blue-700']};
    box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);
    border-radius: 0.625rem;
`;

export const ProfileCardPictureDiv = styled.div`
    img {
        width: 9.25rem;
        height: 9.25rem;
        border-radius: 0.5rem;
    }
`;

export const ProfileCardContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

export const ProfileCardHeader = styled.header`
    div {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        span {
            font-weight: 700;
            font-size: 1.5rem;
            color: ${props => props.theme['gray-100']};
        }

        p {
           color: ${props => props.theme['gray-300']} 
        }

        a {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.25rem;
            font-size: 0.75rem;

            svg {
                margin-bottom: 3px;
            }
        }
    }
`;

export const ProfileCardStats = styled.div`
    display: flex;
    gap: 1.5rem;

    span {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        svg {
            color: ${props => props.theme['dark-blue-400']};
            width: 1.125rem;
            height: 1.125rem;
        }
    }
`;
