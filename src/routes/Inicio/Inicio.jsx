import React from "react";
import './Inicio.css';
import Carrossel from '../../assets/components/Carrossel/CarrosselHome';
import Navbar from '../../assets/components/Navbar/Navbar';


const Home = () => {
return (
<>
<Navbar/>
    <div>

        <div className="content">
          <div className="texto">
    <h1 className="Slogan">
      <span className="destaque">Uma</span> comunidade unida<br></br> 
      <span className="destaque"> por uma</span> cidade mais segura
    </h1>
    <h2 className="frase">
    Juntos, cooperando para uma cidade mais segura e tranquila para todos.
    </h2>
    </div>
    <div className="carrossel"><Carrossel /></div>
 
  </div>

    </div>
 </>
)

}
export default Home;