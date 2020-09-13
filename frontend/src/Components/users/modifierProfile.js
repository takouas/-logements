import React, { Component } from 'react'
import './users.css';
import { getUsersFromApi, patchPassUserToApi, patchProfileUserToApi, } from "../../api/usersApi"
import jwt from 'jsonwebtoken';
import { EditOutlined } from '@ant-design/icons';
import { Drawer, Form, Button, Input, Select, Descriptions, Tag } from "antd"
import { connect } from 'react-redux';

const { Option } = Select;

var token = localStorage.getItem('token')
var decoded = jwt.decode(token,);
class ModifierProfile extends Component {
    state = {
        _id: this.props.el._id,

        nom: this.props.el.nom,
        prenom: this.props.el.prenom,


        telephone: this.props.el.telephone,

        visible: false,


        visibleInput: false,

    }



    render() {
        console.log(this.state.nouveauMotDePasse)
        return (
            <div>
              
                    <Button style={{  width: "250px" }} onClick={() => this.setState({ visibleInput: !this.state.visibleInput })} >Modifier profile</Button>

           

                <br />



                <Tag
                    style={{ width: 250, backgroundColor: "transparent" }}

                    visible={this.state.visibleInput}
                    onClose={() => this.setState({ visibleInput: false })}
                >
                    <span>
                        <EditOutlined />
                        <Button style={{ backgroundColor: "transparent", borderColor: 'transparent', float: 'right' }} onClick={() => this.setState({ visibleInput: false })}>Fermer</Button> </span><br /><br />

                    <div >
                        <div>
                        </div>

                        <div>
                        <Form.Item
                                 label="* Nom"
                                 rules={[
                                    {
                                        required: true,

                                    }
                                ]}
                                hasFeedback
                            >
                                   
                               
                                  
                            <Input defaultValue={this.state.nom} onChange={(e) => { this.setState({ nom: e.target.value }) }} />
                                </Form.Item>
                                <Form.Item
                                 label="* Prénom "
                                 rules={[
                                    {
                                        required: true,

                                    }
                                ]}
                                hasFeedback
                            >
                                   
                               
                                 
                            <Input defaultValue={this.state.prenom}  onChange={(e) => { this.setState({ prenom: e.target.value }) }}
                            />
                                </Form.Item>
                                <Form.Item
                                 label="* Numéro de téléphone"
                                 rules={[
                                    {
                                        required: true,

                                    }
                                ]}
                                hasFeedback
                            >
                                   
                                  
                            <Input defaultValue={this.state.telephone} type="tel"  pattern="\d*" placeholder="numéro de téléphone" onChange={(e) => { this.setState({ telephone: e.target.value }) }} />

                                </Form.Item>
                         

                            
                        </div>

                    </div>

                    <br />
                    <Button style={{ float: 'right', marginBottom: '15px' }} onClick={() => this.props.patchProfileUserToApi({
                        _id: this.state._id,
                        nom: this.state.nom,
                        prenom: this.state.prenom,
                        telephone: this.state.telephone,


                    })} >Enregistrer</Button>

                </Tag>

                <br />
            
                <Button style={{ width: "250px"}} onClick={() => this.setState({ showInputPass: !this.state.showInputPass })} closable>Changer le mot de passe </Button>
            
                <br />
                <Tag
                    style={{ width: 250, backgroundColor: "transparent" }}

                    visible={this.state.showInputPass}
                    onClose={() => this.setState({ showInputPass: false })}
                >
                    <Button style={{ backgroundColor: "transparent", borderColor: 'transparent', float: 'right' }} onClick={() => this.setState({ showInputPass: false })}  >Fermer</Button><br /><br />
                    <p className="modifie-profile-pargraphe">Nos mots de passe doivent <br />comprendre au moins 6 caractères </p>
                    <div >

                        <div>

                            <br />

                            <Form>
                                <Form.Item
                                 name="passss"
                                 label="Tapez votre mot de passe actuel: "
                                 rules={[
                                    {
                                        required: true,
                                        message: "svp Tapez votre mot de passe actuel!"
                                    }
                                ]}
                                hasFeedback
                            >
                                    <Input.Password onChange={(e) => { this.setState({ motDePasse: e.target.value }) }}
                                    />

                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    label="Tapez le nouveau mot de passe : "
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please input your password!"
                                        }
                                    ]}
                                    hasFeedback
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item
                                    name="confirm"
                                    label=" Confirmez le nouveau mot de passe :"
                                    dependencies={["password"]}
                                    hasFeedback
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please confirm your password!"
                                        },
                                        ({ getFieldValue }) => ({
                                            validator(rule, value) {
                                                if (!value || getFieldValue("password") === value) {
                                                    return Promise.resolve();
                                                }

                                                return Promise.reject(
                                                    "The two passwords that you entered do not match!"
                                                );
                                            }
                                        })
                                    ]}
                                >
                                    <Input.Password onChange={(e) => { this.setState({ nouveauMotDePasse: e.target.value }) }} />
                                </Form.Item>
                            </Form>
                        </div>

                    </div>

                    <br />
                    <Button style={{ float: 'right', marginBottom: '15px' }}
                        onClick={() => this.props.patchPassUserToApi({
                            _id: this.state._id,
                            nouveauMotDePasse: this.state.nouveauMotDePasse,
                            motDePasse: this.state.motDePasse

                        })}>Enregistrer</Button>

                </Tag>

            </div>
        )
    }
}
const mapStateToProps = (state) => ({



});

const mapDispatchToProps = (dispatch) => ({
    patchPassUserToApi: (el) => dispatch(patchPassUserToApi(el)),
    patchProfileUserToApi: (el) => dispatch(patchProfileUserToApi(el)),


});
export default connect(mapStateToProps, mapDispatchToProps)(ModifierProfile)