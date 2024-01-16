import styled from "styled-components";
import cover from '../../assets/Cover.jpg'

export const HeaderContainer = styled.header`
    background-image: url(${cover});
    background-size: cover;
    width: 100%;
    height: 18.5rem;
`;

export const HeaderContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 4rem;
`;