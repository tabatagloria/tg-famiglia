import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import './Main.css';
import lupa from '../assets/lupa.png';

export default function Main() {
    return (
        < div className="Main">
            <div>
                <nav className="Navbar">
                    <img src={logo} className="Main-logo" alt="logo" />
                    <p className="Famiglia" >Famiglia</p>
                    <ul>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/cadastro">Cadastrar</Link></li>
                    </ul>
            </nav>
            </div>
            <div className="Pesquisa">
                <input placeholder="Pesquisa de Sobrenome"/>
                <button className="Button-Lupa" type="submit"><img src={lupa} className="Pesquisa-lupa" alt="lupa"/></button>
            </div>
        </div>
    );
}
