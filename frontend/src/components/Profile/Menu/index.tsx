import React from "react";
import { ContainerMenu } from "./styles";

interface IMenu {
  choices: string[];
  handleClick: (index: number) => void;
  selectedTab: number;
}

const ProfileMenu = ({ choices, handleClick, selectedTab }: IMenu) => {
  return (
    <ContainerMenu>
      {choices.map((choice, index) => (
        <button key={index}
          className={selectedTab === index ? "menuBtn active" : "menuBtn"}
          onClick={() => handleClick(index)}
        >
          {choice}
        </button>
      ))}
    </ContainerMenu>
  );
};

export default ProfileMenu;
