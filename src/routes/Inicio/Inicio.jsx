import React from "react";
import './Inicio.css';
import Carrossel from '../../assets/components/Carrossel/CarrosselHome';
import Navbar from '../../assets/components/Navbar/Navbar';
import imagem1 from '../../assets/img/imagem1.jpg'


const Home = () => {
return (
<>
<Navbar/>

        <div className="content">
          <div className="textoInicio">
    <h1 className="Slogan">
      <span className="destaque">Uma</span> comunidade unida<br></br> 
      <span className="destaque"> por uma</span> cidade mais segura
    </h1>
    <h2 className="frase">
    Juntos, cooperando para uma cidade mais segura e tranquila para todos.
    </h2>
    </div>
  </div>
  <div className="parteDeBaixo">
  <div className="esquerda">
    
  <img src={imagem1} className="imagem1"></img>
  <h3>Com o Cidade Segura, monitore incidentes em tempo real e ajude a tornar sua cidade um lugar mais seguro para todos.</h3>
      
    </div>
    <div className="meio"></div>
    <div className="direita">

    </div>
    </div>

   
 </>
)

}
export default Home;