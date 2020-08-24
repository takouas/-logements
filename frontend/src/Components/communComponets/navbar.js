import React, { Component } from 'react'
import NavDéconnexion from './navDeconn';
import NavConnexRejister from './navConnReji';


const Navbar = () => {
    var token = localStorage.getItem('token')

    if (token !== null) { return <NavDéconnexion /> }

    else {
        return <NavConnexRejister />

    }


}
export default Navbar;