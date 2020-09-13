import React, { Component } from 'react'
import "./annonces.css"
import { connect } from 'react-redux';
import { getAnnonceFromApi } from "../../api/annoncesApi"

import { PhoneOutlined, MailOutlined } from '@ant-design/icons';
import { Card, Steps } from 'antd';


import bity from '../../image/logoBity.png'
import fb from '../../image/facebook-icons-6951.png'
import insta from '../../image/instagram-logo-png-2432.png'
import dar from '../../image/dar.png'
import jeune from '../../image/image.png'
import foyer from '../../image/foyer.png'
import logment from '../../image/Screenshot from 2020-09-13 12-12-46.png'
import annonce from '../../image/Screenshot from 2020-09-13 12-10-39.png'
import gouvernorat from '../../ressource/gouvernorat'
import TypeDeBien from '../../ressource/typeDeBien'
import prix from '../../ressource/prix'
import { Modal, Button, Form, Input, Select, Carousel, Pagination, BackTop, notification } from 'antd';



const openNotificationWithIcon = type => {
    notification[type]({
        message: 'Se connecter à Bity',
        description:
            '',
    });
};

const { Search } = Input;

const { Option } = Select;

const { Step } = Steps;

class HomeGuest extends Component {


    state = {
        page: 1,
        pageSize: 3

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

                <section  >

                    <br />
                    <center >
                        <Carousel autoplay dots={false} className="carousel">
                            {this.props.stateAnnonces.map(el => <center><img alt="maison" src={"http://localhost:5000/" + el.image} className="carousel-image" /></center>)}
                        </Carousel>


                    </center>
                    <br/>
                    <div className="containr-section-after-carousel">
                        <Card >


                            <h3 style={{ fontWeight: 'bold', fontSize: '25px'}}  > Spécialiste du logement étudiant et jeune actif</h3>

                            <p >Se loger durant ses études n’est pas toujours mission facile, <br />c’est pourquoi Bity aide les étudiants et les  jeunes actifs <br /> à se loger en proposant  un vaste choix de logement<br /> étudiant dans toute la tunisie : studio , colocation , appartement <br />, résidence étudiante , chambre étudiante ... </p>
                            <p style={{ fontWeight: 'bold', fontSize: '25px'}}>   Vous recherchez un logement ?</p>
                            <div style={{border:'2px solid rgb(224, 0, 52)',width:'200px',padding:'10px',borderRadius:'15px',float:'right'}}>
                          
                            <a title="" href="#card-list">    <img src={logment} style={{ width: '50px' }}></img>  voir annonces  </a>
                            </div>
                        </Card>
                     
                        <Card>




                            <h3 style={{ fontWeight: 'bold', fontSize: '25px' }}    >Vous êtes propriétaire ? <br /> <span >Louez votre logement en tout simplicité !</span>
                            </h3>
                            <p >Déposez gratuitement votre annonce</p>
                            <p>Vous avez un bien immobilier à  louer ?</p>
                            <div style={{border:'2px solid rgb(224, 0, 52)',width:'200px',padding:'10px',borderRadius:'15px',float:'right'}}>

                
                                <a onClick={() => openNotificationWithIcon('info')}>   <img style={{ width: '50px' }} src={annonce}></img>  Publiez-le-ici</a>
                            </div>

                            </Card>
                    </div>
                    <br/>
                    <div className="container-introduction">
                        <h3 className="container-introduction-pargraphe" >
                            Bity vous propose plusieurs choix  d'hébergements  spécialement pour vous  les étudiants <br /> Vous cherchez un logement  ? <br />Bienvenue sur Bity

                </h3>

                    </div>
                 
                    <div id='card-list' className='container-home-annonces-section-barre-recherche-et-annonce'>
                        <td className='containere-recherche-guest' style={{ marginRight: '15PX ' }} >
                            <h3>Filtre de recherche :</h3>
                            <div className='containere-recherche-guest'>
                                <div  >
                                    <Form.Item  >
                                        <Select name="typeDeBien"
                                            placeholder="Type de bien" style={{ width: 180 }} onChange={(value) => { this.setState({ searchTypeDeBien: value }) }} allowClear>
                                            {TypeDeBien.map(el => <Option value={el.value}>{el.contenue}</Option>)})
                                </Select>
                                    </Form.Item>

                                </div>

                                <div >
                                    <Form.Item  >
                                        <Select name="prix"
                                            placeholder="Prix en dinar" onChange={(value) => { this.setState({ searchPrix: value }) }}

                                            style={{ width: 180 }} allowClear>
                                            {prix.map(el => <Option value={el.value}>{el.contenue}</Option>)}
                                        </Select>
                                    </Form.Item>


