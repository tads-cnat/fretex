import React from 'react';
import { LinkYellow, BtnYellow } from './styles';

interface IButton {
  type?: "button" | "submit" | "reset" | undefined;
  link?: string;
  children: string;
  onClick?: () => void;
  isButton?: boolean;
}

const Button = ({ link, children, onClick, isButton, type }: IButton): JSX.Element => {
  
  if (isButton === true) {
    return (
      <BtnYellow type={type}>
        {children}
      </BtnYellow>
    );
  } else {
    return (
      <LinkYellow to={link ?? ""} onClick={onClick}>
        {children}
      </LinkYellow>
    );
  }

};

export default Button;
