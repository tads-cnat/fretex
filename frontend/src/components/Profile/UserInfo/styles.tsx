import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 330px 1fr;
  padding-top: var(--mb-40);

  .bar {
    grid-column: 1/-1;
    background-color: #D9D9D9;
    margin: 15px 0;
    margin-top: 60px;
    display: block;
    height: 3px;
  }
`;

export const ContainerImage = styled.div`
  position: relative;
  .perfil {
    position: absolute;
    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 50%;
    border: 8px solid #fafafa;
    top: -125px;
  }
`;

export const Content = styled.div`
  .email {
    color: #595959;
  }
 
`;
