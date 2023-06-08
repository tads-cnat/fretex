import {
  Container,
  Seta,
  Form,
  EnderecoDiv,
  ProdutoDiv,
  ProdutoDivContent,
  EntregaDiv,
  EntregaDivContent,
  ButtonDiv,
} from './styles';
import { Button } from '../../../../components';
import { ReactComponent as Arrowleft } from '../../../../assets/images/arrow-left-circle.svg';
import { type SubmitHandler } from 'react-hook-form';
import { schemaPedido } from '../../schemas';
import { type IPedidoFormData } from '../../../../interfaces';
import { useNavigate } from 'react-router-dom';
import PedidoService from '../../../../services/PedidoService';
import TipoVeiculoService from '../../../../services/TipoVeiculoService';
import { useEffect, useState } from 'react';
import { Turnos } from './turnos';
import { useAddress } from '../../../../hooks/useAddress';
import { toast } from 'react-toastify';
import { handleChangeInputCEP } from '../../../../utils/handleChangeCEP';

interface ITiposDeVeiculo {
  id: number;
  descricao: string;
}

const isErrorDateRange = (
  startDate: string,
  startShift: string,
  endDate: string,
  endShift: string,
  setError: (text: string) => void,
  setErrorTurno: (text: string) => void,
  setFocus: (text: any) => any,
): boolean => {
  const startDateArray = startDate.split('-').map((num) => Number(num));
  const endDateArray = endDate.split('-').map((num) => Number(num));
  const today = new Date();
  const startDateFormated = new Date(
    startDateArray[0],
    startDateArray[1] - 1,
    startDateArray[2],
  );
  const endDateFormated = new Date(
    endDateArray[0],
    endDateArray[1] - 1,
    endDateArray[2],
  );
  const todayFormated = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  );

  if (startDateFormated < todayFormated) {
    setError('Data de coleta não pode ser menor que a data de hoje!');
    return true;
  }

  if (startDateFormated > endDateFormated) {
    setError('Data de coleta não pode ser maior que a data de entrega!');
    return true;
  }

  if (
    startDateFormated.getDate() === endDateFormated.getDate() &&
    startDateFormated.getMonth() === endDateFormated.getMonth() &&
    startDateFormated.getFullYear() === endDateFormated.getFullYear()
  ) {
    if (startShift === 'TA') {
      if (endShift === 'MA') {
        setFocus('turno_coleta');
        setErrorTurno('Turnos inválidos!');
        return true;
      }
    } else if (startShift === 'NO') {
      if (endShift === 'MA' || endShift === 'TA') {
        setFocus('turno_coleta');
        setErrorTurno('Turnos inválidos!');
        return true;
      }
    }
  }

  if (today.getHours() >= 12) {
    if (startShift === 'MA') {
      setFocus('turno_coleta');
      setErrorTurno('Turnos inválidos! Hoje já está à tarde');
      return true;
    }
  }

  return false;
};

