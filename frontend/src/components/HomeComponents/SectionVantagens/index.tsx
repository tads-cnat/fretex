import { SpanYellow, Wrapper } from "../../../styles";
import {
  VantagensContainer,
  VantagensFlex,
  VantagensGrid,
  VantagensH1,
  VantagensImage,
  VantagensP,
  VantagensText,
} from "./styles";
import diferencial from "../../../assets/images/diferencial.png";
import comunicacao from "../../../assets/images/comunicacao.svg";
import filtro from "../../../assets/images/filtro.svg";
import fundo from "../../../assets/images/fundo.svg";

const SectionVantagens = () => {
  return (
    <VantagensContainer img={fundo} id="vantagens">
      <Wrapper>
        <VantagensGrid>
          <div>
            <VantagensP>FRETES COM DESCRIÇÃO </VantagensP>
            <VantagensH1>
              Descubra as vantagens<SpanYellow>.</SpanYellow>
            </VantagensH1>
            <VantagensP>
              Os fretes com descrição ajudam os clientes a encontrarem um
              freteiro mais rápido. E consequentemente ajudam os freteiros a
              encontrarem os fretes ideais para eles.
            </VantagensP>
            <VantagensText>Vantagens</VantagensText>
            <VantagensFlex>
              <div>
                <img src={filtro} alt="filtro" />
                <h3>Filtros precisos</h3>
                <p>
                  Com a descrição os freteiros conseguem encontrar os fretes
                  mais próximos, além disso podem filtrar por região, preço,
                  entre outros.
                </p>
              </div>
              <div>
                <img src={comunicacao} alt="comunicação" />
                <h3>Comunicação</h3>
                <p>
                  A descrição mostra as informações necessárias sobre o frete,
                  portanto ajuda o feteiro a se preparar melhor para o serviço.
                </p>
              </div>
            </VantagensFlex>
          </div>
          <div>
            <VantagensImage src={diferencial} />
          </div>
        </VantagensGrid>
      </Wrapper>
    </VantagensContainer>
  );
};

export default SectionVantagens;
