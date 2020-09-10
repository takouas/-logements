
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

    
                    {user.map(el => <div>
                        <div><p className="modifie-profile-pargraphe">   Nom :{el.nom}</p>
                            <p className="modifie-profile-pargraphe">   Prénom :{el.prenom}</p>
                            <p className="modifie-profile-pargraphe">   Numéro de téléphone: {el.telephone}</p></div>




                        <hr></hr>
                        <div >
                            <ModifierProfile el={el} />
                            <br />


                    
                        </div> </div>)}

             

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


