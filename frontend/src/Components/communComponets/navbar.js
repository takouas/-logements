import React, { Component } from 'react'
import bity from '../../image/logoBity.png'
import './navbar.css';
import Connection from '../users/connecxion';
import Inscription from '../users/inscription';
export default class Navbar extends Component {
    render() {
        return (
            <div className="container-nav"> 
                <img src={bity} className='navbar-logo-bity' ></img>
                <div  className="container-nav-button-users">
                     <Connection/> 
                     <Inscription /> 
                </div>
            </div>
        )
    }
}
