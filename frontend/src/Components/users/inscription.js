

import React, { Component } from 'react'
import { Modal, Button, Form, Input, Checkbox, Select, Tooltip } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { postUsersToApi } from "../../api/usersApi"
import './users.css';
import { connect } from 'react-redux';


const onFinish = values => {
    console.log('Received values of form: ', values);
};

const { Option } = Select;




class Inscription extends Component {
    state = {
        nom: "",
        prenom: "",
        role: "",
        motDePasse: "",
        telephone: "",
        email: "",
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
    submit = (e) => {

        this.props.postUsersToApi({
            nom: this.state.nom,
            prenom: this.state.prenom,
            role: this.state.role,
            motDePasse: this.state.motDePasse,
            telephone: this.state.telephone,
            email: this.state.email
        })
    }



    render() {
        const { visible } = this.state;
        return (
            <>
                <Button className="container-nav-button-users-regestir" onClick={this.showModal} style={{
                    fontSize: 15,
                    fontFamily: 'Cormorant Infant serif',
                    fontWeight: 'bold'
                }}>
                    Inscription
        </Button>
                <Modal
                    visible={visible}
                    title="Inscription"

                    onCancel={this.handleCancel}
                    footer={false} style={{
                        fontSize: 15,
                        fontFamily: 'Cormorant Infant serif',
                        fontWeight: 'bold',
                        backgroundColor: '#e00034'
                    }}
                >
                    <div >
                        <Form
                            name="normal_login"

                            initialValues={{
                                remember: true,
                            }}

                            onFinish={onFinish}
                        >
                            <div className="container-inscription-nom-prenom-tél-role">
                                <span> <p>* Nom :</p>
                                    <Form.Item name='nom' rules={[{
                                        required: true,
                                        message: 'SVP entrer votre  ! ',
                                    }]}  >
                                        <Input style={{ width: 200 }} placeholder="Nom" onChange={(e) => { this.setState({ nom: e.target.value }) }} rules={[
                                            {
                                                required: true,
                                                message: '!',
                                            },
                                        ]} /> </Form.Item></span>
                                <span> <p>* Prénom :</p>
                                    <Form.Item name='prénom' rules={[{
                                        required: true,
                                        message: 'SVP entrer votre  ! ',
                                    }]}  >
                                        <Input style={{ width: 200 }} placeholder="Prénom" onChange={(e) => { this.setState({ prenom: e.target.value }) }} rules={[
                                            {
                                                required: true,
                                                message: '!',
                                            },
                                        ]} />
                                    </Form.Item></span>
                            </div>




                            <Form.Item name={['user', 'email']} rules={[{
                                type: 'email', required: true,
                                message: 'SVP entrer votre adresse email ! ',
                            }]}  >* E-mail
                                <Input placeholder="E-mail" onChange={(e) => { this.setState({ email: e.target.value }) }} />
                            </Form.Item>


                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: '!',
                                    },
                                ]}
                            > * Mot de passe
                                <Input.Password

                                    placeholder="mot de passe" iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                    onChange={(e) => { this.setState({ motDePasse: e.target.value }) }} rules={[
                                        {
                                            required: true,
                                            message: '!',
                                        },
                                    ]} />
                            </Form.Item>



                            <div className="container-inscription-nom-prenom-tél-role">
                                <span>
                                    <p>* Role</p>
                                    <Form.Item name='role' rules={[{
                                        required: true,
                                        message: 'SVP entrer votre  ! ',
                                    }]}  >
                                        <Select style={{ width: 200 }} placeholder="sélectionner  rôle" onChange={(value) => { this.setState({ role: value }) }} rules={[
                                            {
                                                required: true,
                                                message: '!',
                                            },
                                        ]}>

                                            <Option value="client">Client</Option>
                                            <Option value="propriétaire">Propriétaire</Option>

                                        </Select>
                                    </Form.Item>
                                </span>
                                <span> <p>*  Numéro de téléphone</p>
                                    <Form.Item name='Numéro' rules={[{
                                        required: true,
                                        message: 'SVP entrer votre  ! ',
                                    }]}  >
                                        <Input type="tel" style={{ width: 200 }} pattern="\d*" placeholder=" votre numéro de téléphone" onChange={(e) => { this.setState({ telephone: e.target.value }) }} rules={[
                                            {
                                                required: true,
                                                message: '!',
                                            },
                                        ]} />
                                    </Form.Item>
                                </span>


                            </div>


                            <Form.Item name=''>
                                <p>* Champ obligatoire</p>
                                <Button className='button-connecxion-inscription' htmlType="submit" style={{
                                    fontSize: 15,
                                    fontFamily: 'Cormorant Infant serif',
                                    fontWeight: 'bold', backgroundColor: '#e00034', color: '#fff'
                                }}
                                    onClicK={
                                        this.submit
                                    }
                                >
                                    Inscription
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
    postUsersToApi: (el) => dispatch(postUsersToApi(el))

})

export default connect(mapStateToProps, mapDispatchToProps)(Inscription)