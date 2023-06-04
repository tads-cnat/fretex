import { Container, Description, Title } from './styles';
import { Wrapper } from '../../styles/globalStyles';
import {
  HomeBox,
  HomeVideoSection,
  SectionVantagens,
  Registration,
  InfoSection,
} from './components';
import Layout from '../../components/Layout';
import Head from '../../components/Head';
import { homeBoxData } from './contants';

const Home = (): JSX.Element => {
  return (
    <>
      <Head title="Home" description="FreteX sua encomenda sem complicação" />
      <Layout>
        <HomeVideoSection />
        <Wrapper>
          <Title id="howWorks">Como a FreteX funciona?</Title>

          <Description>
            Nós facilitamos a oferta do serviço de frete em todo o Brasil,
            atendendo Clientes e Freteiros Autônomos.
          </Description>

          <Container>
            {homeBoxData.map((item, i) => (
              <HomeBox key={i} {...item} />
            ))}
          </Container>
        </Wrapper>
        <SectionVantagens />
        <InfoSection />
        <Registration />
      </Layout>
    </>
  );
};

export default Home;
