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
import { useEffect, useRef, useState } from "react";
import ClosedEye from "../../../assets/Svg/ClosedEye";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const RegisterClientForm = () => {
  const [password, setPassord] = useState<boolean>(false);
  const [confirmPassword, setConfirmPassword] = useState<boolean>(false);
  const email: any = useRef();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setFocus,
  } = useForm();
  console.log(watch());

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

  return (
    <ContainerPrincipal>
      <ContainerForm>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
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
            <label>
              <User />
              <input
                {...register("nome")}
                type="text"
                placeholder="Seu nome completo"
              />
            </label>
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
