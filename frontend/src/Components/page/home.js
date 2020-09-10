import React from 'react';
import 'antd/dist/antd.css';


import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Navbar from './page';
import HomeAnnonces from '../annonces/homeAnnonces';
import GestionnaireUsers from '../gestionnaireUsers/gestionnaireUsers';
import HomeGuest from '../annonces/homeGuest'
import { List } from 'antd/lib/form/Form';
import ListAnnonceProp from '../annonces/listAnnonceProp';
import modifierAnnonces from '../annonces/modificationAnnonces';
import jwt from 'jsonwebtoken';
import Admin from '../interface/admin';
import Pro from '../interface/Proprietaire';
import Client from '../interface/client';



const Home = () => {
  var token = localStorage.getItem('token')

  if (token !== null) {
    var decoded = jwt.decode(token,);

    if (decoded.user !== undefined) {
      var user = decoded.user.role

    }
    else {
      var user = "guest"
    }
  }

  // <Link to="/GestionnaireAnnonces">GestionnaireAnnonces</Link> 



  if (user == "admin") {
    return <Admin />



  }
  else if (user == "propriétaire") {
    return <Pro />
  }
  else if (user == "client") {
    return <Client />
  }

  else {



    return    <Route exact path="/" component={HomeGuest} />

  }

  console.log(user)

}
export default Home;





