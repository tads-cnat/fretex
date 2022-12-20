import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContextProfile } from "..";
import { ContainerForm2, ContainerMain, PerfilImg, RegisterAddress, RegisterPerson } from "../../../components/RegisterComponents/RegisterFreteiroForm/styles";
import {useAddress} from '../../../hooks/useAddress'
import {useFreteiroForm} from '../../../hooks/useFreteiroForm'
import { useToggle } from "../../../hooks/useToggle";
import { IFreteiro } from "../../../interfaces";
import { schemaFreteiro } from "../../ResgisterUser/schemas";
import perfil from "../../../assets/images/imgperfil.svg";
import User from "../../../assets/Svg/User";
import InputMask from "react-input-mask";
import Email from "../../../assets/Svg/Email";
import Password from "../../../assets/Svg/Password";
import ClosedEye from "../../../assets/Svg/ClosedEye";
import Eye from "../../../assets/Svg/Eye";
import { ContainerInfos } from "../../../components/FretesAvailable/BoxFretes/styles";
import { SpanYellow } from "../../../styles";
import Login from "../../Login";
import { BtnYellow } from "../../../components/RegisterComponents/RegisterClienteForm/styles";
import Loc from "../../../assets/Svg/Loc";
import { Container } from "./styles";



const EditProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, handleSelectTab } = useContextProfile();
  const [imagePreview, setImagePreview] = useState<string>();
  const { value: password, toggle: togglePassword } = useToggle();
  const { value: confirmPassword, toggle: toggleConfirmPassword } = useToggle();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setFocus,
    watch,
    getValues,
    completeAddress
  } = useAddress<IFreteiro>(schemaFreteiro);

  const { onSubmit } = useFreteiroForm({
    onSuccess: () => navigate("/login"),
  });

  useEffect(() => {
    handleSelectTab(3)
  }, [handleSelectTab])

  const onChange = (e: any) => {
    const file = e.target.files[0];
    setValue("url_foto", file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handlePassword = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    togglePassword();
  };
console.log(getValues('username'))
  const handleConfirmPassword = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    toggleConfirmPassword();
  };

  if (!user) return <p>Carregando...</p>;
  if (user && user.id !== Number(id)) navigate("/login");
  return (

    <ContainerForm2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RegisterPerson>
          <div>
          <h1>Edite sua conta</h1>
          <PerfilImg style={{display:'flex', flexDirection:'row', gap:'50px'}}>
            <label>
              <img src={imagePreview ? imagePreview : perfil} alt="perfil" />
              <input
                type="file"
                {...register("url_foto")}
                accept="image/jpeg,image/png,image/gif"
                onChange={onChange}
              />
              <p>Clique para inserir uma imagem</p>
            </label>
            <div>
              <h2 style={{color:'#fff'}}>{watch('username')}</h2>
              <p>{getValues('email')}</p>
            </div>
            
          </PerfilImg>
          </div>
          <label>
            <User />
            <input
              {...register("username")}
              type="text"
              placeholder="Seu nome completo"
            />
          </label>
          {errors.username && (
            <p className="error">{errors.username?.message}</p>
          )}
          <label>
            <Password />
            <input
              {...register("password")}
              type={password === true ? "text" : "password"}
              placeholder="Sua senha"
            />
            <button type="button" onClick={handlePassword}>
              {password ? <ClosedEye /> : <Eye />}
            </button>
          </label>
          {errors.password && (
            <p className="error">{errors.password?.message}</p>
          )}
          <label>
            <Password />
            <input
              {...register("confirmPassword")}
              type={confirmPassword === true ? "text" : "password"}
              placeholder="Confirme sua senha"
            />
            <button type="button" onClick={handleConfirmPassword}>
              {confirmPassword ? <ClosedEye /> : <Eye />}
            </button>
          </label>
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword?.message}</p>
          )}
        </RegisterPerson>
        <RegisterAddress>
          <h1 className="title">Seu Endereço</h1>
          <label>
            <Loc />
            <InputMask
              mask="99999-999"
              {...register("endereco.CEP")}
              placeholder="Seu CEP"
              onBlur={completeAddress}
            ></InputMask>
          </label>
          {errors.endereco?.CEP && (
            <p className="error">{errors.endereco.CEP?.message}</p>
          )}
          <label>
            <Loc />
            <input
              {...register("endereco.rua")}
              type="text"
              placeholder="Seu rua"
            />
          </label>
          {errors.endereco?.rua && (
            <p className="error">{errors.endereco.rua?.message}</p>
          )}
          <label>
            <Loc />
            <input
              {...register("endereco.numero")}
              type="text"
              placeholder="Número da sua casa"
            />
          </label>
          {errors.endereco?.numero && (
            <p className="error">{errors.endereco.numero?.message}</p>
          )}
          <label>
            <Loc />
            <input
              {...register("endereco.bairro")}
              type="text"
              placeholder="Seu bairro"
            />
          </label>
          {errors.endereco?.bairro && (
            <p className="error">{errors.endereco.bairro?.message}</p>
          )}
          <label>
            <Loc />
            <input
              {...register("endereco.cidade")}
              type="text"
              placeholder="Sua cidade"
            />
          </label>
          {errors.endereco?.cidade && (
            <p className="error">{errors?.endereco.cidade.message}</p>
          )}
          <label>
            <Loc />
            <input
              {...register("endereco.estado")}
              type="text"
              placeholder="Seu estado"
            />
          </label>
          {errors.endereco?.estado && (
            <p className="error">{errors.endereco.estado?.message}</p>
          )}
          <label>
            <Loc />
            <input
              {...register("endereco.complemento")}
              type="text"
              placeholder="Complemento"
            />
          </label>
          {errors.endereco?.complemento && (
            <p className="error">{errors.endereco.complemento?.message}</p>
          )}
          <div className="containerButton">
            <BtnYellow>Atualizar Perfil</BtnYellow>
          </div>
        </RegisterAddress>
      </form>
    </ContainerForm2>
  );
};

export default EditProfile;
