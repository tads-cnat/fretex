import React from "react";
import { Link } from "react-router-dom";
import { ContainerMenu } from "./styles";

interface IMenu {
  userId: number | undefined;
  choices: choice[];
  handleClick: (index: number) => void;
  selectedTab: number;
}

interface choice {
  name: string;
  url: string;
}

const ProfileMenu = ({ userId, choices, handleClick, selectedTab }: IMenu) => {
  return (
    <ContainerMenu>
      {choices.map((choice, index) => (
        <Link
          to={`/perfil/${userId}/${choice.url}`}
          key={index}
          className={selectedTab === index ? "menuBtn active" : "menuBtn"}
          onClick={() => handleClick(index)}
        >
          {choice.name}
        </Link>
      ))}
    </ContainerMenu>
  );
};

export default ProfileMenu;
