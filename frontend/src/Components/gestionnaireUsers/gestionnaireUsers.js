import React, { Component } from 'react'
import './gestionnaireUsers.css'
import { connect } from 'react-redux';
import FiltreNom from './filtreNom'
import FiltreRole from './filtreRole'
import { Table } from 'antd';
import { getUsersFromApi } from "../../api/usersApi"

import { DeleteOutlined ,CaretDownOutlined} from '@ant-design/icons';


class GestionnaireUsers extends Component {
    componentDidMount() {
        this.props.getUsersFromApi()
    }


    render() {
        console.log(this.props.stateUsers)
        return (
            <div>

                <div className="container-page-admin-barre-recherche">


                    <FiltreNom />
                    <FiltreRole />


                </div>
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
                            <td data-column="Détails"><CaretDownOutlined  className='page-admin-button-détails'/></td>
                            <td data-column="Suppression"><DeleteOutlined className='page-admin-button-delete'/></td>
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
    getUsersFromApi: () => dispatch(getUsersFromApi())



});


export default connect(mapStateToProps, mapDispatchToProps)(GestionnaireUsers)