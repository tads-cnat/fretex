import { type ReactNode } from 'react';
import { Footer, Navbar } from '../';
import { Container, InitialButton } from './styles';

interface ILayout {
  children?: JSX.Element | JSX.Element[] | ReactNode | null;
}

export const Layout = ({ children }: ILayout): JSX.Element => {
  return (
    <>
      <Navbar id="inicio" />
      <Container>{children}</Container>
      <InitialButton href="#inicio">
        <div></div>
      </InitialButton>
      <Footer />
    </>
  );
};
