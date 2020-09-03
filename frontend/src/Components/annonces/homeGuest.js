import React, { Component } from 'react'
import "./annonces.css"
import { connect } from 'react-redux';
import { getAnnonceFromApi } from "../../api/annoncesApi"

import { PhoneOutlined,MailOutlined} from '@ant-design/icons';
import { Card,Steps } from 'antd';


import bity from '../../image/logoBity.png'
import fb from '../../image/facebook-icons-6951.png'
import insta from '../../image/instagram-logo-png-2432.png'

import gouvernorat from '../../ressource/gouvernorat'
import TypeDeBien from '../../ressource/typeDeBien'

import { Modal, Button, Form, Input, Select, Carousel,Pagination,BackTop, notification } from 'antd';



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
        page:1,
         pageSize:4

    }
    componentDidMount() {
        this.props.getAnnonceFromApi()
    }





 paginate=(page, pageSize) =>{
     this.setState({page:page,pageSize:pageSize})
        console.log(this.state.page)
        console.log(this.state.pageSize)
      }


    render() {


        return (

            <div className="container-home-annonces">

                <div  >
                    <br/>
                    <Carousel autoplay dots={false} >
                    {this.props.stateAnnonces.map(el=><center><img alt="maison" src={"http://localhost:5000/" + el.image} style={{ width:"55%",height:"350px"}} /></center>)}
                    </Carousel>,
                    <div className="container-introduction">
                        <hr ></hr>
                            <h3 className="container-introduction-pargraphe" >     
                             Bity vous propose plusieurs choix  d'hébergements  spécialement pour vous  les étudiants </h3>
                     
                            <h3 className="container-introduction-pargraphe">Vous cherchez un logement  ? Bienvenue sur Bity
                           
                   </h3>
                   
                            <h3 className="container-introduction-pargraphe"> Trouvez la maison de vos rêves !</h3>
                   
                            <hr></hr>
                        </div>
                       
                 <div className='container-home-annonces-section-barre-recherche-et-annonce'>
                    <td  style={{backgroundColor:'',marginRight:'5px'}} >
                 <h3>Filtre de recherche :</h3>
                 
                           <div  >
                            <Form.Item  >
                                <Select name="typeDeBien"
                                    placeholder="Type de bien" style={{ width: 180  }} onChange={(value) => { this.setState({ searchTypeDeBien: value }) }} allowClear>
                                    {TypeDeBien.map(el => <Option value={el.value}>{el.contenue}</Option>)})
                                </Select>
                            </Form.Item>

                        </div>

                        <div ><Search name="prix"
                            placeholder="Prix en dinar" onChange={(e) => { this.setState({ searchPrix: e.target.value }) }}

                            style={{ width: 180 }}
                        />

                        </div >

<br/>
                        <div >
                            <Form.Item  >
                                <Select placeholder="Gouvernorat" style={{ width: 180  }} name="gouvernorat" onChange={(value) => { this.setState({ searchGouvernorat: value }) }} allowClear >
                                    {gouvernorat.map(el => <Option value={el.value}>{el.contenue}</Option>)}
                                </Select>
                            </Form.Item>

                        </div>

                        <div>
                            <Form.Item >
                                <Select placeholder="Période" style={{ width: 180  }} name="periode" onChange={(value) => { this.setState({ searchPeriode: value }) }} allowClear>
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

                    </td>
               



                    {/* <div class="vl"></div> */}



                <td >
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
                    }).filter((el,i)=>
                   
                    ((this.state.page-1)*this.state.pageSize)<=i && i< (this.state.page*this.state.pageSize) 
                        
                    ).map(el =>


                        <Card
                        onClick={() => openNotificationWithIcon('info')}
                            hoverable 
                            style={{ width: 250 ,   marginRight:'5px',marginBottom:'15px'}}
                            cover={<img alt="maison" src={"http://localhost:5000/" + el.image} style={{ height: 150 }} />}
                        >

                            <div> <p>{el.gouvernorat}</p>
                                <p>{el.prix} DT {el.periode}</p>

                                <p>{el.typeDeBien}</p>
                            </div>

                        </Card>
                    
                    )}
                    </div>
                      <center> <Pagination  defaultCurrent={1}pageSize={4} showSizeChanger={false}total={this.props.stateAnnonces.length} onChange={this.paginate}/></center>

</td>
                </div>
              
               
       
         </div>
         {/* <div style={{width:"950px"}}>    <Steps>
    <Step status="finish" title="Login" icon={<UserOutlined />} />
    <Step status="finish" title="Verification" icon={<SolutionOutlined />} />
    <Step status="process" title="Pay" icon={<LoadingOutlined />} />
    <Step status="wait" title="Done" icon={<SmileOutlined />} />
  </Steps>,</div> */}
      
                <section className="container-home-annonces-footer">
             
                    <div>
                <img src={bity} className='navbar-logo-bity'  style={{width:"265px",height:"155px"}}></img>
            
                </div>
                <div>
              <h3 style={{color:'#e00034'}}>Votre logement étudiant</h3> 
              <p>Résidence étudiante<br/>Studio<br/>Chambre<br/>Foyer prive <br/>Maison</p> 
              
                </div>
                <div>
              
           
             
              </div>
                    <div className="container-home-annonces-reseaux" >
                  <div> <span style={{color:'#e00034'}} >Suivez-nous</span><br/>
                        <a title="" href="">   <img src={fb}  style={{width:"55px",height:"55px"}}></img>   </a>

                        <a title="" href="">    <img src={insta}   style={{width:"62px",height:"50px"}}></img>   </a>
                        </div>
                       <br/>
                        <p> <span style={{color:'#e00034'}}  >Contactez nous </span> <br/>  
                        <MailOutlined /> E-mail:takouasimplon@gmail.com
                            <br/> <PhoneOutlined /> tel:225255</p>
                   
                      
                    </div>
            
            
                </section>
             
                <BackTop  className='back-top'>
     
                </BackTop>
              
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