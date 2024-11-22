import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PaginaPrincipal from '../../components/PaginaPrincipal/PaginaPrincipal';
import Login from '../Login';
import Cadastro from '../Cadastro';

function AppRoutes({adicionarAoCarrinho, aumentarQuantidade, diminuirQuantidade}) {
  return (
    <Routes>
      <Route path="/" element={<PaginaPrincipal  adicionarAoCarrinho={adicionarAoCarrinho}/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
    </Routes>
  );
}

export default AppRoutes;