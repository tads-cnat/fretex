import styled from 'styled-components';
import { type IPreviewImage } from '../../interfaces/styledComponents';

export const Container = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.5s;

  input {
    display: none;
  }

  p {
    color: var(--text-grey-1);
    font-size: var(--font-medium);
  }
  :hover {
    filter: brightness(50%);
  }
`;

// 2 --> redondo
export const ImgPreview = styled.img<IPreviewImage>`
  width: ${(props) => props.width};
  /* height:  ${(props) => props.width}; */
  object-fit: cover;
  max-width: 100%;
  border-radius: ${(props) => (props.tipo === 2 ? '50%' : '0')};
`;