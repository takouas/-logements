import React, { Component } from 'react'
import { Card, Button, Modal } from 'antd';
import { connect } from 'react-redux';
import { getAnnonceFromApi, deleteAnnonceFromApi } from "../../api/annoncesApi"
import { DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import AjoutAnnonces from './ajoutAnnonces';

import ModifierAnnonces from './modificationAnnonces';
import jwt from 'jsonwebtoken';
import VoirPlusProp from './voirPlus';
import Footer from '../page/footer';


var token = localStorage.getItem('token')
var decoded = jwt.decode(token,);
//console.log(decoded)

class ListAnnoncesProp extends Component {
    componentDidMount() {
        this.props.getAnnonceFromApi()
    }
    state = { visible: false };

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
    render() {
        const publicite = this.props.stateAnnonces.filter(el => decoded && el.emailUsers === decoded.user.email)
        return (
            <div>
                <div style={{ backgroundColor: '#1F2833', paddingTop: '15px', marginTop: '15px' }}>
                    <AjoutAnnonces />
                    <div className='container-card-list' >

                        {
                            publicite.map(el => <Card
                                hoverable
                                style={{ width: 300, marginBottom: 35, backgroundColor: 'whitesmoke' }}
                                cover={<img alt="maison" src={"http://localhost:5000/" + el.image} style={{ height: 220 }} />}

                            >


                                <div >
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


                                        <ModifierAnnonces stateAnnonces={el} />
                                        <VoirPlusProp el={el} />
                                    </div>

                                </div>
                            </Card>)

                        }


                    </div>

                </div >
                <br/>    <br/>    <br/>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    stateAnnonces: state.stateAnnonces


});

const mapDispatchToProps = (dispatch) => ({

    getAnnonceFromApi: () => dispatch(getAnnonceFromApi()),

    deleteAnnonceFromApi: (el) => dispatch(deleteAnnonceFromApi(el))
});


export default connect(mapStateToProps, mapDispatchToProps)(ListAnnoncesProp)