export const FormRegisterFrete = (): JSX.Element => {
  const navigate = useNavigate();
  const [tiposDeVeiculo, setTiposDeVeiculo] = useState<ITiposDeVeiculo[]>([]);
  const {
    register,
    completeAddress,
    handleSubmit,
    setValue,
    setFocus,
    formState: { errors },
  } = useAddress<IPedidoFormData>(schemaPedido);
  const [errorImg, setErrorImg] = useState('');
  const [errorDate, setErrorDate] = useState('');
  const [errorTurno, setErrorTurno] = useState('');

  const onSubmit: SubmitHandler<IPedidoFormData> = (data) => {
    setErrorImg('');
    setErrorDate('');
    setErrorTurno('');
    const formData: any = new FormData();
    const { origem, destino, produto, ...pedido } = data;
    const tipoVeiculo = pedido.tipo_veiculo.map((item) => Number(item));
    const imagemUrl = produto.imagem_url[0];
    if (
      isErrorDateRange(
        pedido.data_coleta,
        pedido.turno_coleta,
        pedido.data_entrega,
        pedido.turno_entrega,
        setErrorDate,
        setErrorTurno,
        setFocus,
      )
    ) {
      return;
    }

    if (produto.imagem_url.length === 0) {
      setErrorImg('Campo Obrigatório');
      setFocus('produto.imagem_url');
      return;
    }

    Object.entries(origem).forEach(([key, value]) => {
      if (value !== null && value !== undefined)
        formData.append(`origem.${key}`, value);
    });
    Object.entries(destino).forEach(([key, value]) => {
      if (value !== null && value !== undefined)
        formData.append(`destino.${key}`, value);
    });
    Object.entries(produto).forEach(([key, value]) => {
      if (imagemUrl && key === 'imagem_url')
        formData.append(`produto.${key}`, imagemUrl);
      else if (value) formData.append(`produto.${key}`, value);
    });
    Object.entries(pedido).forEach(([key, value]) => {
      if (value && key === 'tipo_veiculo')
        formData.append(`tipo_veiculo[]`, tipoVeiculo);
      else if (value) formData.append(`${key}`, value);
    });
    /*for (const pair of formData.entries()) {
      console.log(`${pair[0]}, ${pair[1]}`);
    }*/
    PedidoService.post(formData)
      .then(() => {
        toast.success('Pedido cadastrado com sucesso!');
        navigate('/dashboard');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    TipoVeiculoService.getAll()
      .then((res) => {
        setTiposDeVeiculo(res.data);
      })
      .catch((error) => {
        console.log(error);
      }); // eslint-disable-next-line
  }, []);

  return (
    <>
      <Container>
        <div>
          <h1>Cadastro de pedido</h1>
          <Seta
            onClick={() => {
              navigate(-1);
            }}
          >
            <Arrowleft /> Voltar
          </Seta>
        </div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <EnderecoDiv>
            <div>
              <h3>Endereço de Coleta</h3>
              <label>
                <span>CEP *</span>
                <input
                  {...register('origem.CEP')}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handleChangeInputCEP(e, setValue, 'origem.CEP');
                  }}
                  onBlur={completeAddress}
                  type="text"
                  placeholder="Digite o CEP"
                />
                {errors.origem?.CEP != null && (
                  <p className="error">{errors.origem.CEP?.message}</p>
                )}
              </label>

              <label>
                <span>Rua *</span>
                <input
                  {...register('origem.rua')}
                  type="text"
                  placeholder="Digite o nome da rua"
                />
                {errors.origem?.rua != null && (
                  <p className="error">{errors.origem.rua?.message}</p>
                )}
              </label>

              <label>
                <span>Número *</span>
                <input
                  {...register('origem.numero')}
                  type="number"
                  placeholder="Digite o numero da casa"
                />
                {errors.origem?.numero != null && (
                  <p className="error">{errors.origem.numero?.message}</p>
                )}
              </label>

              <label>
                <span>Bairro *</span>
                <input
                  {...register('origem.bairro')}
                  type="string"
                  placeholder="Digite o bairro"
                />
                {errors.origem?.bairro != null && (
                  <p className="error">{errors.origem.bairro?.message}</p>
                )}
              </label>

              <label>
                <span>Cidade *</span>
                <input
                  {...register('origem.cidade')}
                  type="text"
                  placeholder="Digite a Cidade"
                />
                {errors.origem?.cidade != null && (
                  <p className="error">{errors.origem.cidade?.message}</p>
                )}
              </label>

              <label>
                <span>Estado *</span>
                <input
                  {...register('origem.estado')}
                  type="text"
                  placeholder="Digite o Estado"
                />
                {errors.origem?.estado != null && (
                  <p className="error">{errors.origem.estado?.message}</p>
                )}
              </label>
              <label>
                <span>Complemento</span>
                <input
                  {...register('origem.complemento')}
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
                  {...register('destino.CEP')}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handleChangeInputCEP(e, setValue, 'destino.CEP');
                  }}
                  onBlur={completeAddress}
                  type="text"
                  placeholder="Digite o CEP"
                />
                {errors.destino?.CEP != null && (
                  <p className="error">{errors.destino.CEP?.message}</p>
                )}
              </label>
              <label>
                <span>Rua *</span>
                <input
                  {...register('destino.rua')}
                  type="text"
                  placeholder="Digite o nome da rua"
                />
                {errors.destino?.rua != null && (
                  <p className="error">{errors.destino.rua?.message}</p>
                )}
              </label>
              <label>
                <span>Número *</span>
                <input
                  {...register('destino.numero')}
                  type="number"
                  placeholder="Digite o numero da casa"
                />
                {errors.destino?.numero != null && (
                  <p className="error">{errors.destino.numero?.message}</p>
                )}
              </label>
              <label>
                <span>Bairro *</span>
                <input
                  {...register('destino.bairro')}
                  type="string"
                  placeholder="Digite o bairro"
                />
                {errors.destino?.bairro != null && (
                  <p className="error">{errors.destino.bairro?.message}</p>
                )}
              </label>
              <label>
                <span>Cidade *</span>
                <input
                  {...register('destino.cidade')}
                  type="text"
                  placeholder="Digite a Cidade"
                />
                {errors.destino?.cidade != null && (
                  <p className="error">{errors.destino.cidade?.message}</p>
                )}
              </label>
              <label>
                <span>Estado *</span>
                <input
                  {...register('destino.estado')}
                  type="text"
                  placeholder="Digite o Estado"
                />
                {errors.destino?.estado != null && (
                  <p className="error">{errors.destino.estado?.message}</p>
                )}
              </label>
              <label>
                <span>Complemento</span>
                <input
                  {...register('destino.complemento')}
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
                    {...register('produto.nome')}
                    type="text"
                    placeholder="Digite o nome do produto"
                  />
                  {errors.produto?.nome != null && (
                    <p className="error">{errors.produto.nome?.message}</p>
                  )}
                </label>
                <div className="containerTipoVeiculo">
                  <span>Tipos de veículo</span>
                  <div className="tipoveiculo">
                    {tiposDeVeiculo?.map((tipoveiculo) => (
                      <label
                        key={tipoveiculo.id}
                        className="checkbox_tipoveiculo"
                      >
                        <input
                          {...register('tipo_veiculo')}
                          type="checkbox"
                          value={tipoveiculo.id}
                        />
                        {tipoveiculo.descricao}
                      </label>
                    ))}
                  </div>
                  {errors.tipo_veiculo != null && (
                    <p className="error">{errors.tipo_veiculo?.message}</p>
                  )}
                </div>
              </div>
              <div>
                <label>
                  <span>Foto do produto</span>
                  <input
                    {...register('produto.imagem_url')}
                    type="file"
                    //  onChange={handleChange}
                    accept="image/jpeg,image/png,image/gif"
                  />
                </label>
                {errorImg !== '' && Boolean(errorImg) && (
                  <p className="error">{errorImg}</p>
                )}
                <label>
                  <span>Observaçoes</span>
                  <textarea
                    {...register('observacao')}
                    placeholder="Digite as observações"
                  />
                </label>
                {errors.observacao != null && (
                  <p className="error">{errors.observacao?.message}</p>
                )}
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
                    {...register('nomeDestinatario')}
                    type="text"
                    placeholder="Digite o nome do destinatario"
                  />
                  {errors.nomeDestinatario != null && (
                    <p className="error">{errors.nomeDestinatario?.message}</p>
                  )}
                </label>
              </div>
            </EntregaDivContent>
            <EntregaDivContent>
              <div>
                <label>
                  <span>Turno Coleta *</span>
                  <select {...register('turno_coleta')}>
                    <option value="">Selecione uma opção</option>
                    {Turnos.map((turno, index) => (
                      <option key={index} value={turno.value}>
                        {turno.name}
                      </option>
                    ))}
                  </select>
                </label>
                {errors.turno_coleta != null && (
                  <p className="error">{errors.turno_coleta?.message}</p>
                )}
                {errorTurno !== '' && Boolean(errorTurno) && (
                  <p className="error">{errorTurno}</p>
                )}
              </div>
              <div>
                <label>
                  <span>Turno Entrega *</span>
                  <select {...register('turno_entrega')}>
                    <option value="">Selecione uma opção</option>
                    {Turnos.map((turno, index) => (
                      <option key={index} value={turno.value}>
                        {turno.name}
                      </option>
                    ))}
                  </select>
                </label>
                {errors.turno_entrega != null && (
                  <p className="error">{errors.turno_entrega?.message}</p>
                )}
              </div>
            </EntregaDivContent>
            <EntregaDivContent>
              <div>
                <label>
                  <span>Data Coleta *</span>
                  <input
                    {...register('data_coleta')}
                    type="date"
                    placeholder="Digite o nome do destinatario"
                  />
                </label>
                {errors.data_coleta != null && (
                  <p className="error">{errors.data_coleta?.message}</p>
                )}
                {errorDate !== '' && Boolean(errorDate) && (
                  <p className="error">{errorDate}</p>
                )}
              </div>
              <div>
                <label>
                  <span>Data Entrega *</span>
                  <input
                    {...register('data_entrega')}
                    type="date"
                    placeholder="Digite o turno da entrega"
                  />
                </label>
                {errors.data_entrega != null && (
                  <p className="error">{errors.data_entrega?.message}</p>
                )}
              </div>
            </EntregaDivContent>
          </EntregaDiv>
          <ButtonDiv>
            <Button isButton type="submit" fontSize="large">
              Finalizar pedido
            </Button>
          </ButtonDiv>
        </Form>
      </Container>
    </>
  );
};
