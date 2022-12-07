import {
  ContainerMain,
  ContainerForm2,
  RegisterPerson,
  PerfilImg,
  RegisterAddress,
  Login,
  ContainerInfos,
  BtnYellow,
} from "./styles";
import InputMask from "react-input-mask";
import perfil from "../../../assets/images/imgperfil.svg";
import Email from "../../../assets/Svg/Email";
import Loc from "../../../assets/Svg/Loc";
import User from "../../../assets/Svg/User";
import Password from "../../../assets/Svg/Password";
import ClosedEye from "../../../assets/Svg/ClosedEye";
import Eye from "../../../assets/Svg/Eye";
import { SpanYellow } from "../../../styles";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IFreteiro } from "../../../interfaces";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaFreteiro } from "../../../pages/Resgister/schemas";
import useApi from "../../../hooks/useApi";

const RegisterFreteiroForm = () => {
  const [password, setPassord] = useState<boolean>(false);
  const [confirmPassword, setConfirmPassword] = useState<boolean>(false);
  const { registerFreteiro } = useApi();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
    setValue,
    setFocus,
  } = useForm<IFreteiro>({
    resolver: yupResolver(schemaFreteiro),
  });
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState<any>();
  const [imagePerfil, setImagePerfil] = useState();

  const onSubmit: SubmitHandler<IFreteiro> = (data) => {
      // const form_data = new FormData();
      // if (data.url_foto)
      //   form_data.append("url_foto", data.url_foto, data.url_foto);
      // form_data.append("email", data.email);
      // form_data.append("username", data.username);
      // form_data.append("cpf", data.cpf);
      // form_data.append("passoword", data.password);
      // form_data.append("CEP", data.endereco.CEP);
      // form_data.append("rua", data.endereco.rua);
      // form_data.append("numero", data.endereco.numero);
      // form_data.append("bairro", data.endereco.bairro);
      // form_data.append("cidade", data.endereco.cidade);
      // form_data.append("estado", data.endereco.estado);
      // if(data.endereco.complemento)
      //   form_data.append("complemento", data.endereco.complemento);
      
    const freteiro: IFreteiro = {
      url_foto: imagePerfil,
      email: data.email,
      username: data.username,
      cpf: data.cpf,
      password: data.password,
      endereco: {
        CEP: data.endereco.CEP,
        rua: data.endereco.rua,
        numero: data.endereco.numero,
        bairro: data.endereco.bairro,
        cidade: data.endereco.cidade,
        estado: data.endereco.estado,
        complemento: data.endereco.complemento,
      },
    };
    registerFreteiro(freteiro)
      .then((res) => console.log(res))
      .catch((res) => console.log(res));
    navigate("/login");
   
  };

  const handlePassword = (e: any) => {
    e.preventDefault();
    setPassord(!password);
  };

  const handleConfirmPassword = (e: any) => {
    e.preventDefault();
    setConfirmPassword(!confirmPassword);
  };

  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  const onChange = (e: any) => {
    const file = e.target.files[0];
    setValue("url_foto", file)
    setImagePreview(URL.createObjectURL(file));
    setImagePerfil(file)
  };
 
  return (
    <ContainerMain>
      <ContainerForm2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <RegisterPerson>
            <h1>Crie sua conta</h1>
            <PerfilImg>
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
            </PerfilImg>
            <label>
              <Email />
              <input
                {...register("email")}
                type="email"
                autoComplete="on"
                placeholder="Seu E-mail"
              />
            </label>
            {errors.email && <p className="error">{errors.email?.message}</p>}
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
              <User />
              <InputMask
                mask="999.999.999-99"
                {...register("cpf")}
                placeholder="Seu cpf"
              ></InputMask>
            </label>
            {errors.cpf && <p className="error">{errors.cpf?.message}</p>}
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
            <BtnYellow>Cadastre-se</BtnYellow>
          </RegisterAddress>
        </form>
        <Login>
          <span>
            Já tem uma conta? <Link to="/">Entrar</Link>
          </span>
        </Login>
      </ContainerForm2>
      <ContainerInfos>
        <div>
          <section>
            <h1>
              <Link to="/">
                Frete<SpanYellow>X</SpanYellow>
              </Link>
            </h1>

            <h2>Conta Freteiro</h2>
            <p>
              Na conta de cliente você pode cadastrar seus pedidos de frete para
              que eles possam ser transportados da melhor maneira.
            </p>
          </section>
        </div>
      </ContainerInfos>
    </ContainerMain>
  );
};

export default RegisterFreteiroForm;
