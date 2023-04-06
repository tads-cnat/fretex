import { GlobalStyle, StyledApp } from './styles';
import Routes from './routes/Routes';
import { Toast } from './components/Toast';

const App = (): JSX.Element => {
  return (
    <StyledApp>
      <GlobalStyle />
      <Routes />
      <Toast />
    </StyledApp>
  );
};

export default App;
