import React, { Component } from 'react'
import Home from './linkHome'
import bity from '../../image/logoBity.png'
import { UserOutlined, CloseOutlined } from '@ant-design/icons';
import { Drawer, Button, Dropdown, Menu } from 'antd';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";


export default class Nav extends Component {
    state = {
        current: 'mail',
        visible: false
    }
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        const menu = (
            <Menu>
                <Menu.Item key="0">
                </Menu.Item>
            </Menu>
        );

        return (
            <div>








                <nav className="menuBar">
                    <div className="logo">
                        <Link to="/"> <img src={bity} className='navbar-logo-bity' ></img></Link>
                    </div>

                    <Home />
                </nav>














            </div>




        )
    }
}
