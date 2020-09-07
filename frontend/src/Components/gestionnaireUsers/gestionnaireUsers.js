import React, { Component } from 'react'
import './gestionnaireUsers.css'
import { connect } from 'react-redux';

import { Table, Button, Input, Select, Form, Modal, Pagination } from 'antd';
import { getUsersFromApi, deleteUsersFromApi } from "../../api/usersApi"

import { DeleteOutlined, CaretDownOutlined, UserDeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import Details from './detailsUsers';


const { Option } = Select;
const { Search } = Input;
class GestionnaireUsers extends Component {


    state = {
        page: 1,
        pageSize: 10

    }






    componentDidMount() {
        this.props.getUsersFromApi()
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    };


    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    paginate = (page, pageSize) => {
        this.setState({ page: page, pageSize: pageSize })
        //console.log(this.state.page)
        //console.log(this.state.pageSize)
    }
    render() {
        console.log(this.props.stateUsers)
        return (
            <div>

                <div className="container-page-admin-barre-recherche" >
                    <div><Search placeholder="Nom" name="nom" style={{ width: 200, marginBottom: 15, marginTop: 55 }} onChange={(e) => { this.setState({ searchNom: e.target.value }) }} /></div>
                    <div>

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
                        {this.props.stateUsers.filter(el => el.role === "propriétaire"
                        ).filter(el => {
                            if (this.state.searchNom) {
                                return el.nom.includes(this.state.searchNom)
                            } else {
                                return el
                            }
                        }).filter((el, i) =>

                            ((this.state.page - 1) * this.state.pageSize) <= i && i < (this.state.page * this.state.pageSize)

                        )
                            .map((el) => <tr>
                                <td data-column="Nom">{el.nom}</td>
                                <td data-column="Role">{el.role}</td>
                                <td data-column="Détails"><Details email={el.email} telephone={el.telephone} motDePasse={el.motDePasse} prenom={el.prenom} /></td>
                                <td data-column="Suppression">
                                    <Button style={{ backgroundColor: 'transparent' }} onClick={this.showModal}>
                                        <UserDeleteOutlined style={{color:'red'}} />
                                    </Button>
                                    <Modal
                                        title={false}
                                        visible={this.state.visible}

                                        closable={false}
                                        footer={false}
                                    >
                                        <p> <ExclamationCircleOutlined /> Êtes-vous sûr de supprimer cet utilisateur ?</p>
                                        <div className="container-confirmation-supprimer">
                                            <Button style={{
                                                fontSize: 15,
                                                fontFamily: 'Cormorant Infant serif',
                                                fontWeight: 'bold',
                                            
                                            }} onClick={this.handleCancel}>
                                                Annuler
                                    </Button>

                                            <Button style={{
                                                backgroundColor: 'red', color: 'white', fontSize: 15,
                                                fontFamily: 'Cormorant Infant serif',
                                                fontWeight: 'bold',
                                            }}
                                                onClick={() => this.props.deleteUsersFromApi(el)}>
                                                Supprimer

                                    </Button>
                                        </div>
                                    </Modal></td>
                            </tr>)}


                    </tbody>
                </table>


                <center> <Pagination defaultCurrent={1} pageSize={10} showSizeChanger={false} total={this.props.stateUsers.length} onChange={this.paginate} /></center>
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