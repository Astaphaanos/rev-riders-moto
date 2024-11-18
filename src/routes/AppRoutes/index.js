import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PaginaPrincipal from '../../components/PaginaPrincipal/PaginaPrincipal';
import Login from '../Login';
import Cadastro from '../Cadastro';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PaginaPrincipal />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
    </Routes>
  );
}

export default AppRoutes;