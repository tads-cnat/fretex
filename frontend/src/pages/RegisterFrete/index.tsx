import { SEO, Footer, Navbar } from '../../components';
import { FormRegisterFrete } from './components';
import { Wrapper } from '../../styles/globalStyles';
import { ContainerPrincipal } from './styles';

const index = (): JSX.Element => {
  return (
    <>
      <SEO title="Pedido de frete" />
      <Navbar />
      <ContainerPrincipal>
        <Wrapper bgColor="#f5f5f5">
          <FormRegisterFrete />
        </Wrapper>
      </ContainerPrincipal>
      <Footer />
    </>
  );
};

export default index;
