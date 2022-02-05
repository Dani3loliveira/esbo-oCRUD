import React,{useState} from 'react';
import './styles.css';
import {Link, useNavigate as useHistory} from 'react-router-dom';
import api from '../../services/api';

export default function Logon(){



    const[email, setEmail]=useState('');
    const[id, setId]=useState('');
    const history=useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try{
            

            const response = await api.post('usuarios', {email});


            
            
            history.push('/profile');
        }   catch (err){
            alert('Falha no Login.');
        }
    }

    return(
<div className="configdelogon">

    <form onSubmit={handleLogin}>

        <input placeholder = "Email de Cadastro" />

        <input placeholder = "Senha de Acesso" />
        <button className ="buttonblue" type="submit">Entrar no sistema</button>
        
<Link to="/register">
        <button className ="buttongreen" type="submit">Cadastrar Usuário</button>
</Link>

    </form>
    </div>    
    );
}