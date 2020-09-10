import React, { Component } from 'react'
import bity from '../../image/logoBity.png'
import { Drawer, Button, Dropdown, Menu, Modal } from 'antd';
import './navbar.css';
import { BrowserRouter, Route, Link, Switch, Redirect, } from "react-router-dom";

import { UserOutlined, CloseOutlined } from '@ant-design/icons';
import '../interface/interface.css'
import Connection from '../users/connecxion';
import Inscription from '../users/inscription';

export default class NavPublicPage extends Component {


    state = {
        current: 'mail',
        visibleD: false,
        visibleIns: false,
        visible: false,
    }
    showDrawer = () => {
        this.setState({
            visibleD: true,

        });
    };

    onClose = () => {
        this.setState({
            visibleD: false,
        });
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    showModalIns = () => {
        this.setState({
            visibleIns: true,
        });
    };
    handleCancel = () => {
        this.setState({ visible: false });
    };

    handleCancelIn = () => {
        this.setState({ visibleIns: false });
    };

    render() {
        const menu = (
            <Menu>
                <Menu.Item key="0">
                    <Connection />
                    <Inscription />
                </Menu.Item>


            </Menu>
        );
        const { visible } = this.state;
        const { visibleIns } = this.state;
        return (
            <div>






                <nav className="menuBar">
                    <div className="logo">
                        <Link to="/"> <img src={bity} className='navbar-logo-bity' ></img></Link>
                    </div>
                    <div className="menuCon">

                        <div className="leftMenu">

                        </div>
                        <div className="rightMenu">
                            <Button className="container-nav-button-users-regestir" onClick={this.showModal} style={{
                                fontSize: 15,
                                fontFamily: 'Cormorant Infant serif',
                                fontWeight: 'bold'
                            }}>
                                Connection
        </Button>
                            <Modal
                                visible={visible}
                                title="Connection"

                                onCancel={this.handleCancel}
                                footer={false} style={{
                                    fontSize: 15,
                                    fontFamily: 'Cormorant Infant serif',
                                    fontWeight: 'bold',
                                    backgroundColor: '#e00034'
                                }}
                            >
                                <Connection />


                            </Modal>

                            <Button className="container-nav-button-users-regestir" onClick={this.showModalIns} style={{
                                fontSize: 15,
                                fontFamily: 'Cormorant Infant serif',
                                fontWeight: 'bold'
                            }}>
                                Inscription
        </Button>
                            <Modal
                                visible={visibleIns}
                                title="Inscription"

                                onCancel={this.handleCancelIn}
                                footer={false} style={{
                                    fontSize: 15,
                                    fontFamily: 'Cormorant Infant serif',
                                    fontWeight: 'bold',
                                    backgroundColor: '#e00034'
                                }}
                            >


                                <Inscription />

                            </Modal>

                        </div>
                        <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
                            <span className="barsBtn"></span>
                        </Button>
                        <Drawer
                            title={false}
                            placement="right"
                            closable={false}
                            onClose={this.onClose}
                            visible={this.state.visibleD}
                        >
                            <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                                <CloseOutlined />
                            </Button>

                            <div>

                                <Button onClick={this.showModal} style={{
                                    fontSize: 15,
                                    fontFamily: 'Cormorant Infant serif',
                                    fontWeight: 'bold',
                                    borderColor: 'transparent'
                                }}>
                                    Connection
        </Button>
                                <Modal
                                    visible={visible}
                                    title="Connection"

                                    onCancel={this.handleCancel}
                                    footer={false} style={{
                                        fontSize: 15,
                                        fontFamily: 'Cormorant Infant serif',
                                        fontWeight: 'bold',
                                        backgroundColor: '#e00034'
                                    }}
                                >
                                    <Connection />


                                </Modal>
                                <br />

                                <Button onClick={this.showModalIns} style={{
                                    borderColor: 'transparent',
                                    fontSize: 15,
                                    fontFamily: 'Cormorant Infant serif',
                                    fontWeight: 'bold'
                                }}>
                                    Inscription
        </Button>
                                <Modal
                                    visible={visibleIns}
                                    title="Inscription"

                                    onCancel={this.handleCancelIn}
                                    footer={false} style={{
                                        fontSize: 15,
                                        fontFamily: 'Cormorant Infant serif',
                                        fontWeight: 'bold',
                                        backgroundColor: '#e00034'
                                    }}
                                >


                                    <Inscription />

                                </Modal>
                            </div>




                        </Drawer>

                    </div>
                </nav>




























            </div>
        )
    }
}
