import React, { ReactNode, useEffect, useRef } from "react";
import styled from "styled-components";
import { IActive } from "../../../interfaces/styledComponents";
import Modal from "react-modal";
import { ReactComponent as Close } from "../../../assets/images/X.svg";

interface IModal {
  children: ReactNode;
  toggle: () => void;
  value: boolean;
  title: string;
}

const ModalComponent = ({ children, title, toggle, value }: IModal) => {
  return (
    <Modal isOpen={value} onRequestClose={toggle} style={customStyles}>
      <Content>
        <div className="containerOut">
          <h1>{title}</h1>
          <button type="button" onClick={toggle} className="out">
            <Close className="close" />
          </button>
        </div>
        <div>{children}</div>
      </Content>
    </Modal>
  );
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "auto",
  },
};

const Content = styled.div`
  width: 1200px;
  padding: 40px;
  background-color: var(--bg-ligth);
  position: relative;

  .containerOut {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  h1 {
    font-size: var(--font-large);
  }

  .out {
    font-weight: bolder;
    font-size: 25px;
    transition: all 0.3s;
    cursor: pointer;
    background-color: transparent;
    border: none;

    .close path {
      transition: 0.3s;
    }

    &:hover .close path {
      fill: var(--theme-primary);
    }
  }

  @media (max-width: 1200px) {
    width: 600px;
  }
`;

export default ModalComponent;
