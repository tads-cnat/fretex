import styled from 'styled-components';
import { Wrapper } from '../../styles/globalStyles';
import { type IActive } from '../../interfaces/IActive';

export const BgRegister = styled.section`
  background-color: #282828;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 40px;
  @media (max-width: 768px) {
    padding: 0 0 10px 0;
  }
`;

export const WrapperRegister = styled(Wrapper)`
  .typeRegister {
    display: flex;
    gap: 15px;
    margin-bottom: 30px;
  }
  @media (max-width: 768px) {
    .typeRegister {
      margin-top: 20px;
      margin-bottom: 10px;
    }
  }
`;

export const BtnTypeUser = styled.button<IActive>`
  display: flex;
  gap: 4px;
  background: none;
  color: var(--text-light);
  border: none;
  position: relative;
  cursor: pointer;

  svg {
    color: ${({ typeRegister }) =>
      typeRegister === 'freteiro' ? 'var(--theme-primary)' : '#0952F7'};
  }

  &::after {
    content: '';
    position: absolute;
    width: ${({ active }) => (active ? '100%' : '0')};
    height: 3px;
    background-color: var(--theme-primary);
    display: block;
    top: 100%;
    transition: 0.5s;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #282828;
`;
