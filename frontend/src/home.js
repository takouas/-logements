import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import Navbar from './Components/communComponets/navbar';
import HomeAnnonces from './Components/annonces/homeAnnonces';
import GestionnaireUsers from './Components/gestionnaireUsers/gestionnaireUsers';
import HomeGuest from './Components/annonces/homeGuest'
import { List } from 'antd/lib/form/Form';
import ListAnnonceProp from './Components/annonces/listAnnonceProp';
import modifierAnnonces from './Components/annonces/modificationAnnonces';
import jwt from 'jsonwebtoken';


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


  if (user == "admin") {
    return <GestionnaireUsers />
  }
  else if (user == "propriétaire") {
    return <ListAnnonceProp />
  }
  else if (user == "client") {
    return <HomeAnnonces />
  }

  else {



    return <HomeGuest />

  }

  console.log(user)

}
export default Home;





