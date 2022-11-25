import { SpanYellow } from "../../../styles";
import Email from "../../../assets/Svg/Email";
import Password from "../../../assets/Svg/Password";
import User from "../../../assets/Svg/User";
import {
  ContainerForm,
  BtnYellow,
  ContainerPrincipal,
  ContainerContent,
} from "./styles";
import Eye from "../../../assets/Svg/Eye";
import { useContext, useEffect, useState } from "react";
import ClosedEye from "../../../assets/Svg/ClosedEye";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import InputMask from "react-input-mask";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaCliente } from "../../../pages/Resgister/schemas";
import { ICliente } from "../../../interfaces";
import useApi from "../../../hooks/useApi";

const RegisterClientForm = () => {
  const [password, setPassord] = useState<boolean>(false);
  const [confirmPassword, setConfirmPassword] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setFocus,
  } = useForm<ICliente>({
    resolver: yupResolver(schemaCliente),
  });

  const { registerCliente } = useApi();
  const navigate = useNavigate();

  const handlePassword = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setPassord(!password);
  };

  const handleConfirmPassword = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setConfirmPassword(!confirmPassword);
  };

  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  const onSubmit: SubmitHandler<ICliente> = (data) => {
    setError("");
    try {
      const cliente: ICliente = {
        email: data.email,
        username: data.username,
        cpf: data.cpf,
        password: data.password,
      };
      registerCliente(cliente);
      console.log(cliente);
      navigate("/login");
    } catch (err) {
      setError("Houve um erro, tente novamente");
    }
  };

  return (
    <ContainerPrincipal>
      <ContainerForm>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Crie sua conta</h1>
          <div>
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
                type={password === true ? "text" : "password"}
                {...register("password")}
                placeholder="Sua senha"
              />
              <button onClick={handlePassword}>
                {password ? <ClosedEye /> : <Eye />}
              </button>
            </label>
            {errors.password && (
              <p className="error">{errors.password?.message}</p>
            )}
            <label>
              <Password />
              <input
                type={confirmPassword === true ? "text" : "password"}
                {...register("confirmPassword")}
                placeholder="Confirme sua senha"
              />
              <button onClick={handleConfirmPassword}>
                {confirmPassword ? <ClosedEye /> : <Eye />}
              </button>
            </label>
            {errors.confirmPassword && (
              <p className="error">{errors.confirmPassword?.message}</p>
            )}
          </div>
          <section>
            <BtnYellow type="submit">Cadastre-se</BtnYellow>
            <p>
              Já tem uma conta?<Link to="/login"> Entrar</Link>
            </p>
          </section>
        </form>
      </ContainerForm>
      <ContainerContent>
        <div>
          <section>
            <h1>
              <Link to="/">
                Frete<SpanYellow>X</SpanYellow>
              </Link>
            </h1>

            <h2>Conta Cliente</h2>
            <p>
              Como cliente você pode cadastrar seus pedidos de frete e negociar
              diretamente com os nossos freteiros parceiros
            </p>
          </section>
        </div>
      </ContainerContent>
    </ContainerPrincipal>
  );
};

export default RegisterClientForm;
