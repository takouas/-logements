
import React, { Component } from 'react'
import { Drawer, Form, Button, Input, Select, Descriptions, Tag } from "antd"
import { patchPassUserToApi, patchProfileUserToApi, getUsersFromApi } from '../../api/usersApi'

import { connect } from 'react-redux';

import jwt from 'jsonwebtoken';
import ModifierProfile from './modifierProfile';
import './users.css';


var token = localStorage.getItem('token')
var decoded = jwt.decode(token,);
const { Option } = Select;

class Dashboard extends Component {

    state = {

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


        return (
            <>
                <section className='section-dashbord'   >

                    {user.map(el => <div style={{
                        display: 'flex', flexFlow: 'row wrap',
                        justifyContent: 'space-evenly',
                        backgroundColor: 'rgb(0,0,0,0.7)',
                        paddingTop: '50px'



                    }}>

                        <ModifierProfile el={el} />

                        <div >
                            <h2 className="modifie-profile-pargraphe">Votre profile </h2>
                            <p className="modifie-profile-pargraphe">   Nom :{el.nom}</p>
                            <p className="modifie-profile-pargraphe">   Prénom :{el.prenom}</p>
                            <p className="modifie-profile-pargraphe">   Numéro de téléphone: {el.telephone}</p>

                        </div>




                    </div>)}

                </section>

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


