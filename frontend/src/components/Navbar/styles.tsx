import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { type IDropdownMenu } from '../../interfaces/styledComponents';
import { BtnPattern } from '../../styles/globalStyles';

export const Header = styled.header`
  background-color: var(--bg-grey);
  color: var(--text-light);
  @media (max-width: 840px) {
    position: relative;
  }
`;

export const BtnPatternLogin = styled(BtnPattern)`
  @media (max-width: 840px) {
    margin-top: 5px;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const LogoLink = styled(Link)``;

export const LinksFretes = styled.div<IDropdownMenu>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  ul li a {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    text-decoration: none;
    color: var(--bg-ligth);
    font-size: var(--font-medium);
    transition: 0.5s;
    &:hover {
      color: var(--btn-hover);
    }
  }
  .active {
    color: var(--btn-hover);
  }

  .linkMobile,
  .buttonLoginMobile {
    display: none;
  }

  @media (max-width: 840px) {
    & {
      display: ${({ show }) =>
        typeof show === 'boolean' && show ? 'flex' : 'none'};
      padding: 0px 30px 10px 30px;
      width: 100%;
      flex-direction: column;
      align-items: flex-start;
      background-color: initial;
      position: absolute;
      top: 100%;
      left: 0;
      background-color: var(--bg-grey);
      z-index: 1000;
      gap: 10px;
    }

    .linkMobile,
    .buttonLoginMobile {
      display: block;
    }

    ul {
      width: 100%;
      flex-direction: column;
      align-items: flex-start;
      gap: 0;
    }

    ul li {
      border-bottom: 1px solid #424242;
    }

    ul li a,
    ul li {
      width: 100%;
      padding: 5px 0;
    }
  }
`;

export const ButtonLogin = styled.button`
  border: none;
  background: none;
  @media (max-width: 840px) {
    display: none;
  }
`;

export const NavbarLinks = styled(Link)`
  text-decoration: none;
  color: var(--bg-ligth);
  font-size: var(--font-medium);
  &:hover {
    color: var(--btn-hover);
  }
`;

export const ButtonMenuContainer = styled.div<IDropdownMenu>`
  display: none;
  @media (max-width: 840px) {
    display: flex;
    justify-content: end;
    img {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      object-fit: cover;
    }

    button {
      display: flex;
      padding: 0.4rem 0.8rem;
      font-size: 1rem;
      align-items: center;
      border: none;
      color: var(--text-ligth);
      border: 1px solid #424242;
      border-radius: 6px;
      background: none;
      cursor: pointer;
      gap: 0.5rem;
      font-size: var(--font-medium);
    }

    button span {
      border-top: 2px solid;
      width: 20px;
    }

    button span::after,
    button span::before {
      content: '';
      display: block;
      width: 20px;
      height: 2px;
      background: currentColor;
      margin-top: 5px;
      transition: 0.3s;
      position: relative;
    }

    button span {
      border-top-color: ${({ animation }) =>
        typeof animation === 'boolean' && animation
          ? 'transparent'
          : 'initial'};
    }
    button span::before {
      transform: ${({ animation }) =>
        typeof animation === 'boolean' && animation
          ? 'rotate(135deg)'
          : 'none'};
    }
    button span::after {
      transform: ${({ animation }) =>
        typeof animation === 'boolean' && animation
          ? 'rotate(-135deg)'
          : 'none'};
      top: ${({ animation }) =>
        typeof animation === 'boolean' && animation ? '-7px' : 'none'};
    }
  }
`;
