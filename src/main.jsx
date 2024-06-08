import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter, RouterProvider
} from "react-router-dom";
import Home from './routes/Inicio/Inicio.jsx';
import Desafios from './routes/Solucao/Solucao.jsx';
import SobreNos from './routes/Sobrenos/SobreNos.jsx';
import Solucao from './routes/Desafio/Desafio.jsx';
import Login from './routes/Login/Login.jsx';
import Cadastrar from './routes/Cadastrar/Cadastrar.jsx';
import Navbar from './assets/components/Navbar/Navbar.jsx';
import Report from './routes/Report/Report.jsx';
import PrincipalApp from './routes/TelaPrincipalPosLogin/TelaPrincipal.jsx';
import Configuracoes from './routes/Configuracoes/configuracoes.jsx';
import IncidentesProximos from './routes/IncidentesProximos/incidentesproximos.jsx';
import MeusRelatos from './routes/MeusRelatos/meusrelatos.jsx';
import Perfil from './routes/Perfil/perfil.jsx';




const router = createBrowserRouter([
  {  
    path: "/",
    element: <App />,
    children: [

      {
        path: "/",
        element: <Home />
      },
      {
        path: "Solucao",
        element: <Desafios />
      },
      {
        path: "Desafio",
        element: <Solucao />
      },
      {
        path:"Sobrenos",
        element: <SobreNos />
      },
      {
        path: "Login",
        element: <Login/>
      },
      {
        path: "Cadastrar",
        element: <Cadastrar/>
      },
      {
        path: "PrincipalApp",
        element: <PrincipalApp/>
      },
      {
        path: "Report",
        element: <Report/>

      },
      {
        path:"Configuracoes",
        element: <Configuracoes/>
      },
      {
        path:"IncidentesProximos",
        element: <IncidentesProximos/>
      },
      {
        path:"MeusRelatos",
        element: <MeusRelatos/>
      },
      {
        path:"Perfil",
        element:<Perfil/>
      }
    
    ]
  },

  
  ],
  );

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router} /> 
  </React.StrictMode>,
)
