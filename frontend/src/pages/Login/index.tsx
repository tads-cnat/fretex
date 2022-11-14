import { useState, useRef, useEffect } from "react";
import Email from "../../assets/Svg/Email";
import Password from "../../assets/Svg/Password";
import ClosedEye from "../../assets/Svg/ClosedEye";
import Eye from "../../assets/Svg/Eye";
import { ContainerPrincipal, ContainerContent, ContainerForm, BtnYellow } from "../../components/RegisterComponents/RegisterClienteForm/styles";
import { SpanYellow, Wrapper } from "../../styles";
import { BgRegister } from "../Resgister/style";
import { Link } from "react-router-dom";

const Login = () => {

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
        <BgRegister>
            <Wrapper bgColor="#282828">
                <ContainerPrincipal>
                    <ContainerContent>
                        <div>
                            <section>
                                <h1>
                                    Frete<SpanYellow>X</SpanYellow>
                                </h1>
                                <p>
                                    Faça seu login
                                    na plataforma
                                </p>
                            </section>
                        </div>
                    </ContainerContent>
                    <ContainerForm>
                        <form>
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
                                    Já tem uma conta?<Link to="/login"> Cadastrar-se</Link>
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