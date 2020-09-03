import React, { Component } from 'react'
import bity from '../../image/logoBity.png'
import './navbar.css';

import { Menu, Dropdown, Icon, Popover } from 'antd';
import jwt from 'jsonwebtoken';
import Dashboard from './dashboard';


// var token = localStorage.getItem('token')
// var decoded = jwt.decode(token,);
// const Bienvenue = " Bienvenue " + decoded.user.prenom


export default class NavDéconnexion extends Component {

    render() {

        return (
            <div className="container-nav">
                <img src={bity} className='navbar-logo-bity' ></img>
                <div > 
                    <Dashboard />
                </div>
            </div>
        )
    }
}
