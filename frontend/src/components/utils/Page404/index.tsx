import React from 'react';
import { Container, Section404 } from './styles';
import { Button, SEO } from '../';

export const Page404 = (): JSX.Element => {
  return (
    <>
      <SEO title="Página não encontrada!" />
      <Container>
        <div>
          <h1>OPS!Não encontramos essa página.</h1>
          <p>Acho que você escolheu uma rota errada para o seu frete. </p>
        </div>
        <Section404>
          <span>
            <span>4</span> <span>0</span> <span>4</span>
          </span>
        </Section404>
        <Button link="">VOLTAR AO INÍCIO!</Button>
      </Container>
    </>
  );
};
