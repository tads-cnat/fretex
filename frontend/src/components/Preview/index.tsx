import { ReactNode } from 'react';
import { Container, ContainerImagem } from './styles';

interface IPreview {
  children: ReactNode;
  img: string | undefined;
  imgDefault: string | undefined;
  width: string;
  tipo?: number;
}

const Preview = ({ children, img, imgDefault, width, tipo = 1 }: IPreview) => {
  return (
    <Container>
      <ContainerImagem width={width} tipo={tipo}>
        <img src={img || imgDefault} />
      </ContainerImagem>
      {children}
    </Container>
  );
};

export default Preview;
