import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle, StyledApp } from "./styles";
import Home from "./pages/Home";
import Register from "./pages/Resgister";
import ChooseUser from "./pages/ChooseUser";
import FreteDetailFreteiro from "./pages/FreteDetailFreteiro";
import CadastroFrete from "./pages/RegisterFrete"
import FretesAvailable from "./pages/FretesAvailable"

function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/choose-user" element={<ChooseUser />} />
          <Route path="/frete-detail-freteiro" element={<FreteDetailFreteiro />} />
          <Route path="/cadastro-frete" element={<CadastroFrete />} />
          <Route path="/fretes-disponiveis" element={<FretesAvailable />} />
        </Routes>
      </BrowserRouter>
    </StyledApp>
  );
}

export default App;
