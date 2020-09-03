import React, { Component } from 'react'

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
        console.log(this.props.el)
        return (
            <div>

                <Button style={{ borderColor: "transparent", }} onClick={() => this.setState({ visibleInput: !this.state.visibleInput })} >Modifier profile</Button>







                <Tag
                    style={{ width: 440, backgroundColor: "transparent", padding: "15px" }}

                    visible={this.state.visibleInput}
                    onClose={() => this.setState({ visibleInput: false })}
                >
                    <Button style={{ backgroundColor: "transparent", borderColor: 'transparent', float: 'right' }} onClick={() => this.setState({ visibleInput: false })}>Fermer</Button><br /><br />

                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div>   <p className="modifie-profile-pargraphe">Nom*  </p>
                            <p className="modifie-profile-pargraphe">Prénom*   </p>
                            <p className="modifie-profile-pargraphe">Numéro de téléphone *</p>   </div>

                        <div>
                            <Input defaultValue={this.state.nom} style={{ width: 140, borderColor: "transparent", borderBottomColor: 'black' }} placeholder="Nom" onChange={(e) => { this.setState({ nom: e.target.value }) }} />
                            <br />
                            <Input defaultValue={this.state.prenom} style={{ width: 140, borderColor: "transparent", borderBottomColor: 'black' }} placeholder="Prénom" onChange={(e) => { this.setState({ prenom: e.target.value }) }}
                            />
                            <br />
                            <Input defaultValue={this.state.telephone} type="tel" style={{ width: 140, borderColor: "transparent", borderBottomColor: 'black' }} pattern="\d*" placeholder="numéro de téléphone" onChange={(e) => { this.setState({ telephone: e.target.value }) }} />
                        </div>
                        <EditOutlined />
                    </div>


                    <Button onClick={() => this.props.patchProfileUserToApi({
                        _id:this.state._id,
                        nom: this.state.nom,
                        prenom: this.state.prenom,
                        telephone: this.state.telephone,


                    })} >Enregistrer</Button>
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