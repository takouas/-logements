import React, { Component } from 'react'
import './footer.css'
import house from '../../image/house.png'
import { PhoneOutlined, MailOutlined } from '@ant-design/icons';
import bity from '../../image/logoBity.png'

import dar from '../../image/dar.png'
import jeune from '../../image/image.png'
import foyer from '../../image/foyer.png'
import fb from '../../image/facebook-icons-6951.png'
import insta from '../../image/instagram-logo-png-2432.png'
export default class Footer extends Component {
    render() {
        return (
            <div>
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

                <div className='gradiation'>
                    <h5> Bien logé dans un bon logement          <img src={house} className="logo-footer" style={{ width: "55px", height: "55px" }} ></img> </h5>

                </div>
                <footer className="container-home-annonces-footer">

                    <div>
                        <img src={bity} className="logo-footer"  ></img>
                        <br />       <br />
                        <p className="container-home-annonces-footer-pargraphe" >
                            Vous cherchez un logement  ?<br />
                
                            Bity vous propose plusieurs choix d'hébergements <br /> spécialement pour vous  les étudiants

</p>
                    </div>


                    <div  >
                        <div> <span style={{ color: '#e00034', fontSize: '30px' }} >Suivez-nous</span><br /><br />
                            <a title="" href="">   <img src={fb} style={{ width: "40px", height: "40px" }}></img>   </a>

                            <a title="" href="">    <img src={insta} style={{ width: "52px", height: "38px" }}></img>   </a>
                        </div>
                        <br />



                    </div>


                    <div  >  <p style={{ color: 'black' }}> <span style={{ color: '#e00034', fontSize: '30px' }}>Contactez nous </span> <br /><br />
                        <MailOutlined />  E-mail:takouasimplon@gmail.com
        <br /> <PhoneOutlined /> tel:225255</p></div>

                </footer>


                <center style={{ backgroundColor: '#1F2833', color: 'white' }}>Copyright © Bity 2020</center>
            </div>
        )
    }
}
