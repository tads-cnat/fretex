import React from "react";
import { SpanYellow,Wrapper } from "../../styles";
import {
  VantagemBox,
  VantagensContainer,
  VantagensFlex,
  VantagensGrid,
  VantagensH1,
  VantagensImage,
  VantagensP,
  VantagensText,
  VantagensWrapper,
} from "./styles";
import diferencial from "../../assets/images/diferencial.png";

const SectionVantagens = () => {
  return (
    <VantagensContainer>
      <Wrapper>
        <VantagensGrid>
          <VantagensWrapper>
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
              <VantagemBox></VantagemBox>
              <VantagemBox></VantagemBox>
            </VantagensFlex>
          </VantagensWrapper>
          <VantagensWrapper>
            <VantagensImage src={diferencial} />
          </VantagensWrapper>
        </VantagensGrid>
      </Wrapper>
    </VantagensContainer>
  );
};

export default SectionVantagens;
