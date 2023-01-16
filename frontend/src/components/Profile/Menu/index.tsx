import React from "react";
import { Link } from "react-router-dom";
import { ContainerMenu } from "./styles";

interface IMenu {
  userId: number | undefined;
  choices: choice[];
  handleClick: (index: number) => void;
  selectedTab: number;
  isFreteiro: boolean;
  ownerPage: boolean;
}

interface choice {
  name: string;
  url: string;
  justFreteiroHasThisPage?: boolean;
  clienteCanAccessFreteiroPage?: boolean;
  justTheOwner: boolean;
}

const ProfileMenu = ({
  userId,
  choices,
  handleClick,
  selectedTab,
  isFreteiro,
  ownerPage,
}: IMenu) => {
  return (
    <ContainerMenu>
      {choices.map((choice, index) =>
        ownerPage === choice.justTheOwner ? (
          <Link
            to={`/perfil/${userId}/${choice.url}`}
            key={index}
            className={selectedTab === index ? "menuBtn active" : "menuBtn"}
            onClick={() => handleClick(index)}
          >
            {choice.name}
          </Link>
        ) : (
          <Link
            to={`/perfil/${userId}/${choice.url}`}
            key={index}
            className={selectedTab === index ? "menuBtn active" : "menuBtn"}
            onClick={() => handleClick(index)}
          >
            {choice.name}
          </Link>
        ),
      )}
    </ContainerMenu>
  );
};

export default ProfileMenu;
