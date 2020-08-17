import React, { Component } from 'react'
import './gestionnaireUsers.css'
import { connect } from 'react-redux';

import { Table, Button } from 'antd';
import { getUsersFromApi, deleteUsersFromApi } from "../../api/usersApi"

import { DeleteOutlined, CaretDownOutlined } from '@ant-design/icons';
import Details from './detailsUsers';
import FiltreForAdmin from './filtre'

function handlechangefilter(e) {
    if ({ [e.target.name]: e.target.value }) {


    }
}
class GestionnaireUsers extends Component {
    componentDidMount() {
        this.props.getUsersFromApi()
    }


    render() {
        console.log(this.props.stateUsers)
        return (
            <div>

                <FiltreForAdmin />
                <table>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Role </th>
                            <th>Détails</th>
                            <th>Suppression</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.stateUsers.map((el) => <tr>
                            <td data-column="Nom">{el.nom}</td>
                            <td data-column="Role">{el.role}</td>
                            <td data-column="Détails"><Details email={el.email} telephone={el.telephone} motDePasse={el.motDePasse} prenom={el.prenom} /></td>
                            <td data-column="Suppression"> <Button onClick={() => this.props.deleteUsersFromApi(el)} ><DeleteOutlined className='page-admin-button-delete' /></Button></td>
                        </tr>)}


                    </tbody>
                </table>



            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    stateUsers: state.stateUsers


});

const mapDispatchToProps = (dispatch) => ({
    getUsersFromApi: () => dispatch(getUsersFromApi()),
    deleteUsersFromApi: (el) => dispatch(deleteUsersFromApi(el))

});


export default connect(mapStateToProps, mapDispatchToProps)(GestionnaireUsers)