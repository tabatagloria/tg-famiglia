import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import './Arvore.css';


export default function Main() {
    return (
        < div className="Arvore">
            <div>
                <nav className="Arvore-Nav">
                    <img src={logo} className="Main-logo" alt="logo" />
                    <p className="Famiglia" >Famiglia</p>
            </nav>
            </div>
            <div className="Familia">
               <form action="/perfil" >
                 <p>Nome Completo: <input /></p>
                 <p>Grau de Parentesco: <input /> </p>
                 <p>Data de Nascimento: <input type="date" /></p>
                 <p>Local documento: <input placeholder="Cartório/Igreja"/> </p>
                 <p>Nome do(a) Cônjuge: <input /> </p>
                 <p>Data do Casamento: <input type="date" /></p>
                 <p>Local documento: <input placeholder="Cartório/Igreja"/> </p>
                 <p>Nome dos Filhos: <input /></p>
                 <p>Data de óbito: <input type="date" /></p>
                 <p>Local documento: <input placeholder="Cartório/Igreja"/> </p>
                 <button className="Salvar2" type="submit">Salvar</button>
                 <button className="Tree-Cancel" type="submit">Cancelar</button>
                 <br />
                 <br />
                 <br />
                 <br />
               </form>
            </div>
        </div>
    );
}
