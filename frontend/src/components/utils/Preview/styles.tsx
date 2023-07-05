import styled from 'styled-components';
import { type IPreviewImage } from '../../../interfaces/styledComponents';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  gap: 10px;

  label {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  label:hover {
    filter: brightness(50%);
  }

  input {
    display: none;
  }

  p {
    color: var(--text-grey-1);
    font-size: var(--font-medium);
  }
`;

// 2 --> redondo
export const ContainerImagem = styled.div<IPreviewImage>`
  width: ${(props) => props.width};
  height: ${(props) => props.width};

  img {
    width: 100%;
    height: 100%;
    border-radius: ${(props) => (props.tipo === 2 ? '50%' : '0')};
    object-fit: cover;
    max-width: 100%;
  }
`;
