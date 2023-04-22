import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { type IBtn } from '../../../interfaces/styledComponents';

export const LinkYellow = styled(Link)`
  display: flex;
  align-items: center;
  padding: 9px 32px;
  background-color: var(--theme-primary);
  color: var(--btn-text-color1);
  transition: 0.5s;
  text-decoration: none;
  border-radius: 6px;
  font-size: var(--font-medium);
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: var(--btn-hover);
  }
`;

export const BtnYellow = styled.button<IBtn>`
  display: flex;
  justify-content: center;
  padding: 9px 32px;
  background-color: var(--theme-primary);
  align-items: center;
  color: var(--text-light);
  transition: 0.5s;
  text-decoration: none;
  border-radius: 6px;
  cursor: pointer;
  border: 0px;
  font-weight: 700;
  font-size: ${(props) => props.fontSize};
  line-height: 24px;
  &:hover {
    background-color: var(--btn-hover);
  }
`;
