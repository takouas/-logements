import React, { Component } from 'react'
import { Card } from 'antd';
import { connect } from 'react-redux';
import { getAnnonceFromApi } from "../../api/annoncesApi"
import VoirPlus from './voirPlus';

class ListAnnonces extends Component {
    componentDidMount() {
        this.props.getAnnonceFromApi()
    }
    render() {

        return (

            <div className='container-card-list'>
                {
                    this.props.stateAnnonces.map(el => <Card
                        hoverable
                        style={{ width: 340 }}
                        cover={<img alt="maison" src={el.image} />}
                    >

                        <div><p>{el.typeDeBien}</p> <p>{el.prix} DT par {el.periode}</p><p>{el.gouvernorat}</p>
                        </div>
                        <VoirPlus description={el.description} nombreDePersonne={el.nombreDePersonne} emailAnnonce={el.emailAnnonce}
                            telephoneAnnonce={el.telephoneAnnonce} />
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


export default connect(mapStateToProps, mapDispatchToProps)(ListAnnonces)