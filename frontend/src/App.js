import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import Navbar from './Components/communComponets/navbar';
import HomeAnnonces from './Components/annonces/homeAnnonces';
import GestionnaireUsers from './Components/gestionnaireUsers/gestionnaireUsers';
import Home from './Components/home';

import { List } from 'antd/lib/form/Form';
import ListAnnonceProp from './Components/annonces/listAnnonceProp';
import modifierAnnonces from './Components/annonces/modificationAnnonces';


function App() {
  return (
    <div className="container-app">

      <Navbar />
      <HomeAnnonces />

      <GestionnaireUsers />

      <ListAnnonceProp/> 
    </div>

  );
}

export default App;





