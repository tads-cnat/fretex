import { Link } from 'react-router-dom';
import { ReactComponent as LogoSvg } from '../../assets/images/Logo.svg';

interface ILogo {
  width?: string;
  height?: string;
}

export const Logo = ({ width, height }: ILogo) => {
  return (
    <Link to="/">
      <LogoSvg width={width} height={height} />
    </Link>
  );
};
