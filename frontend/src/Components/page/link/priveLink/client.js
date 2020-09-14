import React, { Component } from 'react'

import { BrowserRouter, Route, Link, Switch, Redirect, } from "react-router-dom";

import { UserOutlined, CloseOutlined } from '@ant-design/icons';


import bity from '../../../../image/logoBity.png'
import { Drawer, Button, Dropdown, Menu } from 'antd';
import Déconnexion from '../../../users/déconnexion';
export default class Client extends Component {
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
                    <Link to="/Dashboard" style={{
                        color: 'black', fontSize: '15px',
                        fontFamily: 'Cormorant Infant serif',
                        fontWeight: 'bold'
                    }}>Profile</Link>

                </Menu.Item>

                <Menu.Item key="3">        <Déconnexion /></Menu.Item>
            </Menu>
        );


        return (
            <div>

                <div className="menuCon">

                    <div className="rightMenu">




                        <Dropdown overlay={menu} trigger={['click']}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                <UserOutlined style={{ zoom: '1.5' }} />
                            </a>
                        </Dropdown>

                    </div>


                </div>



            </div>
        )
    }
}
