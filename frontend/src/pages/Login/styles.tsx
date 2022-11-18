import styled from "styled-components";
import { ContainerContent } from "../../components/RegisterComponents/RegisterClienteForm/styles";

export const ContainerContent2 = styled(ContainerContent) `


div {
    border-left: none;
    border-right: 1px solid #5f5f5f;
    margin: 0;
    padding: 0;
    padding-right: 80px;
    a{
        text-decoration: none;
        color: var(--text-light);
    }
}

h1 {
    font-size: 55px;
}

@media (max-width: 760px) {
    h1 {
    font-size: 45px;
}
}
    
`;