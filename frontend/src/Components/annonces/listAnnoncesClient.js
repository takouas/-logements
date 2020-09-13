import React, { Component } from 'react'
import { Card } from 'antd';
import { connect } from 'react-redux';
import { getAnnonceFromApi } from "../../api/annoncesApi"

import VoirPlus from './voirPlus';

import { BrowserRouter, Route, Link } from "react-router-dom";
class ListAnnonces extends Component {

    render() {

        return (

            <div>
                {
                    <Card
                    
                        hoverable
                        style={{ width: 320, marginRight: '10px', marginBottom: '15px', borderRadius: '25px' }}
                        cover={<img alt="maison" src={"http://localhost:5000/" + this.props.el.image} style={{ height: 250, borderRadius: '25px 25px 0 0' }} />}
                    >

                        <div style={{ fontSize: '10px' }}> <p>{this.props.el.gouvernorat}<br />
                            {this.props.el.prix} DT {this.props.el.periode}<br />
                            {this.props.el.typeDeBien}</p>

                            <div style={{
                                float: "right",
                    
                                fontFamily: 'Cormorant Infant serif',
                                fontWeight: 'bold',
                            }} >
                                <VoirPlus el={this.props.el} />
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