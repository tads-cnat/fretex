import {
  Container, Seta, Form,
  EnderecoDiv, ProdutoDiv,
  ProdutoDivContent, EntregaDiv,
  EntregaDivContent, BtnYellow, ButtonDiv
} from "./styles"
import arrowleft from "../../../assets/images/arrow-left-circle.svg"
import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { schemaPedido } from "../../../pages/RegisterFrete/schemas"
import { IPedido } from "../../../interfaces";
import { useNavigate } from "react-router-dom"
import useApi from "../../../hooks/useApi"
import { useEffect, useState} from "react"


interface ITiposDeVeiculo {
  id: number
  descricao: string
}

const Index = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setFocus, } = useForm<IPedido>({
      resolver: yupResolver(schemaPedido)
    })

  const navigate = useNavigate();
  const [tiposDeVeiculo, setTiposDeVeiculo] = useState<ITiposDeVeiculo[]>([])
  console.log(tiposDeVeiculo)
  const { registerPedido, tiposVeiculo } = useApi()
  const onSubmit: SubmitHandler<IPedido> = (data) => {
    console.log(data)

    const pedido: IPedido = {
      produto: {
        nome: data.produto.nome
      },
      origem: {
        rua: data.origem.rua,
        CEP: data.origem.CEP,
        numero: data.origem.numero,
        bairro: data.origem.bairro,
        cidade: data.origem.cidade,
        estado: data.origem.estado,
        complemento: data.origem.complemento,
      },
      destino: {
        rua: data.destino.rua,
        CEP: data.destino.CEP,
        numero: data.destino.numero,
        bairro: data.destino.bairro,
        cidade: data.destino.cidade,
        estado: data.destino.estado,
        complemento: data.destino.complemento,
      },
      tipo_veiculo: data.tipo_veiculo,
      observacao: data.observacao,
      nomeDestinatario: data.nomeDestinatario,
      data_coleta: data.data_coleta,
      data_entrega: data.data_entrega,
      turno_entrega: data.turno_entrega,
      turno_coleta: data.turno_coleta,
    };
    // const pedido2: IPedido = {
    //   produto: {
    //     nome: "string"
    //   },
    //   origem: {
    //     rua: "string",
    //       CEP: "string",
    //         numero: "string",
    //           bairro: "string",
    //             cidade: "string",
    //               estado: "string",
    //                 complemento: "string"
    //   },
    //   destino: {
    //     rua: "string",
    //       CEP: "string",
    //         numero: "string",
    //           bairro: "string",
    //             cidade: "string",
    //               estado: "string",
    //                 complemento: "string"
    //   },
    //   status: "CA",
    //     tipo_veiculo: [
    //       1
    //     ],
    //       observacao: "string",
    //         nomeDestinatario: "string",
    //           data_coleta: "2022-11-27",
    //             data_entrega: "2022-11-27",
    //               turno_entrega: "TA",
    //                 turno_coleta: "TA"
    // }
    registerPedido(pedido).catch((error) => console.log(error))
    console.log(pedido);
    //navigate("/login");
  };

  useEffect(() => {
    tiposVeiculo().then(res => setTiposDeVeiculo(res.data)).catch((error) => console.log(error))
    console.log()
  },[])

  return (
    <>
      <Container>
        <div>
          <h1>Cadastro de coleta</h1>
          <Seta><img src={arrowleft} alt="voltar" /> Voltar</Seta>
        </div>
        <Form onSubmit={handleSubmit(onSubmit)}>
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
                  {...register("destino.bairro")}
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
                <div>
                  <span>Tipos de veiculo</span>
                  <div className="div_tipoveiculo">
                    {tiposDeVeiculo && tiposDeVeiculo?.map((tipoveiculo) => (
                      <label key={tipoveiculo.id} className="checkbox_tipoveiculo">
                          <input 
                            {...register("tipo_veiculo")}
                            type="checkbox"
                            value={tipoveiculo.id}
                          />
                          {tipoveiculo.descricao}
                      </label>
                    ))}
                  </div>
              </div>
              </div>
              <div>
                {/* <label>
                  <span>Foto do produto</span>
                  <input
                    {...register("FOTO")}
                    type="file"
                    placeholder="Foto do produto"
                  />
                </label> */}
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
                    type="date"
                    placeholder="Digite o nome do destinatario"
                  />
                </label>
              </div>
              <div>
                <label>
                  <span>Data Entrega *</span>
                  <input
                    {...register("data_entrega")}
                    type="date"
                    placeholder="Digite o turno da entrega"
                  />
                </label>
              </div>
            </EntregaDivContent>
          </EntregaDiv>
          <ButtonDiv >
            <BtnYellow type="submit">Finalizar pedido</BtnYellow>
          </ButtonDiv>
        </Form>
      </Container>
    </>
  )
}

export default Index