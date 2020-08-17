import React, { Component } from 'react'
import { Modal, Button, Form, Input, Checkbox } from 'antd';
import { DeleteOutlined, CaretDownOutlined, UserOutlined, MailOutlined, UnlockOutlined, PhoneOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';

import { getUsersFromApi } from "../../api/usersApi"





export default class Details extends Component {


    state = {

        visible: false,
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };


    handleCancel = () => {
        this.setState({ visible: false });
    };

    render() {
        const { visible } = this.state;
        return (
            <>
                <Button className="" onClick={this.showModal}>
                    <CaretDownOutlined className='page-admin-button-détails' />
                </Button>
                <Modal
                    visible={visible}
                    title="Details"
                    onCancel={this.handleCancel}
                    footer={false}
                    style={{
                        fontSize: 15,
                        fontFamily: 'Cormorant Infant serif',
                        fontWeight: 'bold',
                    }}
                >
                    <div>
                        <p className='details'><UserOutlined /> Prenom : {this.props.prenom}</p>
                        <hr></hr>
                        <p className='details'><MailOutlined /> E-mail :  {this.props.email}</p>
                        <hr></hr>
                        <p className='details'><UnlockOutlined /> Mot de passe :  {this.props.motDePasse} </p>
                        <hr></hr>
                        <p className='details'> <PhoneOutlined /> Telephone : {this.props.telephone} </p>

                    </div>
                </Modal>
            </>
        );
    }
}

