import styled from 'styled-components';
import { type IActive } from '../../../../interfaces/IActive';

interface InterfaceImage {
  image?: string;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #282828;
`;

export const Preview = styled.div<IActive>`
  display: ${({ active }) => (active ? 'none' : 'block')};
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  p {
    display: ${({ active }) => (active ? 'none' : 'block')};
  }
`;

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

export const Image = styled.div<InterfaceImage>`
  width: 100%;
  height: 50vh;
  background: ${({ image }) =>
    image !== undefined ? `url(${image}) #282828` : '#282828'};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;

  .editBtn {
    position: absolute;
    top: 20px;
    right: 30px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    transition: 0.3s;

    &:hover {
      opacity: calc(0.7);
    }
    .edit {
      width: 100%;
    }
  }

  @media (max-width: 1200px) {
    height: 30vh;
  }
`;
