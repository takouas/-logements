import React, { Component } from 'react'
import { Card } from 'antd';
import { connect } from 'react-redux';
import { getAnnonceFromApi } from "../../api/annoncesApi"
import VoirPlus from './voirPlus';
import VoirPlusProp from './voirPlusProp';

class ListAnnonces extends Component {

    render() {

        return (

            <div>
                {
                    <Card
                        hoverable
                        style={{ width: "300px", height: "360px", marginBottom: '15px' }}
                        cover={<img alt="maison" src={"http://localhost:5000/" + this.props.el.image} style={{ width: "300px", height: "150px" }} />}
                    >

                        <div><p>{this.props.el.typeDeBien}</p> <p>{this.props.el.prix} DT par {this.props.el.periode}</p>

                            <p>{this.props.el.gouvernorat}</p>
                        
                            <div style={{
                                float: "right",
                                fontSize: 15,
                                fontFamily: 'Cormorant Infant serif',
                                fontWeight: 'bold',
                            }} >
                                <VoirPlusProp el={this.props.el} />
                            </div>

                        </div>

                    </Card>

                }

            </div>




        )
    }
}

const mapStateToProps = (state) => ({



});

const mapDispatchToProps = (dispatch) => ({


});


export default connect(mapStateToProps, mapDispatchToProps)(ListAnnonces)