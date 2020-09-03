import React, { Component } from 'react'

import { getUsersFromApi, patchPassUserToApi, patchProfileUserToApi, } from "../../api/usersApi"
import jwt from 'jsonwebtoken';

import { Drawer, Form, Button, Input, Select, Descriptions, Tag } from "antd"
import { connect } from 'react-redux';

const { Option } = Select;

var token = localStorage.getItem('token')
var decoded = jwt.decode(token,);
class ModifierPass extends Component {
    state = {
        _id: this.props.el._id,
        motDePasse: this.state.motDePasse,

        visible: false,


        visibleInput: false,

    }



    render() {
        console.log(this.props.el)
        return (
            <div>

                <Button style={{ borderColor: "transparent", }} onClick={() => this.setState({ showInputPass: !this.state.showInputPass })} closable>Changer le mot de passe </Button>
                <Tag
                    style={{ width: 440, backgroundColor: "transparent", padding: "15px" }}

                    visible={this.state.showInputPass}
                    onClose={() => this.setState({ showInputPass: false })}
                >
                    <Button style={{ backgroundColor: "transparent", borderColor: 'transparent', float: 'right' }} onClick={() => this.setState({ showInputPass: false })}  >Fermer</Button><br /><br />
                    <p className="modifie-profile-pargraphe">Nos mots de passe doivent comprendre au moins 6 caractères </p>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div>

                            <p className="modifie-profile-pargraphe">Tapez votre mot de passe actuel : </p>
                            <p className="modifie-profile-pargraphe">Tapez le nouveau mot de passe : </p>
                            <p className="modifie-profile-pargraphe"> Confirmez le nouveau mot de passe :</p>
                        </div>
                        <div>
                            <Input style={{ width: 140, borderColor: "transparent", borderBottomColor: 'black' }}


                                onChange={(e) => { this.setState({ motDePasse: e.target.value }) }} />
                            <br />
                            <Input style={{ width: 140, borderColor: "transparent", borderBottomColor: 'black' }}


                                onChange={(e) => { this.setState({ motDePasse: e.target.value }) }} />
                            <br />

                            <Input style={{ width: 140, borderColor: "transparent", borderBottomColor: 'black' }}


                                onChange={(e) => { this.setState({ motDePasse: e.target.value }) }} />
                        </div>

                    </div>
                    <Button onClick={() => this.props.patchPassUserToApi({
                        _id: this.state._id,
                        motDePasse: this.state.motDePasse,



                    })} >Enregistrer</Button>

                </Tag>





            </div >
        )
    }
}
const mapStateToProps = (state) => ({



});

const mapDispatchToProps = (dispatch) => ({
    patchPassUserToApi: (el) => dispatch(patchPassUserToApi(el)),



});
export default connect(mapStateToProps, mapDispatchToProps)(ModifierPass)