import React, { Component } from 'react'
import GestionnaireAnnonces from '../gestionnaireAnnonces/gestionnaireAnnonces'
import GestionnaireUsers from '../gestionnaireUsers/gestionnaireUsers'
import { BrowserRouter, Route, Link, Switch, Redirect, } from "react-router-dom";
import bity from '../../image/logoBity.png'
import { UserOutlined, CloseOutlined } from '@ant-design/icons';
import './interface.css'
import Dashboard from '../page/dashboard'
import { Drawer, Button, Dropdown, Menu } from 'antd';
import Déconnexion from '../users/déconnexion';
export default class Admin extends Component {
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
                <nav className="menuBar">
                    <div className="logo">
                        <Link to="/"> <img src={bity} className='navbar-logo-bity' ></img></Link>
                    </div>
                    <div className="menuCon">
                        <div className="leftMenu">
                            <Link to="/GestionnaireUsers" style={{
                                paddingRight: '15px', color: 'black', fontSize: 15,
                                fontFamily: 'Cormorant Infant serif',
                                fontWeight: 'bold'
                            }}> Utilisateurs</Link>
                        </div>
                        <div className="leftMenu">
                            <Link to="/GestionnaireAnnonces" style={{
                                paddingRight: '15px', color: 'black', fontSize: 15,
                                fontFamily: 'Cormorant Infant serif',
                                fontWeight: 'bold'
                            }}>Annonces</Link>
                        </div>
                        <div className="rightMenu">

                           


                            <Dropdown overlay={menu} trigger={['click']}>
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    <UserOutlined />
                                </a>
                            </Dropdown>

                        </div>
                        <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
                            <span className="barsBtn"></span>
                        </Button>
                        <Drawer
                            title={false}
                            placement="right"
                            closable={false}
                            onClose={this.onClose}
                            visible={this.state.visible}
                        >
                            <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                                <CloseOutlined />
                            </Button>
                            <div>  <Link to="/GestionnaireAnnonces" style={{
                                paddingRight: '15px', color: 'black', fontSize: 15,
                                fontFamily: 'Cormorant Infant serif',
                                fontWeight: 'bold'
                            }}>Annonces</Link></div>
                            <div>
                                <Link to="/GestionnaireUsers" style={{
                                    paddingRight: '15px', color: 'black', fontSize: 15,
                                    fontFamily: 'Cormorant Infant serif',
                                    fontWeight: 'bold'
                                }}> Utilisateurs</Link>
                            </div>



                            <Link to="/Dashboard" style={{
                                paddingRight: '15px', color: 'black', fontSize: 15,
                                fontFamily: 'Cormorant Infant serif',
                                fontWeight: 'bold'
                            }}> profile</Link>
                             <Déconnexion />
                        </Drawer>

                    </div>
                </nav>

                <Route exact path="/GestionnaireAnnonces" render={() => <GestionnaireAnnonces />} />
                <Route exact path='/GestionnaireUsers' render={() => <GestionnaireUsers />} />
                <Route exact path='/Dashboard' render={() => <Dashboard />} />

            </div>
        )
    }
}
