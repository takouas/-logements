

import React, { Component } from 'react'
import { Modal, Button, Form, Input, Checkbox, Select, Tooltip } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

import './users.css';



const onFinish = values => {
    console.log('Received values of form: ', values);
};

const { Option } = Select;


function handleChange(value) {
    console.log(`selected ${value}`);
}


export default class Inscription extends Component {
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
                <Button className="container-nav-button-users-regestir" onClick={this.showModal}>
                    Inscription
        </Button>
                <Modal
                    visible={visible}
                    title="Inscription"
             
                    onCancel={this.handleCancel}
                    footer={[


                    ]}
                >
                    <div>

                        <div className="container-inscription-nom-prenom-tél-role">
                            <Input style={{ width: 200 }} placeholder="Nom"  />
                            <Input style={{ width: 200 }} placeholder="Prénom" />
                        </div>

                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                        >


                            <Form.Item name={['user', 'email']} rules={[{ type: 'email' }]}>
                                <Input placeholder="E-mail" />
                            </Form.Item>


                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: '!',
                                    },
                                ]}
                            >
                                <Input.Password
                                  
                                    placeholder="mot de passe" iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                />
                            </Form.Item>



                            <div className="container-inscription-nom-prenom-tél-role">

                                <Select defaultValue="Client" style={{ width: 200 }} onChange={handleChange}>

                                    <Option value="Client">Client</Option>
                                    <Option value="propriétaire">propriétaire</Option>

                                </Select>


                                <Input type="tel" style={{ width: 200 }} pattern="\d*" placeholder=" votre numéro de téléphone" />



                            </div>


                     
                                <Button className='button-connecxion' htmlType="submit" >
                                    Connecxion
        </Button>

                       
                        </Form>




                    </div>
                </Modal>
            </>
        );
    }
}

