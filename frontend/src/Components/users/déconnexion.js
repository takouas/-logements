import React, { Component } from 'react'
import { Modal, Button, Form, Input, Checkbox, Alert } from 'antd';
import './users.css';
import HomeGuest from '../annonces/homeGuest' 
import { BrowserRouter, Route, Link, Switch, Redirect, } from "react-router-dom";


export default class Déconnexion extends Component {
    logout = () => {
        localStorage.clear();
        window.location.reload()

    }



    render() {

        return (
            <div className='container-page-déconnexion'>
                <form action='' onClick={this.logout} >
                <Link to="/"> Déconnexion</Link>
                 
                
                </form>
            </div>
        )
    }
}
