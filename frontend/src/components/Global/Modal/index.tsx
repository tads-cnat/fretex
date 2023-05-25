import { type ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { ReactComponent as Close } from '../../../assets/images/X.svg';

interface IModal {
  children: ReactNode;
  toggle: () => void;
  value: boolean;
  title: string;
}

const ModalComponent = ({
  children,
  title,
  toggle,
  value,
}: IModal): JSX.Element => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleResize = (): void => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: width > 1200 ? '1200px' : '98%',
      height: width > 1200 ? 'auto' : '80vh',
      padding: '0',
      overflow: width > 1200 ? 'none' : 'scroll',
    },
  };

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

const Content = styled.div`
  width: 100%;
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
    padding: 20px;
    h1 {
      font-size: var(--font-medium);
    }
  }
`;

export default ModalComponent;
