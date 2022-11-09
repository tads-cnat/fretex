import { Container, Seta, Form,
  EnderecoDiv, ProdutoDiv,
  ProdutoDivContent, EntregaDiv,
  EntregaDivContent, BtnYellow,ButtonDiv} from "./styles"
import arrowleft from "../../../assets/images/arrow-left-circle.svg"


const index = () => {
  return (
    <>
      <Container>
        <div>
          <h1>Cadastro de coleta</h1>
          <Seta><img src={arrowleft} alt="voltar" /> Voltar</Seta>
        </div>
          <Form method="POST">
            <EnderecoDiv>
              <div>
                <h3>Endereço de entrega</h3>
                <label>
                  <span>Rua*</span>
                  <input
                    type="text"
                    name="rua_coleta"
                    required
                    placeholder="Digite o nome da rua"
                  />
                </label>
                <label>
                  <span>Número*</span>
                  <input
                    type="number"
                    name="numero_coleta"
                    required
                    placeholder="Digite o numero da casa"
                  />
                </label>
                <label>
                  <span>Cidade*</span>
                  <input
                    type="text"
                    name="cidade_coleta"
                    required
                    placeholder="Digite a Cidade"
                  />
                </label>
                <label>
                  <span>Estado*</span>
                  <input
                    type="text"
                    name="estado_coleta"
                    required
                    placeholder="Digite o Estado"
                  />
                </label>
                <label>
                  <span>CEP*</span>
                  <input
                    type="text"
                    name="cep_coleta"
                    required
                    placeholder="Digite o CEP"
                  />
                </label>
              </div>
              <div>
                <h3>Endereço de coleta</h3>
                <label>
                  <span>Rua*</span>
                  <input
                    type="text"
                    name="rua_entrega"
                    required
                    placeholder="Digite o nome da rua"
                  />
                </label>
                <label>
                  <span>Número*</span>
                  <input
                    type="number"
                    name="numero_entrega"
                    required
                    placeholder="Digite o numero da casa"
                  />
                </label>
                <label>
                  <span>Cidade*</span>
                  <input
                    type="text"
                    name="cidade_entrega"
                    required
                    placeholder="Digite a Cidade"
                  />
                </label>
                <label>
                  <span>Estado*</span>
                  <input
                    type="text"
                    name="estado_entrega"
                    required
                    placeholder="Digite o Estado"
                  />
                </label>
                <label>
                  <span>CEP*</span>
                  <input
                    type="text"
                    name="cep_entrega"
                    required
                    placeholder="Digite o CEP"
                  />
                </label>
              </div>
            </EnderecoDiv>

            <ProdutoDiv>
              <h3>Dados do produto</h3>
              <ProdutoDivContent>
                <div>
                  <label>
                    <span>Nome do produto</span>
                    <input
                      type="text"
                      name="nome_produto"
                      required
                      placeholder="Digite o nome do produto"
                    />
                  </label>
                  <label>
                    <span>Tipos de veiculo</span>
                    <input
                      type="text"
                      name="tipos_veiculo"
                      required
                      placeholder="Digite o tipo de veiculo"
                    />
                  </label>
                </div>
                <div>
                  <label>
                    <span>Foto do produto</span>
                    <input
                      type="file"
                      name="foto_produto"
                      required
                      placeholder="Foto do produto"
                    />
                  </label>
                  <label>
                    <span>Observaçoes</span>
                    <textarea
                      name="observações"
                      required
                      placeholder="Digite as observações"
                    />
                  </label>
                </div>
              </ProdutoDivContent>
            </ProdutoDiv>

            <EntregaDiv>
              <h3>Dados da entrega</h3>
              <EntregaDivContent>
                <div>
                  <label>
                    <span>Destinatario</span>
                    <input
                      type="text"
                      name="destinatario"
                      required
                      placeholder="Digite o nome do destinatario"
                    />
                  </label>
                </div>
                <div>
                  <label>
                    <span>Turno</span>
                    <input
                      type="text"
                      name="turno"
                      required
                      placeholder="Digite o turno da entrega"
                    />
                  </label>
                </div>
              </EntregaDivContent>
            </EntregaDiv>
            <ButtonDiv>
              <BtnYellow>Finalizar pedido</BtnYellow>
            </ButtonDiv>
          </Form>
      </Container>
    </>
  )
}

export default index