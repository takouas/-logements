import React, { Component } from 'react'
import { Card, Button } from 'antd';
import { connect } from 'react-redux';
import { getAnnonceFromApi, deleteAnnonceFromApi } from "../../api/annoncesApi"
import { DeleteOutlined } from '@ant-design/icons';
import AjoutAnnonces from './ajoutAnnonces';

import ModifierAnnonces from './modificationAnnonces';
import jwt from 'jsonwebtoken';


var token = localStorage.getItem('token')
var decoded = jwt.decode(token,);
console.log(decoded)

class ListAnnoncesProp extends Component {
    componentDidMount() {
        this.props.getAnnonceFromApi()
    }
    render() {
        const publicite = this.props.stateAnnonces.filter(el => decoded && el.emailUsers === decoded.user.email)
        return (
            <div>
                <AjoutAnnonces />
                <div className='container-card-list'>

                    {
                        publicite.map(el => <Card
                            hoverable
                            style={{ width: 340, marginBottom: 35, backgroundColor: 'whitesmoke' }}
                            cover={<img alt="maison" src={"http://localhost:5000/" + el.image} style={{ height: 250 }} />}

                        >
                          

                            <div >
                                <div className='container-card-list-button-edite-delete'>
                                    <Button style={{ backgroundColor: 'transparent' }} onClick={() => this.props.deleteAnnonceFromApi(el)}>
                                        <DeleteOutlined className='page-list-annonces-propritaire-button-delete' />

                                    </Button>

                                    <ModifierAnnonces stateAnnonces={el} />
                                </div>

                            </div>
                        </Card>)

                    }

                </div>

            </div >


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