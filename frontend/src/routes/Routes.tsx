import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RequireAuth from '../context/Auth/RequireAuth'
import FretesAvailable from '../pages/FretesAvailable'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/ResgisterUser'
import CadastroFrete from "../pages/RegisterFrete"
import FreteDetail from '../pages/FreteDetail'

const RoutesApp = () => {
  return (
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
  )
}

export default RoutesApp