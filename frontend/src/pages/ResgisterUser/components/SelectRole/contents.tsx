import { Logo } from '../../../../components';
import { ContainerContent } from './styles';

export const ClienteContent = (): JSX.Element => {

    return(
        <ContainerContent>
        <div>
          <section>
            <h1>
              <Logo width={'250px'} />
            </h1>

            <h2>Conta Cliente</h2>
            <p>
              Como cliente você pode cadastrar seus pedidos de frete e negociar
              diretamente com os nossos freteiros parceiros
            </p>
          </section>
        </div>
      </ContainerContent>
    );

};

export const FreteiroContent = (): JSX.Element => {
  return(
    <ContainerContent>
        <div>
          <section>
            <h1>
              <Logo width={'250px'} />
            </h1>

            <h2>Conta Freteiro</h2>
            <p>
              Na conta de freteiro você pode realizar propostas para vários
              pedidos de fretes diferentes, e fazer sua grana.
            </p>
          </section>
        </div>
      </ContainerContent>
  );


};