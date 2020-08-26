import React, { Component } from 'react'
import bity from '../../image/logoBity.png'
import './navbar.css';
import Déconnexion from '../users/déconnexion';


export default class NavDéconnexion extends Component {
    render() {
        return (
            <div className="container-nav">
                <img src={bity} className='navbar-logo-bity' ></img>
               
                <Déconnexion />
            </div>
        )
    }
}
