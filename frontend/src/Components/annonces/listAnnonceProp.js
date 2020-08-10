import React, { Component } from 'react'
import { Card } from 'antd';
import { connect } from 'react-redux';
import { getAnnonceFromApi } from "../../api/annoncesApi"
import { DeleteOutlined, FormOutlined } from '@ant-design/icons';
class ListAnnoncesProp extends Component {
    componentDidMount() {
        this.props.getAnnonceFromApi()
    }
    render() {
      
        return (
            <div className='container-card-list'>
                {
                    this.props.stateAnnonces.map(el=><Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="maison" src={el.image} />}
                    >

                    <div> <p>{el.typeDeBien}</p> <p>{el.prix}</p> <p>{el.gouvernorat}</p> <p>{el.periode}</p>
                        </div>
                        <div className='container-card-list-button-edite-delete'>
                        <DeleteOutlined className='page-list-annonces-propritaire-button-delete'/>
                        <FormOutlined className='page-list-annonces-propritaire-button-edite'/>
                            
                            </div>  
                        
                    </Card>)

                }

            </div>




        )
    }
}

const mapStateToProps = (state) => ({
    stateAnnonces: state.stateAnnonces


});

const mapDispatchToProps = (dispatch) => ({

    getAnnonceFromApi: () => dispatch(getAnnonceFromApi())

});


export default connect(mapStateToProps, mapDispatchToProps)(ListAnnoncesProp)