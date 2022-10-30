import Home from "./pages/Home/index";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle, StyledApp } from "./styles";
import Register from "./pages/Resgister";
import ChooseUser from "./pages/ChooseUser";

function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/choose-user" element={<ChooseUser/>}/> 
        </Routes>
      </BrowserRouter>
    </StyledApp>
  );
}

export default App;
