import React, { Component } from 'react'
import "./annonces.css"
import { connect } from 'react-redux';
import { getAnnonceFromApi } from "../../api/annoncesApi"


import { Card, Steps } from 'antd';

import logment from '../../image/Screenshot from 2020-09-13 12-12-46.png'
import annonce from '../../image/Screenshot from 2020-09-13 12-10-39.png'
import gouvernorat from '../../ressource/gouvernorat'
import TypeDeBien from '../../ressource/typeDeBien'
import prix from '../../ressource/prix'
import { Modal, Button, Form, Input, Select, Carousel, Pagination, BackTop, notification } from 'antd';
import Footer from '../page/footer';



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

                    <center >
                        <Carousel autoplay dots={true} className="carousel">
                            <div className="carousel-section1">
                                <div style={{ backgroundColor: 'rgb(0,0,0,0.2)', height: '80vh' }}>
                                    <h3 className='pargraphe-carousel'   >
                                        Bity vous propose plusieurs choix  d'hébergements  spécialement pour vous  les étudiants

                </h3>
                                </div>
                            </div>
                            <div className="carousel-section2">
                                <div style={{ backgroundColor: 'rgb(0,0,0,0.2)' }}>
                                    <h3  className='pargraphe-carousel' >Vous cherchez un logement  ?</h3>
                                </div>
                            </div>
                            <div className="carousel-section3">
                                <div style={{ backgroundColor: 'rgb(0,0,0,0.2)' }}>
                                    <h3 className='pargraphe-carousel' > Bienvenue sur Bity</h3>
                                </div>
                            </div>
                        </Carousel>


                    </center>
                    <br />
                    <div className="containr-section-after-carousel">
                        <Card >


                            <h3 style={{ fontWeight: 'bold', fontSize: '25px' }}  > Spécialiste du logement étudiant et jeune actif</h3>

                            <p >Se loger durant ses études n’est pas toujours mission facile, c’est pourquoi Bity aide les étudiants<br /> et les  jeunes actifs  à se loger en proposant  un vaste choix de logement étudiant dans toute <br />la tunisie : studio , colocation , appartement , résidence étudiante , chambre étudiante ... </p>
                            <p style={{ fontWeight: 'bold', fontSize: '25px' }}>   Vous recherchez un logement ?</p>
                            <div style={{ border: '2px solid rgb(224, 0, 52)', width: '200px', padding: '10px', borderRadius: '15px', float: 'right' }}>
                                <a title="" href="#card-list">    <img src={logment} style={{ width: '50px' }}></img>  voir annonces  </a>
                            </div>
                        </Card>

                        <Card>




                            <h3 style={{ fontWeight: 'bold', fontSize: '25px' }}    >Vous êtes propriétaire ?
                            </h3>
                            <p >Déposez gratuitement votre annonce</p>
                            <p>Vous avez un bien immobilier à  louer ?</p>



                            <h3 style={{ fontWeight: 'bold', fontSize: '25px' }}>    Louez votre logement en tout simplicité !
                            </h3>
                            <br />
                            <div style={{ border: '2px solid rgb(224, 0, 52)', width: '200px', padding: '10px', borderRadius: '15px', float: 'right' }}>


                                <a onClick={() => openNotificationWithIcon('info')}>   <img style={{ width: '50px' }} src={annonce}></img>  Publiez-le-ici</a>
                            </div>

                        </Card>
                    </div>
                    <br />


                    <div id='card-list' className='container-home-annonces-section-barre-recherche-et-annonce'>
                        <div className='containere-recherche-guest' >
                            <h3>Filtre de recherche :</h3>
                            <div>
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



                                </div>
                            </div>
                        </div>








                        <div >
                            <div className='container-card-list-guest' style={{marginRight:'30px'}}>
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
                                            style={{ width: '310px', marginRight: '10px', marginBottom: '15px', borderRadius: '5px' }}
                                            cover={<img alt="maison" src={"http://localhost:5000/" + el.image} style={{ height: '200px', borderRadius: '5px 5px 0 0' }} />}
                                        >

                                            <div style={{ fontSize: '16px' }}> <p><strong>Gouvernerat:  </strong>{el.gouvernorat}<br />
                                                <strong>Prix: </strong>{el.prix} DT {el.periode}<br />
                                                <strong>Type de bien:  </strong>{el.typeDeBien}</p>
                                            </div>

                                        </Card>

                                    )}
                            </div>
                            <center> <Pagination defaultCurrent={1} pageSize={3} showSizeChanger={false} total={this.props.stateAnnonces.length} onChange={this.paginate} /></center>

                        </div>
                    </div>



                </section>
               
                <Footer />


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