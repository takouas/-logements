

import React, { Component } from 'react'
import { Modal, Button, Form, Input, Checkbox } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import './users.css';



const onFinish = values => {
  console.log('Received values of form: ', values);
};

export default class Connection extends Component {
  state = {
    loading: false,
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
    const { visible, loading } = this.state;
    return (
      <>
        <Button className="container-nav-button-users-connection" onClick={this.showModal} style={{
          fontSize: 15,
          fontFamily: 'Cormorant Infant serif',
          fontWeight: 'bold',
        }}>
          Connecxion
        </Button>
        <Modal
          visible={visible}
          title="Connecxion"
          onCancel={this.handleCancel}
          footer={false}
          style={{
            fontSize: 15,
            fontFamily: 'Cormorant Infant serif',
            fontWeight: 'bold',
          }}
        >
          <div>

            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}

              onFinish={onFinish}
            >




              <Form.Item name={['user', 'email']} rules={[{
                type: 'email', required: true,
                message: 'SVP entrer votre adresse email ! ',
              }]}>
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="E-mail" />
              </Form.Item>





              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: ' SVP entrer votre mot de passe et appuyer sur le bouton Connecxion! ',
                  },
                ]}
              >
                <Input.Password

                  placeholder="mot de passe" iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="mot de passe"
                />


              </Form.Item>

              <Form.Item>

                <Button className='button-connecxion-inscription' htmlType="submit" style={{
                  fontSize: 15,
                  fontFamily: 'Cormorant Infant serif',
                  fontWeight: 'bold',
                }} >
                  Connecxion
        </Button>

              </Form.Item>
            </Form>




          </div>
        </Modal>
      </>
    );
  }
}

