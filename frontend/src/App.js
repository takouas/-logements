import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import Navbar from './Components/communComponets/navbar';
import HomeAnnonces from './Components/annonces/homeAnnonces';
import GestionnaireUsers from './Components/gestionnaireUsers/gestionnaireUsers';
import Home from './Components/home';
import AjoutAnnonces from './Components/annonces/ajoutAnnonces';
import { List } from 'antd/lib/form/Form';
import ListAnnonceProp from './Components/annonces/listAnnonceProp';


function App() {
  return (
    <div className="container-app">

      <Navbar />
      <HomeAnnonces />
      <Home />
      <GestionnaireUsers />
      <AjoutAnnonces />
      <ListAnnonceProp/>
    </div>

  );
}

export default App;





