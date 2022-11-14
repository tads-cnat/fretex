import Footer from "../Footer";
import Navbar from "../Navbar";

interface ILayout {
  children?: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: "95vh" }}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
