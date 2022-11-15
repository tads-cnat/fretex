import { useState, useRef, useEffect } from "react";
import Email from "../../assets/Svg/Email";
import Password from "../../assets/Svg/Password";
import ClosedEye from "../../assets/Svg/ClosedEye";
import Eye from "../../assets/Svg/Eye";
import { ContainerPrincipal, ContainerForm, BtnYellow } from "../../components/RegisterComponents/RegisterClienteForm/styles";
import { ContainerContent2 } from "./styles";
import { SpanYellow, Wrapper } from "../../styles";
import { BgRegister } from "../Resgister/style";
import { Link } from "react-router-dom";

const Login = () => {

    const [password, setPassord] = useState<boolean>(false);
    const email: any = useRef();

    const handlePassword = (e: any) => {
        e.preventDefault();
        setPassord(!password);
    };

    useEffect(() => {
        email.current.focus();
    }, []);

    return (
        <BgRegister>
            <Wrapper bgColor="#282828">
                <ContainerPrincipal>
                    <ContainerContent2>
                        <div>
                            <section>
                                <h1>
                                    <Link to="/">Frete<SpanYellow>X</SpanYellow></Link>
                                </h1>
                            </section>
                        </div>
                    </ContainerContent2>
                    <ContainerForm>
                        <form>
                            <h1>Entre na sua conta</h1>
                            <div>
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
                            </div>
                            <section>
                                <BtnYellow>Entrar</BtnYellow>
                                <p>
                                    Já tem uma conta?<Link to="/register"> Cadastrar-se</Link>
                                </p>
                            </section>
                        </form>
                    </ContainerForm>
                </ContainerPrincipal>
            </Wrapper>
        </BgRegister>
    )

}

export default Login;