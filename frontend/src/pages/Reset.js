import React from 'react';
import logo from '../assets/logo.png';
import './Reset.css';




export default function Reset(){
    return (
        <div className="Reset">
            <form action="/">
                <img src={logo} className="Reset-logo" alt="logo" />
                <p> Famiglia </p>
                <input placeholder="Digite seu email para o reset da senha"/>
                <button className="Enviar" type="submit">Enviar</button>
                <button className="Cancelar" type="submit">Cancelar</button>
            </form>    
        </div>            
    );
}