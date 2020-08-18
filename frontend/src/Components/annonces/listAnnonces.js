import React, { Component } from 'react'
import { Card } from 'antd';
import { connect } from 'react-redux';
import { getAnnonceFromApi } from "../../api/annoncesApi"
import VoirPlus from './voirPlus';

class ListAnnonces extends Component {
    // componentDidMount() {
    //     this.props.getAnnonceFromApi()
    // }
    render() {

        return (

            <div>
                {
                    <Card
                        hoverable
                        style={{ width: 340 }}
                        cover={<img alt="maison" src={"http://localhost:5000/" + this.props.el.image} />}
                    >

                        <div><p>{this.props.el.typeDeBien}</p> <p>{this.props.el.prix} DT par {this.props.el.periode}</p><p>{this.props.el.gouvernorat}</p>
                        </div>
                        <VoirPlus description={this.props.el.description} nombreDePersonne={this.props.el.nombreDePersonne} emailAnnonce={this.props.el.emailAnnonce}
                            telephoneAnnonce={this.props.el.telephoneAnnonce} />
                    </Card>

                }

            </div>




        )
    }
}

const mapStateToProps = (state) => ({
    // stateAnnonces: state.stateAnnonces


});

const mapDispatchToProps = (dispatch) => ({

    // getAnnonceFromApi: () => dispatch(getAnnonceFromApi())

});


export default connect(mapStateToProps, mapDispatchToProps)(ListAnnonces)