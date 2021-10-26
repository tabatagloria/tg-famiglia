import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';
import Reset from './pages/Reset';
import Main from './pages/Main';
import Cadastro from './pages/Cadastro';
import Perfil from './pages/Perfil';
import Arvore from './pages/Arvore';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Main} />
            <Route path="/login" component={Login} />
            <Route path="/reset" component={Reset} />
            <Route path="/cadastro" component={Cadastro} />
            <Route path="/perfil" component={Perfil} />
            <Route path="/tree" component={Arvore} />
        </BrowserRouter>
    );
}