import React from 'react';
import 'antd/dist/antd.css';





import jwt from 'jsonwebtoken';
import Admin from './link/priveLink/admin';
import Proprietaire from './link/priveLink/Proprietaire';
import Client from './link/priveLink/client';



import PublicLink from './link/publicLink';

const HomeLink = () => {
  var token = localStorage.getItem('token')

  if (token !== null) {
    var decoded = jwt.decode(token,);

    if (decoded.user !== undefined) {
      var user = decoded.user.role


      if (user == "admin") {
        return <Admin />
      }
      else if (user == "propriétaire") {
        return <Proprietaire />
      }
      else if (user == "client") {
        return <Client />
      }
    }

  }

  else {
    var user = "guest"
    return <PublicLink />
  }





}
export default HomeLink;





