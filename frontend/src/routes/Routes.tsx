import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RequireAuth from '../context/Auth/RequireAuth'
import FretesAvailable from '../pages/FretesAvailable'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/ResgisterUser'
import CadastroFrete from "../pages/RegisterFrete"
import FreteDetail from '../pages/FreteDetail'
import Profile from '../pages/Profile'
import CompletedFretes from '../pages/Profile/CompletedFretes'
import Avaliacoes from '../pages/Profile/Avaliacoes'
import Vehicles from '../pages/Profile/Vehicles'
import EditProfile from '../pages/Profile/EditProfile'
import Dashboard from '../pages/Dashboard'


const RoutesApp = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/perfil/:id" element={<RequireAuth level={3}><Profile /></RequireAuth>}>
            <Route path="" element={<RequireAuth level={3}><CompletedFretes /></RequireAuth>} />
            <Route path="veiculos" element={<RequireAuth level={3}><Vehicles /></RequireAuth>} /> 
            <Route path="avaliacoes" element={<RequireAuth level={3}><Avaliacoes /></RequireAuth>} />
            <Route path="editarPerfil" element={<RequireAuth level={3}><EditProfile/></RequireAuth>} />
          </Route>
          
          <Route path="/cadastroFrete" element={<RequireAuth level={2}><CadastroFrete /></RequireAuth>} />

          <Route path="/fretes/:id" element={<RequireAuth level={3}><FreteDetail /></RequireAuth>} />

          <Route path="/fretesDisponiveis" element={<RequireAuth level={1}><FretesAvailable /></RequireAuth>} />

          <Route path='/dashboard' element={<Dashboard/>}/>

        </Routes>
      </BrowserRouter>
  )
}

export default RoutesApp