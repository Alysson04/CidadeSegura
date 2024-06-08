import React from "react";
import './meusrelatos.css'

import Box from '@mui/material/Box';

const relatos = [
    {
      id: 1,
      tipoIncidente: "Incidente 1",
      endereco: "Rua A, 123",
      descricao: "Descrição do incidente 1",
      imagens: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150"
      ]
    },
    {
      id: 2,
      tipoIncidente: "Incidente 2",
      endereco: "Rua B, 456",
      descricao: "Descrição do incidente 2",
      imagens: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150"
      ]
    },
    // Adicione mais relatos conforme necessário
  ];
  
  const MeusRelatos = () => {
    return (
      <div className="meus-relatos-container">
        <h1>Meus Relatos</h1>
        {relatos.map((relato) => (
          <div key={relato.id} className="relato">
            <h2>{relato.tipoIncidente}</h2>
            <p><strong>Endereço:</strong> {relato.endereco}</p>
            <p><strong>Descrição:</strong> {relato.descricao}</p>
            <div className="imagens-container">
              {relato.imagens.map((imagem, index) => (
                <img key={index} src={imagem} alt={`Imagem do incidente ${relato.id}`} />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default MeusRelatos;