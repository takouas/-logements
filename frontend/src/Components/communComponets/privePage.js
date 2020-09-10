import React, { Component } from 'react'
import bity from '../../image/logoBity.png'
import './navbar.css';

import { Menu, Dropdown, Icon, Popover } from 'antd';
import jwt from 'jsonwebtoken';
import Dashboard from './dashboard';

import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from '../page/home';
// var token = localStorage.getItem('token')
// var decoded = jwt.decode(token,);
// const Bienvenue = " Bienvenue " + decoded.user.prenom


export default class PrivePage extends Component {

    render() {

        return (
            <div>
      
            <Home/>
            </div>
        )
    }
}
