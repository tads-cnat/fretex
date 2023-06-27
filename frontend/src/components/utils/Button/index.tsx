import { LinkYellow, BtnYellow } from './styles';
import { type MouseEvent } from 'react';
import { Loading } from '../';

interface IButton {
  type?: 'button' | 'submit' | 'reset' | undefined;
  Icon?: React.ElementType;
  isDisabled?: boolean;
  fontSize?: 'medium' | 'large';
  link?: string;
  children: any;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  isButton?: boolean;
}

export const Button = ({
  link,
  children,
  onClick,
  isButton,
  type,
  isDisabled,
  fontSize,
  Icon,
}: IButton): JSX.Element => {
  if (isButton === true) {
    return (
      <BtnYellow
        type={type}
        fontSize={
          fontSize === 'large' ? 'var(--font-large)' : 'var(--font-medium)'
        }
        onClick={onClick}
        disabled={isDisabled}
      >
        {Icon && !isDisabled && <Icon fontSize={'1.5rem'} />}
        {isDisabled ? (
          <Loading color="white" height="42px" svgWidth="60px" />
        ) : (
          children
        )}
      </BtnYellow>
    );
  } else {
    return (
      <LinkYellow to={link ?? ''} onClick={onClick}>
        {Icon && <Icon fontSize={'1.5rem'} />}
        {children}
      </LinkYellow>
    );
  }
};
