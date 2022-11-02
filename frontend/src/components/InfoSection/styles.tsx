import styled from "styled-components";
import { IRegisterImage2 } from "../../interfaces/styledComponents";

export const ContainerInfos = styled.section<IRegisterImage2>`
    background-color: var(--theme-primary);
    background-image: url(${(props) => props.img}), url(${(props) => props.img2});
    background-repeat: no-repeat;
    background-position: top 40px right 20px, bottom 40px right 20px;
    font-weight: bold;
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        background-image: none;
    }
`;

export const ContainerImg = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: 900px) {
        display: none;
    }
`;

export const Img = styled.img`
    height: 90%;
    width: 90%;
`;

export const ContainerInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--font-xxl);
    color: var(--bg-ligth);
    margin: 50px 25px 50px 25px;
    padding-right: 25px;
`;

