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
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaCliente } from "../../../pages/Resgister/schemas";

interface IFormCliente {
  email: string;
  nome: string;
  password: string;
  confirmPassword: string;
}

const RegisterClientForm = () => {
  const [password, setPassord] = useState<boolean>(false);
  const [confirmPassword, setConfirmPassword] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm<IFormCliente>({
    resolver: yupResolver(schemaCliente),
  });

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

  const onSubmit: SubmitHandler<IFormCliente> = (values, event) => {
    event?.preventDefault();
    console.log(values);
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
                {...register("nome")}
                type="text"
                placeholder="Seu nome completo"
              />
            </label>
            {errors.nome && <p className="error">{errors.nome?.message}</p>}
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
            <BtnYellow>Cadastre-se</BtnYellow>
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
