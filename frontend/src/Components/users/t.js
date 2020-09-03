
import React, { Component } from 'react'
import { Modal, Button, Form, Input, Checkbox, Select, Tooltip, Descriptions } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { postUsersToApi } from "../../api/usersApi"
import './users.css';
import { connect } from 'react-redux';
import jwt from 'jsonwebtoken';



var token = localStorage.getItem('token')
var decoded = jwt.decode(token,);

const onFinish = values => {
    console.log('Received values of form: ', values);
};

const { Option } = Select;




class Inscription extends Component {
    state = {
        nom: decoded.user.nom,
        prenom: decoded.user.prenom,

        motDePasse: decoded.user.motDePasse,
        telephone: decoded.user.telephone,

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
                <Button className="container-nav-button-users-regestir" onClick={this.showModal} style={{
                    fontSize: 15,
                    fontFamily: 'Cormorant Infant serif',
                    fontWeight: 'bold'
                }}>
                    Info
        </Button>
                <Modal
                    visible={visible}
                    title={false}

                    onCancel={this.handleCancel}
                    footer={false} style={{
                        fontSize: 15,
                        fontFamily: 'Cormorant Infant serif',
                        fontWeight: 'bold',

                    }}
                >
                    <div >
                        <Descriptions title="User Info">
                            <Descriptions.Item > <Form.Item name=''  >
                                Nom :{this.state.nom}
                                <Input style={{ width: 140, borderColor: "transparent" }} placeholder="Nom" onChange={(e) => { this.setState({ nom: e.target.value }) }}
                                /> </Form.Item></Descriptions.Item>
                            <Descriptions.Item >

                                <Form.Item name=''  >
                                    Prénom :{this.state.prenom}
                                    <Input style={{ width: 140, borderColor: "transparent" }} placeholder="Prénom" onChange={(e) => { this.setState({ prenom: e.target.value }) }}
                                    />
                                </Form.Item></Descriptions.Item>

                            <Descriptions.Item > <Form.Item name=''   >
                                Numéro de téléphone: {this.state.telephone}
                                <Input type="tel" style={{ width: 140, borderColor: "transparent" }} pattern="\d*" placeholder="numéro de téléphone" onChange={(e) => { this.setState({ telephone: e.target.value }) }} />
                            </Form.Item>

                            </Descriptions.Item>
                            <Descriptions.Item >

                                <Form.Item
                                    name="password"

                                >
                                    Nouveau mot de passe
                                <Input style={{ width: 140, borderColor: "transparent" }}

                                        placeholder="mot de passe"
                                        onChange={(e) => { this.setState({ motDePasse: e.target.value }) }} />
                                </Form.Item>
                            </Descriptions.Item>
                        </Descriptions>
                        <Form
                            name="normal_login"

                            initialValues={{
                                remember: true,
                            }}

                            onFinish={onFinish}
                        >















                            <Form.Item name=''>

                                <Button className='button-connecxion-inscription' htmlType="submit" style={{
                                    fontSize: 15,
                                    fontFamily: 'Cormorant Infant serif',
                                    fontWeight: 'bold', backgroundColor: '#e00034', color: '#fff'
                                }}

                                >
                                    modifier
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


})

export default connect(mapStateToProps, mapDispatchToProps)(Inscription)