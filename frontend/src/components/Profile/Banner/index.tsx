import React, { useContext, useEffect, useState } from "react";
import { Image, Container, Form, Preview } from "./styles";
import { ReactComponent as Pencil } from "../../../assets/images/pencil.svg";
import Modal from "../../Global/Modal";
import { useToggle } from "../../../hooks/useToggle";
import { BtnYellow } from "../../../pages/Dashboard/styles";
import useApi from "../../../hooks/useApi";
import { useParams } from "react-router-dom";
import {
  ICliente,
  IFreteiro,
  IFreteiroFormData,
  IFreteiroFormDataUpdate,
} from "../../../interfaces";
import { AuthContext } from "../../../context/Auth/AuthContext";
import { useForm } from "react-hook-form/dist/useForm";

function isFreteiro(obj: any): obj is IFreteiro {
  return true;
}

const Banner = ({ user }: { user: IFreteiro | ICliente }) => {
  const { toggle, value } = useToggle();
  const { id } = useParams();
  const [imagePreview, setImagePreview] = useState<string | undefined>();
  const [capaFoto, setCapaFoto] = useState();
  const [urlFoto, setUrlFoto] = useState<any>();
  const { updateFreteiro } = useApi();

  const handleClick = (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    if (isFreteiro(user)) {
      const freteiroUpdate: IFreteiroFormDataUpdate = {
        first_name: user.first_name,
        last_name: user.last_name,
        username: user.username,
        email: user.email,
        cpf: user.cpf,
        endereco: user.endereco,
        password: user.password,
        url_foto: urlFoto,
        capa_foto: capaFoto,
      };

      const { endereco, ...freteiro } = freteiroUpdate;

      Object.entries(freteiro).forEach(([key, value]) => {
        if (value) formData.append(key, value);
      });
      Object.entries(endereco).forEach(([key, value]) => {
        if (value) formData.append(`endereco.${key}`, String(value));
      });

      updateFreteiro(Number(id), formData)
        .then((res) => console.log(res))
        .catch((res) => console.log(res));
    }
  };

  useEffect(() => {
    setUrlFoto(user.url_foto)
  }, [])

  const onChange = (e: any) => {
    try {
      const file = e.target.files[0];
      setCapaFoto(file);
      setImagePreview(URL.createObjectURL(file));
    } catch (err) {
      setImagePreview(undefined);
    }
  };

  return (
    <>
      <Container>
        <Modal toggle={toggle} title="Imagem de fundo" value={value}>
          <Image image={imagePreview} id="imageModal">
            <Preview active={imagePreview !== undefined}>
              <p>Preview</p>
            </Preview>
          </Image>
          <Form>
            <input
              type="file"
              name="capa_foto"
              accept="image/jpeg,image/png,image/gif"
              onChange={onChange}
            />
            <BtnYellow type="submit" onClick={handleClick}>
              Enviar
            </BtnYellow>
          </Form>
        </Modal>
        <Image image={user.capa_foto}>
          <button className="editBtn" onClick={toggle}>
            <Pencil className="editImage" />
          </button>
        </Image>
      </Container>
    </>
  );
};

export default Banner;
