import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

interface IThemeProvider {
  children: JSX.Element | JSX.Element[];
}

const MyThemeProvider = ({ children }: IThemeProvider): JSX.Element => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MyThemeProvider;
