import React from 'react';
import { LinkYellow, BtnYellow } from './styles';

interface IButton {
  type?: 'button' | 'submit' | 'reset' | undefined;
  fontSize?: 'medium' | 'large';
  link?: string;
  children: any;
  onClick?: () => void;
  isButton?: boolean;
}

const Button = ({
  link,
  children,
  onClick,
  isButton,
  type,
  fontSize,
}: IButton): JSX.Element => {
  if (isButton === true) {
    if (fontSize === 'large') {
      return (
        <BtnYellow type={type} fontSize="var(--font-large)" onClick={onClick}>
          {children}
        </BtnYellow>
      );
    } else {
      return (
        <BtnYellow type={type} fontSize="var(--font-medium)" onClick={onClick}>
          {children}
        </BtnYellow>
      );
    }
  } else {
    return (
      <LinkYellow to={link ?? ''} onClick={onClick}>
        {children}
      </LinkYellow>
    );
  }
};

export default Button;
