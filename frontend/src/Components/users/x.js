import React, { Component } from 'react'
import { Drawer, Form, Button, Input, Select, Descriptions, Tag } from "antd"
import {EditOutlined } from '@ant-design/icons';
import jwt from 'jsonwebtoken';



var token = localStorage.getItem('token')
var decoded = jwt.decode(token,);
const { Option } = Select;

class DrawerForm extends Component {

    state = {
        nom: decoded.user.nom,
        prenom: decoded.user.prenom,

        motDePasse: decoded.user.motDePasse,
        telephone: decoded.user.telephone,

        visible: false,
        visibleInput: false,

    };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };
   

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <>
                <Button className="container-nav-button-users-regestir" onClick={this.showDrawer}>
                    Profile
        </Button>
                <Drawer
                    title={false}
                    width={520}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    bodyStyle={{ paddingBottom: 80 }}
                    footer={
                        false
                    }
                >

                    <p>   Nom :{this.state.nom}</p>
                    <p>   Prénom :{this.state.prenom}</p>
                    <p>   Numéro de téléphone: {this.state.telephone}</p>

                    <Button onClick={() => this.setState({ visibleInput: !this.state.visibleInput })} >Modifie profile</Button>






                    <br />
                    <Tag
                        style={{ width: 440, backgroundColor: "transparent", padding: "15px" }}

                        visible={this.state.visibleInput}
                        onClose={() => this.setState({ visibleInput: false })}
                    >
                        <EditOutlined />
                        <div>
                            Nom : <Input defaultValue={this.state.nom} style={{ width: 140, borderColor: "transparent", borderBottomColor: 'black' }} placeholder="Nom" onChange={(e) => { this.setState({ nom: e.target.value }) }} />
                            <br />  <br />
                            Prénom :<Input defaultValue={this.state.prenom} style={{ width: 140, borderColor: "transparent", borderBottomColor: 'black' }} placeholder="Prénom" onChange={(e) => { this.setState({ prenom: e.target.value }) }}
                            />
                            <br />  <br />
                            Numéro de téléphone: <Input defaultValue={this.state.telephone} type="tel" style={{ width: 140, borderColor: "transparent", borderBottomColor: 'black' }} pattern="\d*" placeholder="numéro de téléphone" onChange={(e) => { this.setState({ telephone: e.target.value }) }} />
                        </div>
                    </Tag>
                    <br />   <br />

                    <Button onClick={() => this.setState({ showInputPass: !this.state.showInputPass })} >Changer le mot de passe </Button>
                    <Tag
                        style={{ width: 440, backgroundColor: "transparent", padding: "15px" }}

                        visible={this.state.showInputPass}
                        onClose={() => this.setState({ showInputPass: false })}
                    >
                        <div>
                            <p>Nos mots de passe doivent comprendre au moins 6 caractères </p>
                          <p>Tapez votre mot de passe actuel </p>   <Input style={{ width: 140, borderColor: "transparent", borderBottomColor: 'black' }}

                                placeholder="mot de passe"
                                onChange={(e) => { this.setState({ motDePasse: e.target.value }) }} /> <br/>
                        
                            <p>Tapez le nouveau mot de passe </p>  <Input style={{ width: 140, borderColor: "transparent", borderBottomColor: 'black' }}

                                placeholder="mot de passe"
                                onChange={(e) => { this.setState({ motDePasse: e.target.value }) }} /><br/>
                             <p> Confirmez le nouveau mot de passe</p>  
                                <Input style={{ width: 140, borderColor: "transparent", borderBottomColor: 'black' }}

                                placeholder="mot de passe"
                                onChange={(e) => { this.setState({ motDePasse: e.target.value }) }} />
                        </div>
                    </Tag>

                </Drawer>
            </>
        );
    }
}

export default DrawerForm