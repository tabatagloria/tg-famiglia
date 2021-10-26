import React from 'react';
import logo from '../assets/logo.png';
import './Cadastro.css';




export default function Reset(){
    return (
        <div className="Reset">
            <form action="/">
                <img src={logo} className="Reset-logo" alt="logo" />
                <p> Famiglia </p>
                <input placeholder="Nome"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Senha"/>
                <button className="Salvar" type="submit">Salvar</button>
                <button className="Cancelar" type="submit">Cancelar</button>
            </form>    
        </div>            
    );
}