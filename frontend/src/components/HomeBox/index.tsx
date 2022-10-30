import { IHomeBox } from "../../interfaces/Home";
import { Box, Description, Image, Title } from "./styles";

const HomeBox = ({ title, desc, img }: IHomeBox) => {
  return (
    <Box>
      <Image src={img} />
      <Title>{title}</Title>
      <Description>{desc}</Description>
    </Box>
  );
};

export default HomeBox;