                                </div >


                                <div >
                                    <Form.Item  >
                                        <Select placeholder="Gouvernorat" style={{ width: 180 }} name="gouvernorat" onChange={(value) => { this.setState({ searchGouvernorat: value }) }} allowClear >
                                            {gouvernorat.map(el => <Option value={el.value}>{el.contenue}</Option>)}
                                        </Select>
                                    </Form.Item>

                                </div>

                                <div>
                                    <Form.Item >
                                        <Select placeholder="Période" style={{ width: 180 }} name="periode" onChange={(value) => { this.setState({ searchPeriode: value }) }} allowClear>
                                            <Option value="par jour">par jour</Option>
                                            <Option value="par mois">par mois</Option>
                                        </Select>
                                    </Form.Item>
                                </div>
                                <div>




                                    {/* 
                        <Form.Item >
                                <Select placeholder="Nouveau" style={{ width: 180  }} name="periode" onChange={(value) => { this.setState({ searchNouveau: value }) }} allowClear>
                                    <Option value="nouveau">nouveau </Option>
                                    <Option value="ancienne">ancienne</Option>
                                </Select>
                            </Form.Item> */}
                                </div>
                            </div>
                        </td>




                        {/* <div class="vl"></div> */}



                        <div >
                            <div className='container-card-list-guest' >
                                {this.props.stateAnnonces.filter(el => {
                                    if (this.state.searchTypeDeBien) {
                                        return el.typeDeBien.includes(this.state.searchTypeDeBien)
                                    } else {
                                        return el
                                    }
                                })
                                    .filter(el => {

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
                                    }).filter((el, i) =>

                                        ((this.state.page - 1) * this.state.pageSize) <= i && i < (this.state.page * this.state.pageSize)

                                    ).map(el =>


                                        <Card
                                            onClick={() => openNotificationWithIcon('info')}
                                            hoverable
                                            style={{ width: '310px', marginRight: '10px', marginBottom: '15px', borderRadius: '25px' }}
                                            cover={<img alt="maison" src={"http://localhost:5000/" + el.image} style={{ height: '200px', borderRadius: '25px 25px 0 0' }} />}
                                        >

                                            <div style={{ fontSize: '12px', fontWeight: 'bold' }}> <p>{el.gouvernorat}<br />
                                                {el.prix} DT {el.periode}<br />
                                                {el.typeDeBien}</p>
                                            </div>

                                        </Card>

                                    )}
                            </div>
                            <center> <Pagination defaultCurrent={1} pageSize={3} showSizeChanger={false} total={this.props.stateAnnonces.length} onChange={this.paginate} /></center>

                        </div>
                    </div>



                </section>
                <section className="containr-section-befor-footer">
                    <h3 style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: '25px' }}>Trouver un logement , c’est simple sur  Bity </h3>
                    <br />
                    <div className="containr-section-befor-footer-all-elements">
                        <div className="containr-section-befor-footer-element">
                            <img src={jeune} style={{ width: '70px' }}></img>
                            <p>

                                Hébergement dans <br />les maison des jeunes
                        </p>

                        </div>
                        <div className="containr-section-befor-footer-element">
                            <img src={dar} style={{ width: '70px' }}></img>
                            <p>collocation</p>
                        </div>
                        <div className="containr-section-befor-footer-element">
                            <img src={foyer} style={{ width: '70px' }}></img>
                            <p>
                                Guide des foyers privés <br />pour les étudiants
                                </p>
                        </div>

                    </div>

                </section>


                <footer className="container-home-annonces-footer">

                    <div>
                        <img src={bity} className="logo-footer"  ></img>

                    </div>
                    <div>
                        <h3 style={{ color: '#e00034' }}>Votre logement étudiant</h3>
                        <p>Résidence étudiante<br />Studio<br />Chambre<br />Foyer prive <br />Maison</p>

                    </div>

                    <div className="container-home-annonces-reseaux" >
                        <div> <span style={{ color: '#e00034' }} >Suivez-nous</span><br />
                            <a title="" href="">   <img src={fb} style={{ width: "40px", height: "40px" }}></img>   </a>

                            <a title="" href="">    <img src={insta} style={{ width: "52px", height: "38px" }}></img>   </a>
                        </div>
                        <br />

                        <div  >  <p> <span style={{ color: '#e00034' }}>Contactez nous </span> <br />
                            <MailOutlined /> E-mail:takouasimplon@gmail.com
                            <br /> <PhoneOutlined /> tel:225255</p></div>

                    </div>




                </footer>


                <center style={{ backgroundColor: '#1F2833', color: 'white' }}>Copyright © Bity 2020</center>

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