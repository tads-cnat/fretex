import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle, StyledApp } from "./styles";
import Home from "./pages/Home";
import Register from "./pages/Resgister";
import FreteDetail from "./pages/FreteDetailFreteiro";
import CadastroFrete from "./pages/RegisterFrete"
import FretesAvailable from "./pages/FretesAvailable"
import Login from "./pages/Login"
import RequireAuth from "./context/Auth/RequireAuth";

function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          <Route path="/cadastro-frete" element={<RequireAuth level={2}><CadastroFrete /></RequireAuth>} />

          <Route path="/fretes/:id" element={<RequireAuth level={3}><FreteDetail /></RequireAuth>} />
          <Route path="/fretes-disponiveis" element={<RequireAuth level={1}><FretesAvailable /></RequireAuth>} />
        </Routes>
      </BrowserRouter>
    </StyledApp>
  );
}

export default App;
