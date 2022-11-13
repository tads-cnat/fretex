import styled from "styled-components";


export const ContainerPrincipal = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    justify-items: center;

    @media ( max-width: 800px) {
        grid-template-columns: 1fr;
    }
`;

export const ContainerContent = styled.div`
    display: flex;
    max-width: 400px;
    border-left: 1px solid #5F5F5F;
    padding-left: 50px;
    align-items: center;

    @media ( max-width: 800px) {
        order: -1;
    }

    h1{
        color: var(--bg-ligth);
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 42px;
        line-height: 72px;
        margin-bottom: 40px;

    }

    h2 {
        color: var(--bg-ligth);
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        line-height: 30px;
        margin-bottom: 20px;
    }

    p{
        color: var(--bg-ligth);
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;

    }
`;


export const ContainerForm = styled.div`
    max-width: 500px;        

    @media ( max-width: 800px) {
        order: 1;
    }

    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #353535;
    padding: 55px;

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-width: 500px;
    }
    div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    h1 {
        color: var(--bg-ligth);
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 28px;
        line-height: 24px;
        margin-top: 25px;
        margin-bottom: 20px;
    }

    p {
        color: #A8A8A8;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
    }
    a{
        text-decoration: none;
        color: var(--bg-ligth);
    }

    label input {
        height: 45px;
        background: #1B1B1B;
        border-radius: 10px;
        width: 100%;
        outline: none;
        border: none;
        padding: 5px;
        border: 2px solid #1B1B1B;

        &:focus{
            border: 2px solid var(--theme-primary);
        }
    }
`;

export const BtnYellow = styled.button`
    margin-top: 43px;
    margin-bottom: 20px;
    padding: 9px 32px;
    background-color: var(--theme-primary);
    color: var(--text-light);
    transition: 0.5s;
    text-decoration: none;
    border-radius: 6px;
    border: 0px;
    font-weight: 700;
    font-size: var(--font-large);
    line-height: 24px;
    &:hover {
        background-color: var(--btn-hover);
    }
`;