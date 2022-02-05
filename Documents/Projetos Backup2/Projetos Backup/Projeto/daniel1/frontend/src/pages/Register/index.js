import React, {useState} from 'react';
import './styles.css';
import {Link, useNavigate as useHistory} from 'react-router-dom';
import api from '../../services/api';


export default function Register(){
    const[name, setName]=useState('');
    const[lastname, setLastname]=useState('');
    const[email, setEmail]=useState('');
    const[whatsapp, setWhatsapp]=useState('');
    const[senha, setSenha]=useState('');
    const[birthday, setBirthday]=useState('');
    const[cep, setCep]=useState('');
    const[observacao,setObservacao]=useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();

        const data={
            name,
            lastname,
            email,
            whatsapp,
            senha,
            birthday,
            cep,
            observacao,
        };

        try{
        const response = await api.post ('usuarios', data);

        alert(`Seu ID: ${response.data.id}`);

            history('/');
        }   catch (err){
            alert ('Erro no cadastro, tente novamente');
        }
    }

    return(
<div className="configderegistro">

    <form onSubmit={handleRegister}>

        <div className="input-group">   
        <input placeholder = "Nome"
        value={name}
        onChange={e=>setName(e.target.value)} 
        />

        <input placeholder = "Sobrenome" 
        value={lastname}
        onChange={e=>setLastname(e.target.value)}
        />
        </div>

        <input placeholder = "E-mail de contato" 
        type="email"
        value={email}
        onChange={e=>setEmail(e.target.value)}
        />

        <div className="input-group">

        <input placeholder = "Telefone com DDD"
        value={whatsapp}
        onChange={e=>setWhatsapp(e.target.value)}
        />

        <input placeholder = "Senha"
        value={senha}
        onChange={e=>setSenha(e.target.value)}
        />

        </div>

        <div className="input-group">

        <input placeholder = "Nascimento" 
        value={birthday}
        onChange={e=>setBirthday(e.target.value)}
        />

        <input placeholder = "Cep" 
        value={cep}
        onChange={e=>setCep(e.target.value)}
        />

        </div>

        <textarea placeholder = "Observação"
        value={observacao}
        onChange={e=>setObservacao(e.target.value)} 
        />

        <button className ="buttongreen" type="submit">Salvar Usuário</button>
        
        <Link to="/">
            <button className ="buttongrey" type="submit">Voltar</button>
        </Link>
        

    </form>
    </div>    
    );
}