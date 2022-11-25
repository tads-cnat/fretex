import {
  Container, Seta, Form,
  EnderecoDiv, ProdutoDiv,
  ProdutoDivContent, EntregaDiv,
  EntregaDivContent, BtnYellow, ButtonDiv
} from "./styles"
import arrowleft from "../../../assets/images/arrow-left-circle.svg"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { schemaPedido } from "../../../pages/RegisterFrete/schemas"
import { IPedido } from "../../../interfaces";

const Index = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setFocus, } = useForm<IPedido>({
      resolver: yupResolver(schemaPedido)
    })
  const option = []

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
              <h3>Endereço de Coleta</h3>
              <label>
                <span>Rua *</span>
                <input
                  {...register("origem.rua")}
                  type="text"
                  placeholder="Digite o nome da rua"
                />
              </label>
              <label>
                <span>Número *</span>
                <input
                  {...register("origem.numero")}
                  type="number"
                  placeholder="Digite o numero da casa"
                />
              </label>
              <label>
                <span>Bairro *</span>
                <input
                  {...register("origem.bairro")}
                  type="string"
                  placeholder="Digite o bairro"
                />
              </label>
              <label>
                <span>Cidade *</span>
                <input
                  {...register("origem.cidade")}
                  type="text"
                  placeholder="Digite a Cidade"
                />
              </label>
              <label>
                <span>Estado *</span>
                <input
                  {...register("origem.estado")}
                  type="text"
                  placeholder="Digite o Estado"
                />
              </label>
              <label>
                <span>CEP *</span>
                <input
                  {...register("origem.CEP")}
                  type="text"
                  placeholder="Digite o CEP"
                />
              </label>
              <label>
                <span>Complemento</span>
                <input
                  {...register("origem.complemento")}
                  type="text"
                  placeholder="Digite o complemento da entrega"
                />
              </label>
            </div>
            <div>
              <h3>Endereço de Entrega</h3>
              <label>
                <span>Rua *</span>
                <input
                  {...register("destino.rua")}
                  type="text"
                  placeholder="Digite o nome da rua"
                />
              </label>
              <label>
                <span>Número *</span>
                <input
                  {...register("destino.numero")}
                  type="number"
                  placeholder="Digite o numero da casa"
                />
              </label>
              <label>
                <span>Bairro *</span>
                <input
                  {...register("origem.bairro")}
                  type="string"
                  placeholder="Digite o bairro"
                />
              </label>
              <label>
                <span>Cidade *</span>
                <input
                  {...register("destino.cidade")}
                  type="text"
                  placeholder="Digite a Cidade"
                />
              </label>
              <label>
                <span>Estado *</span>
                <input
                  {...register("destino.estado")}
                  type="text"
                  placeholder="Digite o Estado"
                />
              </label>
              <label>
                <span>CEP *</span>
                <input
                  {...register("destino.CEP")}
                  type="text"
                  placeholder="Digite o CEP"
                />
              </label>
              <label>
                <span>Complemento</span>
                <input
                  {...register("destino.complemento")}
                  type="text"
                  placeholder="Digite o complemento da coleta"
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
                    {...register("produto.nome")}
                    type="text"
                    placeholder="Digite o nome do produto"
                  />
                </label>
                <label>
                  <span>Tipos de veiculo</span>
                  {/* select*/} 
                  <input
                    {...register("tipo_veiculo")}
                    type="text"
                    placeholder="Digite o tipo de veiculo"
                  />
                </label>
              </div>
              <div>
                <label>
                  <span>Foto do produto</span>
                  <input
                    {...register("tipo_veiculo")}
                    type="file"
                    placeholder="Foto do produto"
                  />
                </label>
                <label>
                  <span>Observaçoes</span>
                  <textarea
                    {...register("observacao")}
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
                    {...register("nomeDestinatario")}
                    type="text"
                    placeholder="Digite o nome do destinatario"
                  />
                </label>
              </div>
            </EntregaDivContent>
            <EntregaDivContent>
              <div>
                <label>
                  <span>Turno Coleta *</span>
                  <input
                    {...register("turno_coleta")}
                    type="text"
                    placeholder="Digite o nome do destinatario"
                  />
                </label>
              </div>
              <div>
                <label>
                  <span>Turno Entrega *</span>
                  <input
                    {...register("turno_entrega")}
                    type="text"
                    placeholder="Digite o turno da entrega"
                  />
                </label>
              </div>
            </EntregaDivContent>
            <EntregaDivContent>
              <div>
                <label>
                  <span>Data Coleta *</span>
                  <input
                    {...register("data_coleta")}
                    type="text"
                    placeholder="Digite o nome do destinatario"
                  />
                </label>
              </div>
              <div>
                <label>
                  <span>Data Entrega *</span>
                  <input
                    {...register("data_entrega")}
                    type="text"
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

export default Index