import { useEffect, useMemo, useState } from "react";
import { Image, Container, Form, Preview } from "./styles";
import { ReactComponent as Pencil } from "../../../assets/images/pencil.svg";
import Modal from "../../Global/Modal";
import { useToggle } from "../../../hooks/useToggle";
import { BtnYellow } from "../../../pages/Dashboard/styles";
import useApi from "../../../hooks/useApi";
import { useParams } from "react-router-dom";
import { type ICliente, type IFreteiro } from "../../../interfaces";
import { isFreteiro } from "../../../utils/isFreteiro";

interface IBanner {
  user: IFreteiro | ICliente;
  ownerPage: boolean;
}

const Banner = ({ user, ownerPage }: IBanner) => {
  const { toggle, value } = useToggle();
  const { id } = useParams();
  const [imagePreview, setImagePreview] = useState<string | undefined>();
  const [imageBanner, setImageBanner] = useState();
  const [capaFoto, setCapaFoto] = useState();
  const { updateFreteiro, updateCliente } = useApi();

  const handleClick = (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    const userUpdate = {
      capa_foto: capaFoto,
    };
    Object.entries(userUpdate).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });

    if (isFreteiro(user)) {
      updateFreteiro(Number(id), formData)
        .then((res) => {
          setImageBanner(res.data.capa_foto);
          toggle();
        })
        .catch((res) => { console.log(res.response.data); });
    } else {
      updateCliente(Number(id), formData)
        .then((res) => {
          setImageBanner(res.data.capa_foto);
          toggle();
        })
        .catch((res) => { console.log(res.response.data); });
    }
  };

  useEffect(() => {
    setImageBanner(user.capa_foto);
  }, [user.capa_foto]);

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
        <Image image={imageBanner}>
          <button
            className="editBtn"
            onClick={toggle}
            style={ownerPage ? { display: "flex" } : { display: "none" }}
          >
            <Pencil className="editImage" />
          </button>
        </Image>
      </Container>
    </>
  );
};

export default Banner;
