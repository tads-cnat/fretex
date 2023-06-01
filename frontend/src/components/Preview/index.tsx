import { ReactNode } from 'react';
import { Container, ImgPreview } from './styles';

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
      <ImgPreview src={img || imgDefault} width={width} tipo={tipo} />
      {children}
    </Container>
  );
};

export default Preview;
