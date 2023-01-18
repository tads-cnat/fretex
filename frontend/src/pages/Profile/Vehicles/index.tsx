import { useState, useEffect, useContext } from "react"
import veiculo from "../../../assets/images/veiculo.png"
import { ReactComponent as PlusVeiculo } from "../../../assets/images/PlusCircle.svg"
import ModalComponent from '../../../components/Global/Modal';
import { ContainerMain, ContainerInputs, ContainerImagem, ButtonCadastro, Preview } from './styles';
import { useToggle } from '../../../hooks/useToggle';
import { useForm, SubmitHandler } from 'react-hook-form';
import useApi from '../../../hooks/useApi';
import { IVeiculo } from "../../../interfaces";
import { useContextProfile } from "..";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaVeiculo } from "./schema";

interface ITiposDeVeiculo {
  id: number;
  descricao: string;
}


const Vehicles = () => {

  const { value, toggle, setAsFalse, setAsTrue } = useToggle();
  const { register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm<IVeiculo>({
    resolver: yupResolver(schemaVeiculo)
  });
  const [imagemVeiculo, setImagemVeiculo] = useState();
  const [imagemPreview, setImagemPreview] = useState<string | undefined>();
  const [tiposDeVeiculo, setTiposDeVeiculo] = useState<ITiposDeVeiculo[]>();
  const { registerVeiculo, tiposVeiculo } = useApi();
  const { user } = useContextProfile();
  useEffect(() => {
    tiposVeiculo()
      .then((res) => setTiposDeVeiculo(res.data))
      .catch((error) => console.log(error));
  }, []);


  const onSubmit: SubmitHandler<IVeiculo> = (data) => {
    console.log(data)
    const formData: any = new FormData()
    Object.entries(data).forEach(([key, value]) => {
      if (value && key === "url_foto") formData.append(`${key}`, imagemVeiculo)
      else if (value) formData.append(`${key}`, value)
    })
    formData.append("freteiro", user.id)
    for (const [key, value] of formData) {
      console.log(`${key}: ${value}`);
    }
    registerVeiculo(formData)
      .then(() => {
        setAsFalse()
      })
  }

  const onChange = (e: any) => {
    try {
      const file = e.target.files[0];
      setImagemVeiculo(file)
      setImagemPreview(URL.createObjectURL(file))
    } catch (err) {
      setImagemPreview(undefined)
    }
  }

  return (
    <>
      <ButtonCadastro onClick={setAsTrue}>
        <PlusVeiculo /> Cadastrar Veículo
      </ButtonCadastro>
      <ModalComponent title="Cadastrar Veículo" toggle={toggle} value={value}>
        <form onSubmit={handleSubmit(onSubmit)} >
          <ContainerMain>
            <ContainerInputs>
              <label className="inputsText">
                <h2>Marca *</h2>
                <input
                  {...register("marca")}
                  type="text"
                  placeholder="Marca do veículo"
                />
                {
                  errors.marca && (
                    <p className="error">{errors.marca.message}</p>
                  )}
              </label>

              <label className="inputsText">
                <h2>Modelo *</h2>
                <input
                  {...register("modelo")}
                  type="text"
                  placeholder="Modelo do veículo"
                />
                {
                  errors.modelo && (
                    <p className="error">{errors.modelo.message}</p>
                  )}
              </label>

              <label className="inputsText">
                <h2>Ano *</h2>
                <input
                  {...register("ano")}
                  type="text"
                  placeholder="Ano do veículo"
                />
                {
                  errors.ano && (
                    <p className="error">{errors.ano.message}</p>
                  )}
              </label>

              <label className="inputsText">
                <h2>Placa do veículo *</h2>
                <input
                  {...register("placa")}
                  type="text"
                  placeholder="Placa do veículo"
                />
                {
                  errors.placa && (
                    <p className="error">{errors.placa.message}</p>
                  )}
              </label>

              <label className="inputsText">
                <h2>Cor do veículo *</h2>
                <input
                  {...register("cor")}
                  type="text"
                  placeholder="Cor do veículo"
                />
                {
                  errors.cor && (
                    <p className="error">{errors.cor.message}</p>
                  )}
              </label>
              <div>
                <h2>Tipo do veículo *</h2>
                <label>
                  {tiposDeVeiculo &&
                    tiposDeVeiculo?.map((tiposveiculo) => (
                      <label
                        key={tiposveiculo.id}
                      >
                        <input
                          {...register("tipo_veiculo")}
                          type="radio"
                          value={tiposveiculo.id}
                        />
                        <span>{tiposveiculo.descricao}</span>

                      </label>
                    ))}
                </label>
              </div>
              {errors.tipo_veiculo && (
                <p className="error">{errors.tipo_veiculo.message}</p>
              )}
            </ContainerInputs>
            <ContainerImagem>
              <label>
                <Preview>
                  {imagemPreview ?
                    <img src={imagemPreview} alt="veiculo" />
                    : <img src={veiculo} alt="veiculo" />
                  }
                </Preview>
                <input
                  type="file"
                  {...register("url_foto")}
                  accept="image/jpeg,image/png,image/gif"
                  onChange={onChange}
                />
              </label>
              <p>Clique para inserir uma imagem</p>
            </ContainerImagem >
          </ContainerMain>
          <ButtonCadastro>
            Cadastrar Veículo
          </ButtonCadastro>
        </form>
      </ModalComponent >
    </>
  )
}

export default Vehicles