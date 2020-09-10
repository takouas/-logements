

import React, { Component } from 'react'
import { Modal, Button, Form, Input, Checkbox, Select, Tooltip } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { postUsersToApi } from "../../api/usersApi"
import './users.css';
import { connect } from 'react-redux';




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
    onFinish = values => {
        console.log('Received values of form: ', values);
    };
 


    submit = (e) => {
        console.log("kamel", this.state)
        this.onFinish()
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
         
                    <div >
                        <Form
                            onFinish={
                                this.submit
                            }
                            name="normal_login"

                            initialValues={{
                                remember: true,
                            }}


                        >
                            <div className="container-inscription-nom-prenom-tél-role">
                                <span> <p>* Nom :</p>
                                    <Form.Item name='nom' rules={[{
                                        required: true,
                                        message: 'SVP entrer votre  nom ! ',
                                    }]}  >
                                        <Input style={{ width: 200 }} placeholder="Nom" onChange={(e) => { this.setState({ nom: e.target.value }) }} rules={[
                                            {
                                                required: true,
                                                message: '!',
                                            },
                                        ]} />
                                    </Form.Item></span>
                                <span> <p>* Prénom :</p>
                                    <Form.Item name='Prenom' rules={[{
                                        required: true,
                                        message: 'SVP entrer votre  prenom ! ',
                                    }]}  >
                                        <Input style={{ width: 200 }} placeholder="prenom" onChange={(e) => { this.setState({ prenom: e.target.value }) }} rules={[
                                            {
                                                required: true,
                                                message: '!',
                                            },
                                        ]} />
                                    </Form.Item></span>
                            </div>


                            <Form.Item name='EMAIL' rules={[{
                                type: "email",
                                required: true,
                                message: 'SVP entrer votre  email ! ',
                            }]}  >
                                <Input placeholder="email" onChange={(e) => { this.setState({ email: e.target.value }) }} rules={[
                                    {
                                        type: "email",
                                        required: true,
                                        message: '!',
                                    },
                                ]} />
                            </Form.Item>

                            <Form.Item name='SALHH' rules={[{
                                required: true,
                                message: 'SVP entrer votre  nom  mot de Passe! ',
                            }]}  >
                                <Input.Password placeholder="mot De Passe " onChange={(e) => { this.setState({ motDePasse: e.target.value }) }} rules={[
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
                                <input className='button-connecxion-inscription' type="submit" style={{
                                    fontSize: 15,
                                    fontFamily: 'Cormorant Infant serif',
                                    fontWeight: 'bold', backgroundColor: '#e00034', color: '#fff'
                                }}
                                    value="Inscription"
                                />




                            </Form.Item>
                        </Form>



                    </div>
            
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