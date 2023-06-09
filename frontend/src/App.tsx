import { GlobalStyles } from './styles/globalStyles';
import Routes from './routes/Routes';
import { Toast } from './components/utils/Toast';
import MyThemeProvider from './styles/MyThemeProvider';

const App = (): JSX.Element => {
  return (
    <MyThemeProvider>
      <GlobalStyles />
      <Routes />
      <Toast />
    </MyThemeProvider>
  );
};

export default App;
