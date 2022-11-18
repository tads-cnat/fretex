import { useEffect, useState } from "react";
import RegisterClienteForm from "../../components/RegisterComponents/RegisterClienteForm";
import RegisterFreteiroForm from "../../components/RegisterComponents/RegisterFreteiroForm";
import { BgRegister, BtnTypeUser, Container, WrapperRegister } from "./style";

const Register = () => {
  const [typeResgister, setTypeRegister] = useState("cliente");

  useEffect(() => {
    const type = localStorage.getItem("typeUser");
    if (type) {
      type === "cliente"
        ? setTypeRegister("cliente")
        : setTypeRegister("freteiro");
    }
  }, []);

  const handleClick = (type: string) => {
    setTypeRegister(type);
    localStorage.setItem("typeUser", type);
  };

  return (
    <BgRegister>
      <Container>
        <WrapperRegister bgColor="#282828">
          <div className="typeRegister">
            <BtnTypeUser
              onClick={() => handleClick("cliente")}
              active={typeResgister === "cliente" ? true : false}
            >
              Cliente
            </BtnTypeUser>
            <BtnTypeUser
              onClick={() => handleClick("freteiro")}
              active={typeResgister === "freteiro" ? true : false}
            >
              Freteiro
            </BtnTypeUser>
          </div>
          {typeResgister === "cliente" ? (
            <RegisterClienteForm />
          ) : (
            <RegisterFreteiroForm />
          )}
        </WrapperRegister>
      </Container>
    </BgRegister>
  );
};

export default Register;
