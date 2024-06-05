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
  const handleSubmit = (event) => {
    event.preventDefault();
     console.log(username, password,name,cpf,data);
    console.log("Envio");

    alert("Enviando os dados: " + username + " - " + password + " - " + name + " - " + cpf + " - " + data );
  };
 
  return (
    <div className="container">
      <form className='form' onSubmit={handleSubmit}>
        <h1>Cadastrar</h1>

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






        <button>Cadastrar</button>



         </form>
    </div>
  )
}

export default Cadastro