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
import { useEffect, useState } from "react";
import ClosedEye from "../../../assets/Svg/ClosedEye";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import InputMask from "react-input-mask";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaCliente } from "../../../pages/ResgisterUser/schemas";
import { ICliente, IClienteFormData } from "../../../interfaces";
import useApi from "../../../hooks/useApi";
import { useToggle } from "../../../hooks/useToggle";

const RegisterClientForm = () => {
  const { value: password, toggle: togglePassword } = useToggle();
  const { value: confirmPassword, toggle: toggleConfirmPassword } = useToggle();
  const [error, setError] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm<IClienteFormData>({
    resolver: yupResolver(schemaCliente),
  });

  const { registerCliente } = useApi();
  const navigate = useNavigate();

  const handlePassword = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    togglePassword();
  };

  const handleConfirmPassword = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    toggleConfirmPassword();
  };

  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  const onSubmit: SubmitHandler<IClienteFormData> = (data) => {
    setError("");
    const cliente: IClienteFormData = {
      email: data.email,
      full_name: data.full_name,
      cpf: data.cpf,
      password: data.password,
    };
    registerCliente(cliente)
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        const errors = err.response.data.errors;
        if (
          errors.hasOwnProperty("email") &&
          errors.email[0] === "This field must be unique."
        ) {
          setError("Email, possui uma conta cadastrada!");
        } else if (
          errors.hasOwnProperty("cpf") &&
          errors.cpf[0] === "This field must be unique."
        ) {
          setError("CPF, possui uma conta cadastrada!");
        }
      });
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
                {...register("full_name")}
                type="text"
                placeholder="Seu nome completo"
              />
            </label>
            {errors.full_name && (
              <p className="error">{errors.full_name?.message}</p>
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
                type={confirmPassword === true ? "text" : "password"}
                {...register("confirmPassword")}
                placeholder="Confirme sua senha"
              />
              <button type="button" onClick={handleConfirmPassword}>
                {confirmPassword ? <ClosedEye /> : <Eye />}
              </button>
            </label>
            {errors.confirmPassword && (
              <p className="error">{errors.confirmPassword?.message}</p>
            )}
            {error && <p className="error">{error}</p>}
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
