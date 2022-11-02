import { IHomeBox } from "../../../interfaces/Home";
import { Box, BoxWithLines, Description, Image, Title } from "./styles";

const HomeBox = ({ title, desc, img, line }: IHomeBox) => {
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

export default HomeBox;
