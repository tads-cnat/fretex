import { type ReactNode } from 'react';
import { Container, ContentHeader, ContentMain } from './styles';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';

interface ICards {
  children: ReactNode;
  title: string;
  toggle: () => void;
  value: boolean;
}

export const CardsContainer = ({
  children,
  title,
  toggle,
  value,
}: ICards): JSX.Element => {
  return (
    <Container>
      <ContentHeader active={value}>
        <div>
          <h4>{title}</h4>
        </div>
        <div>
          <button type="button" className="toggle" onClick={toggle}>
            {value ? <AiOutlineMinusCircle /> : <AiOutlinePlusCircle />}
          </button>
        </div>
      </ContentHeader>
      <ContentMain active={value}>{children}</ContentMain>
    </Container>
  );
};
