import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle, StyledApp } from "./styles";
import Home from "./pages/Home/index";
import Register from "./pages/Resgister";
import ChooseUser from "./pages/ChooseUser";
import FreteDetailFreteiro from "./pages/FreteDetailFreteiro/index";

function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/choose-user" element={<ChooseUser/>}/> 
          <Route path="/frete-detail-freteiro" element={<FreteDetailFreteiro/>}/>
        </Routes>
      </BrowserRouter>
    </StyledApp>
  );
}

export default App;
