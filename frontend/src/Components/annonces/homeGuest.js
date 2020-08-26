import React, { Component } from 'react'
import "./annonces.css"
import { connect } from 'react-redux';
import { getAnnonceFromApi } from "../../api/annoncesApi"

import { FacebookOutlined, InstagramOutlined } from '@ant-design/icons';
import { Card } from 'antd';


import bity from '../../image/logoBity.png'
import gouvernorat from '../../ressource/gouvernorat'
import TypeDeBien from '../../ressource/typeDeBien'

import { Modal, Button, Form, Input, Select, Carousel } from 'antd';
const { Search } = Input;

const { Option } = Select;



class HomeGuest extends Component {


    state = {

    }
    componentDidMount() {
        this.props.getAnnonceFromApi()
    }








    render() {


        return (

            <div className="container-home-annonces">

                <div  >
                    <br/>
                    <Carousel autoplay dots={false} >
                    {this.props.stateAnnonces.map(el=><center><img alt="maison" src={"http://localhost:5000/" + el.image} style={{ width:"55%",hight:"15%"}} /></center>)}
                    </Carousel>,
                    <div className="container-introduction">
                            <h3 className="container-introduction-pargraphe" >     
                             Bity vous propose plusieurs choix  d'hébergements  spécialement pour vous  les étudiants </h3>
                     
                            <h3 className="container-introduction-pargraphe">Vous cherchez un logement  ? Bienvenue sur Bity
                           
                   </h3>
                   
                            <h3 className="container-introduction-pargraphe"> Trouvez la maison de vos rêves !</h3>
                   
                        
                        </div>
                    <div className="container-home-annonces-barre-recherche" >
                 
                           <div  >
                            <Form.Item  >
                                <Select name="typeDeBien"
                                    placeholder="Type de bien" style={{ width: 200 }} onChange={(value) => { this.setState({ searchTypeDeBien: value }) }} allowClear>
                                    {TypeDeBien.map(el => <Option value={el.value}>{el.contenue}</Option>)})
                                </Select>
                            </Form.Item>

                        </div>

                        <div ><Search name="prix"
                            placeholder="prix en dinar" onChange={(e) => { this.setState({ searchPrix: e.target.value }) }}

                            style={{ width: 200 }}
                        />

                        </div >


                        <div >
                            <Form.Item  >
                                <Select placeholder="gouvernorat" style={{ width: 200 }} name="gouvernorat" onChange={(value) => { this.setState({ searchGouvernorat: value }) }} allowClear >
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

                    </div>
                </div>







                <div className='container-card-list-guest'>

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


                        <Card
                            hoverable 
                            style={{ width: 280 }}
                            cover={<img alt="maison" src={"http://localhost:5000/" + el.image} style={{ height: 150 }} />}
                        >

                            <div> <p>{el.prix} DT {el.periode}/{el.gouvernorat}</p>
                                <p>{el.typeDeBien}</p>
                            </div>

                        </Card>
                    )}

                </div>
           
               
                <div className="container-home-annonces-footer">
                <img src={bity} className='navbar-logo-bity'  style={{width:200}}></img>
                <div>
              <h3>Votre logement étudiant</h3> 
              <p>Résidence étudiante<br/>Studio<br/>Chambre<br/>Foyer prive <br/>Maison</p> 
              
                </div>
                <div>
              
           
             
              </div>
                    <div className="container-home-annonces-reseaux" >
                  
                        <p >Suivez-nous</p>

                        <a title="" href=""><FacebookOutlined style={{ zoom: 2, color: "#e00034" }} />    </a>

                        <a title="" href=""><InstagramOutlined style={{ zoom: 2, color: "#e00034" }} />    </a>

                        <p >Contactez nous </p>   
              <p>E-mail:takouasimplon@gmail.com</p>
              <p>tel:225255</p>
                    </div>
            
            
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


export default connect(mapStateToProps, mapDispatchToProps)(HomeGuest)