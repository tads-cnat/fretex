import Footer from "../Footer";
import Navbar from "../Navbar";
import { Container, InitialButton } from "./styles";

interface ILayout {
  children?: JSX.Element | JSX.Element[] | null;
}

const Layout = ({ children }: ILayout) => {
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

export default Layout;
