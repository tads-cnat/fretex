import { useState, useEffect, useContext } from "react";
import veiculo from "../../../assets/images/veiculo.png";
import { ReactComponent as PlusVeiculo } from "../../../assets/images/PlusCircle.svg";
import ModalComponent from "../../../components/Global/Modal";
import {
  ContainerMain,
  ContainerInputs,
  ContainerImagem,
  ButtonCadastro,
  Preview,
  QtdVeiculos,
} from "./styles";
import { useToggle } from "../../../hooks/useToggle";
import { useForm, SubmitHandler } from "react-hook-form";
import useApi from "../../../hooks/useApi";
import { IVeiculo } from "../../../interfaces";
import { useContextProfile } from "..";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaVeiculo } from "./schema";
import CardVeiculo from "../../../components/Profile/CardVeiculo";
import { useParams } from "react-router-dom";
import LoadingPage from "../../../components/Global/LoadingPage";
import { toast } from "react-toastify";

interface ITiposDeVeiculo {
  id: number;
  descricao: string;
}

const Vehicles = () => {
  const { getVeiculosForFreteiro } = useApi();
  const { id } = useParams();
  const { value, toggle, setAsFalse, setAsTrue } = useToggle();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm<IVeiculo>({
    resolver: yupResolver(schemaVeiculo),
  });
  const [imagemVeiculo, setImagemVeiculo] = useState();
  const [imagemPreview, setImagemPreview] = useState<string | undefined>();
  const [tiposDeVeiculo, setTiposDeVeiculo] = useState<ITiposDeVeiculo[]>();
  const [veiculos, setVeiculos] = useState<IVeiculo[]>([]);
  const { registerVeiculo, tiposVeiculo } = useApi();
  const { user, handleSelectTab } = useContextProfile();

  useEffect(() => {
    handleSelectTab(1);
    getVeiculosForFreteiro(Number(id))
      .then((res) => {
        setVeiculos(res.data);
      })
      .catch((res) => console.log(res));

    tiposVeiculo()
      .then((res) => setTiposDeVeiculo(res.data))
      .catch((error) => console.log(error));
  }, []);

  const onSubmit: SubmitHandler<IVeiculo> = (data) => {
    const formData: any = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value && key === "url_foto") formData.append(`${key}`, imagemVeiculo);
      else if (value) formData.append(`${key}`, value);
    });
    formData.append("freteiro", user.id);

    registerVeiculo(formData).then(() => {
      setAsFalse();
      getVeiculosForFreteiro(Number(id))
        .then((res) => {
          toast.success('Veículo cadastrado com sucesso!')
          setVeiculos(res.data);
        })
        .catch((res) => console.log(res));
    });
  };

  const onChange = (e: any) => {
    try {
      const file = e.target.files[0];
      setImagemVeiculo(file);
      setImagemPreview(URL.createObjectURL(file));
    } catch (err) {
      setImagemPreview(undefined);
    }
  };
  return (
    <>
      <QtdVeiculos>
        <p>{veiculos.length} Veículo(s)</p>
        <ButtonCadastro onClick={setAsTrue}>
          <PlusVeiculo /> Cadastrar Veículo
        </ButtonCadastro>
      </QtdVeiculos>
      {!veiculos && <LoadingPage />}
      {veiculos && veiculos.length === 0 && (
        <p style={{ textAlign: "center", margin: "15vh" }}>
          Não possui veículos cadastrados.
        </p>
      )}
      {veiculos &&
        veiculos?.map((veiculo, id) => (
          <CardVeiculo key={id} veiculos={veiculo} />
        ))}
      <ModalComponent title="Cadastrar Veículo" toggle={toggle} value={value}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ContainerMain>
            <ContainerInputs>
              <label className="inputsText">
                <h2>Marca *</h2>
                <input
                  {...register("marca")}
                  type="text"
                  placeholder="Marca do veículo"
                />
                {errors.marca && (
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
                {errors.modelo && (
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
                {errors.ano && <p className="error">{errors.ano.message}</p>}
              </label>

              <label className="inputsText">
                <h2>Placa do veículo *</h2>
                <input
                  {...register("placa")}
                  type="text"
                  placeholder="Placa do veículo"
                />
                {errors.placa && (
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
                {errors.cor && <p className="error">{errors.cor.message}</p>}
              </label>
              <div>
                <h2>Tipo do veículo *</h2>
                <label>
                  {tiposDeVeiculo &&
                    tiposDeVeiculo?.map((tiposveiculo) => (
                      <label key={tiposveiculo.id}>
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
                  {imagemPreview ? (
                    <img src={imagemPreview} alt="veiculo" />
                  ) : (
                    <img src={veiculo} alt="veiculo" />
                  )}
                </Preview>
                <input
                  type="file"
                  {...register("url_foto")}
                  accept="image/jpeg,image/png,image/gif"
                  onChange={onChange}
                />
              </label>
              <p>Clique para inserir uma imagem</p>
            </ContainerImagem>
          </ContainerMain>
          <ButtonCadastro>Cadastrar Veículo</ButtonCadastro>
        </form>
      </ModalComponent>
    </>
  );
};

export default Vehicles;
