import React from 'react';
import logo from '../assets/logo.png';
import './Login.css';
import { Link } from 'react-router-dom';

export default function Login(){
    return (
        <div className="Login">
            
            <form action="/perfil">
                <img src={logo} className="Login-logo" alt="logo" />
                <p> Famiglia </p>
                <input placeholder="Email"/>
                <input type="password" maxLength="8" placeholder="Senha" />
                <button className="Logar" type="submit"  >Logar</button>
                <button className="Cancel" type="submit">Cancelar</button>
                <Link to="/reset">Esqueci minha senha</Link>
            </form>
            
                
      </div>
    );
}