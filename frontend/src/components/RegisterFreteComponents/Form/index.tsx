import {
  Container,
  Seta,
  Form,
  EnderecoDiv,
  ProdutoDiv,
  ProdutoDivContent,
  EntregaDiv,
  EntregaDivContent,
  BtnYellow,
  ButtonDiv,
} from "./styles";
import arrowleft from "../../../assets/images/arrow-left-circle.svg";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaPedido } from "../../../pages/RegisterFrete/schemas";
import { IPedido } from "../../../interfaces";
import { useNavigate } from "react-router-dom";
import useApi from "../../../hooks/useApi";
import { useEffect, useState } from "react";
import { Turnos } from "./turnos";
import { number } from "yup";

interface ITiposDeVeiculo {
  id: number;
  descricao: string;
}

const Index = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setFocus,
    getValues,
    setValue,
  } = useForm<IPedido>({
    resolver: yupResolver(schemaPedido),
  });

  const navigate = useNavigate();
  const [tiposDeVeiculo, setTiposDeVeiculo] = useState<ITiposDeVeiculo[]>([]);
  const { registerPedido, tiposVeiculo, getCEP } = useApi();

  const onSubmit: SubmitHandler<IPedido> = (data) => {
    const pedido: IPedido = {
      produto: {
        nome: data.produto.nome,
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
      tipo_veiculo: data.tipo_veiculo.map((tipo) => Number(tipo)),
      observacao: data.observacao,
      nomeDestinatario: data.nomeDestinatario,
      data_coleta: data.data_coleta,
      data_entrega: data.data_entrega,
      turno_entrega: data.turno_entrega,
      turno_coleta: data.turno_coleta,
    };

    registerPedido(pedido).catch((error) => console.log(error));

    console.log(pedido);
    //navigate("/dashboard");
  };

  useEffect(() => {
    tiposVeiculo()
      .then((res) => setTiposDeVeiculo(res.data))
      .catch((error) => console.log(error));
    console.log();
  }, []);

  useEffect(() => {
    if (watch("origem.CEP").length === 9)
      getCEP(getValues("origem.CEP").replace("/", "")).then((res) => {
        setValue("origem.rua", res.logradouro);
        setValue("origem.bairro", res.bairro);
        setValue("origem.cidade", res.localidade);
        setValue("origem.estado", res.uf);
      });
  }, [watch, getValues, getCEP, setValue]);

  return (
    <>
      <Container>
        <div>
          <h1>Cadastro de coleta</h1>
          <Seta>
            <img src={arrowleft} alt="voltar" /> Voltar
          </Seta>
        </div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <EnderecoDiv>
            <div>
              <h3>Endereço de Coleta</h3>
              <label>
                <span>CEP *</span>
                <input
                  {...register("origem.CEP")}
                  type="text"
                  placeholder="Digite o CEP"
                />
                {errors.origem?.CEP && (
                  <p className="error">{errors.origem.CEP?.message}</p>
                )}
              </label>

              <label>
                <span>Rua *</span>
                <input
                  {...register("origem.rua")}
                  type="text"
                  placeholder="Digite o nome da rua"
                />
                {errors.origem?.rua && (
                  <p className="error">{errors.origem.rua?.message}</p>
                )}
              </label>

              <label>
                <span>Número *</span>
                <input
                  {...register("origem.numero")}
                  type="number"
                  placeholder="Digite o numero da casa"
                />
                {errors.origem?.numero && (
                  <p className="error">{errors.origem.numero?.message}</p>
                )}
              </label>

              <label>
                <span>Bairro *</span>
                <input
                  {...register("origem.bairro")}
                  type="string"
                  placeholder="Digite o bairro"
                />
                {errors.origem?.bairro && (
                  <p className="error">{errors.origem.bairro?.message}</p>
                )}
              </label>

              <label>
                <span>Cidade *</span>
                <input
                  {...register("origem.cidade")}
                  type="text"
                  placeholder="Digite a Cidade"
                />
                {errors.origem?.cidade && (
                  <p className="error">{errors.origem.cidade?.message}</p>
                )}
              </label>

              <label>
                <span>Estado *</span>
                <input
                  {...register("origem.estado")}
                  type="text"
                  placeholder="Digite o Estado"
                />
                {errors.origem?.estado && (
                  <p className="error">{errors.origem.estado?.message}</p>
                )}
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
                <span>CEP *</span>
                <input
                  {...register("destino.CEP")}
                  type="text"
                  placeholder="Digite o CEP"
                />
                {errors.destino?.CEP && (
                  <p className="error">{errors.destino.CEP?.message}</p>
                )}
              </label>
              <label>
                <span>Rua *</span>
                <input
                  {...register("destino.rua")}
                  type="text"
                  placeholder="Digite o nome da rua"
                />
                {errors.destino?.rua && (
                  <p className="error">{errors.destino.rua?.message}</p>
                )}
              </label>
              <label>
                <span>Número *</span>
                <input
                  {...register("destino.numero")}
                  type="number"
                  placeholder="Digite o numero da casa"
                />
                {errors.destino?.numero && (
                  <p className="error">{errors.destino.numero?.message}</p>
                )}
              </label>
              <label>
                <span>Bairro *</span>
                <input
                  {...register("destino.bairro")}
                  type="string"
                  placeholder="Digite o bairro"
                />
                {errors.destino?.bairro && (
                  <p className="error">{errors.destino.bairro?.message}</p>
                )}
              </label>
              <label>
                <span>Cidade *</span>
                <input
                  {...register("destino.cidade")}
                  type="text"
                  placeholder="Digite a Cidade"
                />
                {errors.destino?.cidade && (
                  <p className="error">{errors.destino.cidade?.message}</p>
                )}
              </label>
              <label>
                <span>Estado *</span>
                <input
                  {...register("destino.estado")}
                  type="text"
                  placeholder="Digite o Estado"
                />
                {errors.destino?.estado && (
                  <p className="error">{errors.destino.estado?.message}</p>
                )}
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
                  {errors.produto?.nome && (
                    <p className="error">{errors.produto.nome?.message}</p>
                  )}
                </label>
                <div className="containerTipoVeiculo">
                  <span>Tipos de veículo</span>
                  <div className="tipoveiculo">
                    {tiposDeVeiculo &&
                      tiposDeVeiculo?.map((tipoveiculo) => (
                        <label
                          key={tipoveiculo.id}
                          className="checkbox_tipoveiculo"
                        >
                          <input
                            {...register("tipo_veiculo")}
                            type="checkbox"
                            value={tipoveiculo.id}
                          />
                          {tipoveiculo.descricao}
                        </label>
                      ))}
                  </div>
                  {errors.tipo_veiculo && (
                    <p className="error">{errors.tipo_veiculo?.message}</p>
                  )}
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
                  {errors.nomeDestinatario && (
                    <p className="error">{errors.nomeDestinatario?.message}</p>
                  )}
                </label>
              </div>
            </EntregaDivContent>
            <EntregaDivContent>
              <div>
                <label>
                  <span>Turno Coleta *</span>
                  <select {...register("turno_coleta")}>
                    <option value="">Selecione uma opção</option>
                    {Turnos.map((turno) => (
                      <option value={turno.value}>{turno.name}</option>
                    ))}
                  </select>
                </label>
                {errors.turno_coleta && (
                  <p className="error">{errors.turno_coleta?.message}</p>
                )}
              </div>
              <div>
                <label>
                  <span>Turno Entrega *</span>
                  <select {...register("turno_entrega")}>
                    <option value="">Selecione uma opção</option>
                    {Turnos.map((turno) => (
                      <option value={turno.value}>{turno.name}</option>
                    ))}
                  </select>
                </label>
                {errors.turno_entrega && (
                  <p className="error">{errors.turno_entrega?.message}</p>
                )}
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
                {errors.data_coleta && (
                  <p className="error">{errors.data_coleta?.message}</p>
                )}
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
                {errors.data_entrega && (
                  <p className="error">{errors.data_entrega?.message}</p>
                )}
              </div>
            </EntregaDivContent>
          </EntregaDiv>
          <ButtonDiv>
            <BtnYellow type="submit">Finalizar pedido</BtnYellow>
          </ButtonDiv>
        </Form>
      </Container>
    </>
  );
};

export default Index;
