import React, { Component } from 'react'
import "./annonces.css"
import { connect } from 'react-redux';
import { getAnnonceFromApi } from "../../api/annoncesApi"
import ListAnnonces from './listAnnonces';


import gouvernorat from '../../ressource/gouvernorat'

import { Modal, Button, Form, Input, Checkbox, Select, Tooltip } from 'antd';
const { Search } = Input;


const { Option } = Select;
class HomeAnnonces extends Component {


    state = {
       
    }
    componentDidMount() {
        this.props.getAnnonceFromApi()
    }








    render() {

        return (

            <div className="container-home-annonces">

                <div className="container-introduction" >

                    <p className="container-introduction-pargraphe">Bity propose de nombreux hébergements pour vous
                    <br />
                    Trouvez maison de vos rêves !</p>
                    <br />
                    <div className="container-home-annonces-barre-recherche">
                        <div> <Search name="typeDeBien"
                            placeholder="Type de bien"
                            onChange={(e) => { this.setState({ searchTypeDeBien: e.target.value }) }}
                            style={{ width: 200 }}
                        />


                        </div>

                        <div><Search name="prix"
                            placeholder="prix en dinar" onChange={(e) => { this.setState({ searchPrix: e.target.value }) }}

                            style={{ width: 200 }}
                        />

                        </div>


                        <div>
                            <Form.Item  >
                                <Select placeholder="gouvernorat" style={{ width: 200 }} name="gouvernorat" onChange={(value) => { this.setState({ searchGouvernorat: value }) }}>
                                    {gouvernorat.map(el => <Option value={el.value}>{el.contenue}</Option>)}
                                </Select>
                            </Form.Item>

                        </div>

                        <div>
                            <Form.Item >
                                <Select placeholder="Période" style={{ width: 200 }} name="periode" onChange={(value) => { this.setState({ searchPeriode: value }) }}>
                                    <Option value="par jour">par jour</Option>
                                    <Option value="par mois">par mois</Option>
                                </Select>
                            </Form.Item>
                        </div>

                    </div>
                </div>







                <div className='container-card-list'>

                    {this.props.stateAnnonces.filter(el => {
                        if (this.state.searchTypeDeBien) {
                            return el.typeDeBien.includes(this.state.searchTypeDeBien)
                        } else {
                            return el
                        }
                    }).filter(el => {
                        if (this.state.searchPrix) {
                            return el.prix.includes(this.state.searchPrix)
                        } else {
                            return el
                        }
                    }).filter(el => {
                        if (this.state.searchGouvernorat) {
                            return el.gouvernorat.includes(this.state.searchGouvernorat)
                        } else {
                            return el
                        }
                    }).filter(el => {
                        if (this.state.searchPeriode) {
                            return el.periode.includes(this.state.searchPeriode)
                        } else {
                            return el
                        }
                    }).map(el =>

                        <ListAnnonces el={el} />)}

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

});


export default connect(mapStateToProps, mapDispatchToProps)(HomeAnnonces)