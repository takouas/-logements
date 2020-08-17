import React, { Component } from 'react'
import { Card, Button } from 'antd';
import { connect } from 'react-redux';
import { getAnnonceFromApi, deleteAnnonceFromApi } from "../../api/annoncesApi"
import { DeleteOutlined, FormOutlined } from '@ant-design/icons';
import AjoutAnnonces from './ajoutAnnonces';
import ModifierAnnonces from './modificationAnnonces';
class ListAnnoncesProp extends Component {
    componentDidMount() {
        this.props.getAnnonceFromApi()
    }
    render() {

        return (
            <div>
                <AjoutAnnonces />
                <div className='container-card-list'>
                    {
                        this.props.stateAnnonces.map(el => <Card
                            hoverable
                            style={{ width: 340 }}
                            cover={<img alt="maison" src={el.image} />}
                        >

                            <div> <p>{el.typeDeBien}</p> <p>{el.prix} DT par {el.periode}</p><p>{el.gouvernorat}</p>
                            </div>
                            <div className='container-card-list-button-edite-delete'>
                                <Button onClick={()=>this.props.deleteAnnonceFromApi(el)}>
                                    <DeleteOutlined className='page-list-annonces-propritaire-button-delete' />
                                </Button>
                                <ModifierAnnonces stateAnnonces={el} />
                            </div>

                        </Card>)

                    }

                </div>

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