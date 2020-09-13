import React, { Component } from 'react'
import { Drawer, Button, Dropdown, Menu, Modal } from 'antd';

import { BrowserRouter, Route, Link, Switch, Redirect, } from "react-router-dom";
import '../../page/navbar.css'
import { UserOutlined, CloseOutlined } from '@ant-design/icons';

import Connection from '../../users/connecxion';
import Inscription from '../../users/inscription';
export default class PublicLink extends Component {

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

        const { visible } = this.state;
        const { visibleIns } = this.state;
        const menu = (
            <Menu>
                <Menu.Item key="0">
                    <Button onClick={this.showModal} style={{
                        fontSize: 15,
                        fontFamily: 'Cormorant Infant serif',
                        fontWeight: 'bold', borderColor: 'transparent'

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
                </Menu.Item>
                <Menu.Item key="1">
                    <Button onClick={this.showModalIns} style={{
                        fontSize: 15,
                        fontFamily: 'Cormorant Infant serif',
                        fontWeight: 'bold', borderColor: 'transparent'
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

                    </Modal></Menu.Item>
            </Menu>
        );
        return (

            <div className="menuCon">

                <div className="rightMenu">

                    <Dropdown overlay={menu} trigger={['click']}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            <UserOutlined style={{zoom:'1.5'}} />
                        </a>
                    </Dropdown>
                </div>
            
                <Dropdown  className="barsMenu"  overlay={menu} trigger={['click']}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    <span className="barsBtn"></span>
                    </a>
                </Dropdown>
            </div>

        )
    }
}
