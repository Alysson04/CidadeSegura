import React from 'react'
import {FaUser,FaLock} from 'react-icons/fa';
import{useState} from "react";
import "./FormularioCadastro.css";

const Cadastro = () => {

  const[username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const[name,setName] = useState("");
  const[cpf,setCpf]= useState("");
  const[data,setData]= useState("");
  const[tipoDeUsuario,settipoDeUsuario]=useState("");
  const handleSubmit = (event) => { 
    event.preventDefault();
     console.log(username, password,name,cpf,data);
    console.log("Envio");
    if(tipoDeUsuario == "Agente"){
      fetch("http://localhost:8080/agentes",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({nome:name,email:username,cpf:cpf,dataDeNascimento:data,senha:password})})
    }

    alert("Enviando os dados: " + username + " - " + password + " - " + name + " - " + cpf + " - " + data );
  };
 
  return (
    <div className="container">
      <form className='form' onSubmit={handleSubmit}>
        <h1>Cadastrar</h1>

        <div className='tipoUser'>
        <input type="radio" value="Agente" name='tipoDeUsuario' placeholder="Tipo de usuário"
        onChange={(e) => settipoDeUsuario(e.target.value)}/> 
        <label htmlFor="tipoDeUsuario">Agente</label>
        </div>

        <div className='tipoUser'>
        <input type="radio" value="Civil" name='tipoDeUsuario' placeholder="Tipo de usuário"
        onChange={(e) => settipoDeUsuario(e.target.value)}/> 
        <label htmlFor='tipoDeUsuario'>Civil</label>
        </div>

        <div className='input-field'>
        <input type="text" placeholder="Nome"
        onChange={(e) => setName(e.target.value)}/> 
        </div>

        <div className='input-field'>
        <input type="email" placeholder="E-mail"
        onChange={(e) => setUsername(e.target.value)}/> 
        </div>

        <div className='input-field'>
        <input type="text" placeholder="CPF"
        onChange={(e) => setCpf(e.target.value)}/>
        </div>

        <div className='input-field'>
        <input type="passWord" placeholder="Senha"
        onChange={(e) => setPassword(e.target.value)}/>
        </div>

        <div className='input-field'>
        <input type="date" placeholder="Data de nascimento"
        onChange={(e) => setData(e.target.value)}/> 

        </div>





         
        <button type='submit'>Cadastrar</button>



         </form>
    </div>
  )
}

export default Cadastro