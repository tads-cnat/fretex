import React, { ReactNode } from "react";
import { Container, ContentHeader, ContentMain } from "./styles";
import { ReactComponent as Min } from "../../../assets/images/minus-circle.svg";
import { ReactComponent as Max } from "../../../assets/images/minus-circle-plus.svg";
import { useToggle } from "../../../hooks/useToggle";

interface ICards {
  children: ReactNode;
  title: string;
  toggle: () => void;
  value: boolean;
}

const CardsContainer = ({ children, title, toggle, value }: ICards) => {
  return (
    <Container>
      <ContentHeader active={value}>
        <div>
          <h4>{title}</h4>
        </div>
        <div>
          <button type="button" className="toggle" onClick={toggle}>
            {value ? <Min /> : <Max />}
          </button>
        </div>
      </ContentHeader>
      <ContentMain active={value}>{children}</ContentMain>
    </Container>
  );
};

export default CardsContainer;
