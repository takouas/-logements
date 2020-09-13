import React, { Component } from 'react'
import "./annonces.css"
import { connect } from 'react-redux';
import { getAnnonceFromApi } from "../../api/annoncesApi"
import ListAnnonces from './listAnnoncesClient';

import prix from '../../ressource/prix'
import gouvernorat from '../../ressource/gouvernorat'
import TypeDeBien from '../../ressource/typeDeBien'
import { Modal, Button, Form, Input, Checkbox, Select, Tooltip, Pagination } from 'antd';
const { Search } = Input;


const { Option } = Select;
class HomeClient extends Component {


    state = {
        page: 1,
        pageSize: 6

    }
    componentDidMount() {
        this.props.getAnnonceFromApi()
    }





    paginate = (page, pageSize) => {
        this.setState({ page: page, pageSize: pageSize })
        console.log(this.state.page)
        console.log(this.state.pageSize)
    }


    render() {
  
        return (

            <div className="container-home-annonces">
                <br />

                <div className='container-home-annonces-section-barre-recherche-et-annonce'>
                    <td style={{ backgroundColor: '#1F2833', marginRight: '5px' }} className='containere-recherche-guest' >
                        <h3 style={{ color: 'white' }}>Filtre de recherche :</h3>


                        <div className='containere-recherche-guest'>
                            <div>
                                <Form.Item  >
                                    <Select name="typeDeBien"
                                        placeholder="Type de bien" style={{ width: 200 }} onChange={(value) => { this.setState({ searchTypeDeBien: value }) }} allowClear>
                                        {TypeDeBien.map(el => <Option value={el.value}>{el.contenue}</Option>)})
                                </Select>
                                </Form.Item>



                            </div>

                            <div>
                                <Form.Item  >
                                    <Select name="prix " onClick={this.nouveau}
                                        placeholder="Prix en dinar" onChange={(value) => { this.setState({ searchPrix: value }) }}

                                        style={{ width: 200, }} allowClear>
                                        {prix.map(el => <Option value={el.value}>{el.contenue}</Option>)}
                                    </Select>
                                </Form.Item>
                            </div>


                            <div>
                                <Form.Item  >
                                    <Select placeholder="Gouvernorat" style={{ width: 200 }} name="gouvernorat" onChange={(value) => { this.setState({ searchGouvernorat: value }) }} allowClear>
                                        {gouvernorat.map(el => <Option value={el.value}>{el.contenue}</Option>)}
                                    </Select>
                                </Form.Item>

                            </div>

                            <div>
                                <Form.Item >
                                    <Select placeholder="Période" style={{ width: 200 }} name="periode" onChange={(value) => { this.setState({ searchPeriode: value }) }} allowClear>
                                        <Option value="par jour">par jour</Option>
                                        <Option value="par mois">par mois</Option>
                                    </Select>
                                </Form.Item>

                            </div>
                            <div >
                            <Form.Item  
                            >
                                <Select placeholder="Nombre de personne " style={{ width:200  }} name="personne" onChange={(value) => { this.setState({ searchNombrePersonne: value }) }} allowClear >
                                   <Option value="1">  1 personne  </Option>
                                   <Option value="2"> plus de 2 personnes </Option>
                            
                                   <Option value="plus">  plus de 4 personnes  </Option>
                                </Select>
                            </Form.Item>

                        </div>
                     

                        </div>
                    </td>





                    <div>

                        <div className='container-card-list'>
                 
                        
                            {      this.props.stateAnnonces.filter(el => {
                                if (this.state.searchTypeDeBien) {
                                    return el.typeDeBien.includes(this.state.searchTypeDeBien)
                                } else {
                                    return el
                                }
                            }).filter(el => {

                                if (this.state.searchPrix) {
                                    return el.prix <= Number(this.state.searchPrix);
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
                            }).filter(el => {

                                if (this.state.searchNombrePersonne == 'plus') {
                                    return Number(el.nombreDePersonne )> 4
                                }
                                else if (this.state.searchNombrePersonne == 1) {
                                    return Number(el.nombreDePersonne ) ==1
                                }
                                else if (this.state.searchNombrePersonne == 2) {
                                    return Number(el.nombreDePersonne )> 2
                                }

                                else {
                                    return el
                                }
                            }).filter((el, i) =>

                                ((this.state.page - 1) * this.state.pageSize) <= i && i < (this.state.page * this.state.pageSize)).map(el =>

                                    <ListAnnonces el={el} />)}

                        </div>
                        <center> <Pagination defaultCurrent={1} pageSize={6} showSizeChanger={false} total={this.props.stateAnnonces.length} onChange={this.paginate} /></center>
                    </div>

                </div>

                <br />
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


export default connect(mapStateToProps, mapDispatchToProps)(HomeClient)