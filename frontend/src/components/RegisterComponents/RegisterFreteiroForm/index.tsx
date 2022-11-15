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
import perfil from "../../../assets/images/imgperfil.svg";
import Email from "../../../assets/Svg/Email";
import Loc from "../../../assets/Svg/Loc";
import User from "../../../assets/Svg/User";
import Password from "../../../assets/Svg/Password";
import ClosedEye from "../../../assets/Svg/ClosedEye";
import Eye from "../../../assets/Svg/Eye";
import { SpanYellow } from "../../../styles";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const RegisterFreteiroForm = () => {
  const [password, setPassord] = useState<boolean>(false);
  const [confirmPassword, setConfirmPassword] = useState<boolean>(false);
  const email: any = useRef();

  const handlePassword = (e: any) => {
    e.preventDefault();
    setPassord(!password);
  };

  const handleConfirmPassword = (e: any) => {
    e.preventDefault();
    setConfirmPassword(!confirmPassword);
  };

  useEffect(() => {
    email.current.focus();
  }, []);

  return (
    <ContainerMain>
      <ContainerForm2>
        <form>
          <RegisterPerson>
            <h1>Crie sua conta</h1>
            <PerfilImg>
              <label>
                <img src={perfil} alt="perfil" />
                <input type="file" name="perfil" accept="image/*" />
                <p>Clique para inserir uma imagem</p>
              </label>
            </PerfilImg>
            <label>
              <Email />
              <input
                ref={email}
                type="email"
                autoComplete="on"
                name="email"
                required
                placeholder="Seu E-mail"
              />
            </label>
            <label>
              <User />
              <input
                type="text"
                name="nome"
                required
                placeholder="Seu nome completo"
              />
            </label>
            <label>
              <Password />
              <input
                type={password === true ? "text" : "password"}
                name="password"
                required
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
                name="confirm-password"
                required
                placeholder="Confirme sua senha"
              />
              <button onClick={handleConfirmPassword}>
                {confirmPassword ? <ClosedEye /> : <Eye />}
              </button>
            </label>
          </RegisterPerson>
          <RegisterAddress>
            <h1>Seu Endereço</h1>
            <label>
              <Loc />
              <input type="text" name="cep" required placeholder="Seu CEP" />
            </label>
            <label>
              <Loc />
              <input type="text" name="rua" required placeholder="Seu rua" />
            </label>
            <label>
              <Loc />
              <input
                type="text"
                name="bairro"
                required
                placeholder="Seu bairro"
              />
            </label>
            <label>
              <Loc />
              <input
                type="text"
                name="cidade"
                required
                placeholder="Sua cidade"
              />
            </label>
            <label>
              <Loc />
              <input
                type="text"
                name="estado"
                required
                placeholder="Seu estado"
              />
            </label>
            <label>
              <Loc />
              <input
                type="text"
                name="complemento"
                required
                placeholder="Complemento"
              />
            </label>
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
              <Link to="/">Frete<SpanYellow>X</SpanYellow></Link>
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
