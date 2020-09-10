

import React, { Component } from 'react'
import { Modal, Button, Form, Input, Select, Carousel, Pagination, BackTop, notification, Card } from 'antd';
import { connect } from 'react-redux';

import "./gestionnaireAnnonces.css"
import { getUsersFromApi, deleteUsersFromApi } from "../../api/usersApi"
import { getAnnonceFromApi, deleteAnnonceFromApi } from "../../api/annoncesApi"
import { DeleteOutlined, CaretDownOutlined, UserDeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';



const { Option } = Select;
const { Search } = Input;
class GestionnaireAnnonces extends Component {


    state = {
        page: 1,
        pageSize: 10,
        k: []
    }






    componentDidMount() {
        this.props.getUsersFromApi()
        this.props.getAnnonceFromApi()
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
        console.log(this.props.stateAnnonces)

        return (
            <div>
                <div  >
                </div>
                <div className='container-card-list'>
                    {this.props.stateAnnonces.
                        filter((el, i) =>
                            ((this.state.page - 1) * this.state.pageSize) <= i && i < (this.state.page * this.state.pageSize)
                        )

                        .map((el) => <div style={{ marginTop: '15px' }}>

                            <Card

                                hoverable
                                style={{ width: 220, marginRight: '10px', marginBottom: '15px', borderRadius: '25px' }}
                                cover={<img alt="maison" src={"http://localhost:5000/" + el.image} style={{ height: 100, borderRadius: '25px 25px 0 0' }} />}
                            >
                                <p>{el.emailUsers}</p>
                                <div style={{ fontSize: '10px' }}> <p>{el.gouvernorat}<br />
                                    {el.prix} DT {el.periode}<br />
                                    {el.typeDeBien}</p>

                                </div>
                                <div className='container-card-list-button-edite-delete'>
                                    <Button style={{ backgroundColor: 'transparent' }} onClick={this.showModal}>
                                        <DeleteOutlined className='page-list-annonces-propritaire-button-delete' />
                                    </Button>
                                    <Modal
                                        title={false}
                                        visible={this.state.visible}

                                        closable={false}
                                        footer={false}
                                    >
                                        <p> <ExclamationCircleOutlined /> Êtes-vous sûr de supprimer cette annonce ?</p>
                                        <div className="container-confirmation-supprimer">
                                            <Button style={{
                                                fontSize: 15,
                                                fontFamily: 'Cormorant Infant serif',
                                                fontWeight: 'bold',
                                                marginRight: '15px'
                                            }} onClick={this.handleCancel}>
                                                Annuler
                                    </Button>

                                            <Button style={{
                                                backgroundColor: 'red', color: 'white', fontSize: 15,
                                                fontFamily: 'Cormorant Infant serif',
                                                fontWeight: 'bold',
                                            }}
                                                onClick={() => this.props.deleteAnnonceFromApi(el)}>
                                                Supprimer

                                    </Button>
                                        </div>
                                    </Modal>




                                </div>



                            </Card>

                        </div>)}


                </div>


                <center> <Pagination defaultCurrent={1} pageSize={10} showSizeChanger={false} total={this.props.stateUsers.length} onChange={this.paginate} /></center>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    stateUsers: state.stateUsers,
    stateAnnonces: state.stateAnnonces


});

const mapDispatchToProps = (dispatch) => ({
    getUsersFromApi: () => dispatch(getUsersFromApi()),
    getAnnonceFromApi: () => dispatch(getAnnonceFromApi()),

    deleteAnnonceFromApi: (el) => dispatch(deleteAnnonceFromApi(el))

});


export default connect(mapStateToProps, mapDispatchToProps)(GestionnaireAnnonces)