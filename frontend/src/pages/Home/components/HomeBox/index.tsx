import { type IHomeBox } from '../../../../interfaces/Home';
import { Box, BoxWithLines, Description, Image, Title } from './styles';

export const HomeBox = ({ title, desc, img, line }: IHomeBox): JSX.Element => {
  return (
    <>
      {line ? (
        <BoxWithLines>
          <Image src={img} />
          <Title>{title}</Title>
          <Description>{desc}</Description>
        </BoxWithLines>
      ) : (
        <Box>
          <Image src={img} />
          <Title>{title}</Title>
          <Description>{desc}</Description>
        </Box>
      )}
    </>
  );
};
