import styled from 'styled-components';
import { type IActive } from '../../../interfaces/IActive';

export const Container = styled.button<IActive>`
  display: flex;
  align-items: center;
  background-color: ${({ active }) => (active ? '#3f3f3f' : '#444444')};
  border: none;
  padding: 8px;
  border-radius: ${({ active }) => (active ? '6px 6px 0px 0px' : '6px')};
  cursor: pointer;
  gap: 7px;
  position: relative;
  transition: 0.5s;

  .perfil {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
  }

  .seta {
    width: 10px;
    transition: 0.2s;
    transform: ${({ active }) => (active ? 'rotate(0deg)' : 'rotate(180deg)')};
  }

  p {
    color: var(--text-light);
  }

  @media (max-width: 768px) {
    & {
      display: none;
      margin-bottom: ${({ active }) => (active ? '40px' : '10px')};
      overflow-y: ${({ active }) => (active ? 'visible' : 'hidden')};
      background-color: transparent;
      padding: 4px 0;
      width: 100%;
    }
    .perfil {
      width: 16px;
      height: 16px;
    }
    .seta {
      display: none;
    }
  }
`;

export const Content = styled.div<IActive>`
  background-color: #444444;
  position: absolute;
  width: 100%;
  display: ${({ active }) => (active ? 'flex' : 'none')};
  flex-direction: column;
  top: 100%;
  right: 0;
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;
  z-index: 998;
  padding: 0 !important;

  .links.active {
    color: var(--btn-hover);
  }

  .links {
    transition: 0.5s;
    display: ${({ active }) => (active ? 'flex' : 'none')};
    justify-content: flex-end;
    align-items: center;
    gap: 0.125rem;
    width: 100%;
    color: var(--text-light);
    border: none;
    cursor: pointer;
    text-align: right;
    padding: 8px;
    background-color: #444444;

    &:hover {
      background-color: #3f3f3f;
    }
    @media (max-width: 768px) {
      & {
        margin: 0 !important;
        position: unset;
        text-align: left;
        display: 'block';
        background-color: var(--bg-grey);
        border-top: 1px solid #424242;
      }
      .links {
        //   display: block;
        display: block;

        padding: 4px !important;
      }
    }
  }
`;
