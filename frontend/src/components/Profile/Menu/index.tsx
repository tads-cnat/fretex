import React from "react";
import { Link } from "react-router-dom";
import { ContainerMenu } from "./styles";

interface IMenu {
  userId: number | undefined;
  handleClick: (index: number) => void;
  selectedTab: number;
  isFreteiro: boolean;
  ownerPage: boolean;
}

const ProfileMenu = ({
  userId,
  handleClick,
  selectedTab,
  isFreteiro,
  ownerPage,
}: IMenu) => {
  return (
    <ContainerMenu>
      <Link
        to={`/perfil/${userId}/`}
        className={selectedTab === 0 ? "menuBtn active" : "menuBtn"}
        onClick={() => handleClick(0)}
      >
        Fretes Realizados
      </Link>
      {isFreteiro && (
        <Link
          to={`/perfil/${userId}/veiculos`}
          className={selectedTab === 1 ? "menuBtn active" : "menuBtn"}
          onClick={() => handleClick(1)}
        >
          Veículos
        </Link>
      )}

      <Link
        to={`/perfil/${userId}/avaliacoes`}
        className={selectedTab === 2 ? "menuBtn active" : "menuBtn"}
        onClick={() => handleClick(2)}
      >
        Avaliações
      </Link>
      {ownerPage && (
        <Link
          to={`/perfil/${userId}/editarPerfil`}
          className={selectedTab === 3 ? "menuBtn active" : "menuBtn"}
          onClick={() => handleClick(3)}
        >
          Editar Perfil
        </Link>
      )}
    </ContainerMenu>
  );
};

export default ProfileMenu;
