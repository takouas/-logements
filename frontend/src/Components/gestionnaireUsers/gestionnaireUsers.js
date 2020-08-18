import React, { Component } from 'react'
import './gestionnaireUsers.css'
import { connect } from 'react-redux';

import { Table, Button, Input, Select, Form } from 'antd';
import { getUsersFromApi, deleteUsersFromApi } from "../../api/usersApi"

import { DeleteOutlined, CaretDownOutlined } from '@ant-design/icons';
import Details from './detailsUsers';


const { Option } = Select;
const { Search } = Input;
class GestionnaireUsers extends Component {
    state = {

    }
    componentDidMount() {
        this.props.getUsersFromApi()
    }

    render() {
        console.log(this.props.stateUsers)
        return (
            <div>

                <div className="container-page-admin-barre-recherche" >
                    <div><Search placeholder="Nom" name="nom" style={{ width: 200 }} onChange={(e) => { this.setState({ searchNom: e.target.value }) }} /></div>
                    <div>
                        <Form.Item >
                            <Select placeholder="Role" name="role" style={{ width: 200 }} onChange={(value) => { this.setState({ searchRole: value }) }}>
                                <Option value="admin">Admin</Option>
                                <Option value="client">Client</Option>
                                <Option value="propriétaire">Propriétaire</Option>
                            </Select>
                        </Form.Item>
                    </div>
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
                        {this.props.stateUsers.filter(el => {
                            if (this.state.searchNom) {
                                return el.nom.includes(this.state.searchNom)
                            } else {
                                return el
                            }
                        })
                            .filter(el => {
                                if (this.state.searchRole) {
                                    return el.role.includes(this.state.searchRole)
                                } else {
                                    return el
                                }
                            }).map((el) => <tr>
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