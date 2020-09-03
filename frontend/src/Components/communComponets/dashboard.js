
import React, { Component } from 'react'
import { Drawer, Form, Button, Input, Select, Descriptions, Tag } from "antd"
import { patchPassUserToApi, patchProfileUserToApi, getUsersFromApi } from '../../api/usersApi'
import { EditOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import Déconnexion from '../users/déconnexion';
import jwt from 'jsonwebtoken';
import ModifierProfile from '../users/modifierProfile';



var token = localStorage.getItem('token')
var decoded = jwt.decode(token,);
const { Option } = Select;

class Dashboard extends Component {

    state = {
        // _id: decoded.user._id,

        // nom: decoded.user.nom,
        // prenom: decoded.user.prenom,
        // motDePasse: decoded.user.motDePasse,

        // telephone: decoded.user.telephone,

        visible: false,
        visibleInput: false,

    };

    componentDidMount() {
        this.props.getUsersFromApi()
    }

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
        const user = this.props.stateUsers.filter(el => decoded && decoded.user.email === el.email)
        //  console.log(user)
        return (
            <>

                <Button className="container-nav-button-users-profile" onClick={this.showDrawer}>
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

                    {user.map(el => <div>
                        <div><p className="modifie-profile-pargraphe">   Nom :{el.nom}</p>
                            <p className="modifie-profile-pargraphe">   Prénom :{el.prenom}</p>
                            <p className="modifie-profile-pargraphe">   Numéro de téléphone: {el.telephone}</p></div>




                        <hr></hr>
                        <center>
                            <ModifierProfile el={el} />
                            <br />

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
                                <Button >Enregistrer</Button>
                            </Tag>
                            <hr></hr>
                            <Déconnexion />
                        </center> </div>)}

                </Drawer>

            </>
        );
    }
}

const mapStateToProps = (state) => ({
    stateUsers: state.stateUsers
})
const mapDispatchToProps = (dispatch) => ({

    patchPassUserToApi: (el) => dispatch(patchPassUserToApi(el)),
    patchProfileUserToApi: (el) => dispatch(patchProfileUserToApi(el)),
    getUsersFromApi: () => dispatch(getUsersFromApi())
})
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)


