

import React, { Component } from 'react'
import { Modal, Button, Form, Input, Checkbox } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { postUsersLoginToApi } from "../../api/usersApi"
import './users.css';
import { connect } from 'react-redux';

// import jwt from 'jsonwebtoken';


// var token = localStorage.getItem('token')
// var decoded = jwt.decode(token,);


// if (decoded.user !== null) { alert(decoded.user.email) }
// else {
//   var user = "guest"
// }



const onFinish = values => {
  console.log('Received values of form: ', values);
};

class Connection extends Component {
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
          Connexion
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
            backgroundColor: '#e00034'
          }}
        >
          <div style={{
            fontSize: 15,
            fontFamily: 'Cormorant Infant serif',
            fontWeight: 'bold',

          }}>

            <Form
              name="normal_login"
              className="login-form"


              onFinish={onFinish}
            >




              <Form.Item name={['user', 'email']} rules={[{
                type: 'email', required: true,
                message: 'SVP entrer votre adresse email ! ',
              }]}>
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="E-mail" onChange={(e) => { this.setState({ email: e.target.value }) }} />
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
                  placeholder="mot de passe" onChange={(e) => { this.setState({ motDePasse: e.target.value }) }}
                />


              </Form.Item>

              <Form.Item>

                <Button className='button-connecxion-inscription' htmlType="submit" style={{
                  fontSize: 15,
                  fontFamily: 'Cormorant Infant serif',
                  fontWeight: 'bold', backgroundColor: '#e00034', color: '#fff'
                }}
                  onClick={
                    () =>
                      this.props.postUsersLoginToApi(

                        {
                          email: this.state.email,
                          motDePasse: this.state.motDePasse
                        }
                      )
                  }>
                  Connexion
        </Button>

              </Form.Item>
            </Form>




          </div>
        </Modal>
      </>
    );
  }
}
const mapStateToProps = () => {

}
const mapDispatchToProps = (dispatch) => ({
  postUsersLoginToApi: (el) => dispatch(postUsersLoginToApi(el))

})

export default connect(mapStateToProps, mapDispatchToProps)(Connection)
