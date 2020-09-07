
import React, { Component } from 'react'
import { Modal, Button, Form, Input, Checkbox, Drawer } from 'antd';
import { ArrowsAltOutlined } from '@ant-design/icons';
import bity from '../../image/logoBity.png'
export default class VoirPlusProp extends Component {


    state = {
        placement: 'top',
        visible: false,
    };


    showModal = () => {
        this.setState({
            visible: true,
        });
    };


    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };


    onClose = () => {
        this.setState({
            visible: false,
        });
    };


    render() {
        const { visible } = this.state;
        return (
            <>

                {/* <Button onClick={this.showDrawer}>
                    <ArrowsAltOutlined />
                </Button> */}
                {/* <Drawer
                    title={false}
                    height={1020}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    bodyStyle={{ paddingBottom: 80 }}
                    placement={this.state.placement}
                    footer={
                        false
                    }

                
                >

                   
                </Drawer> */}
                <Button style={{ backgroundColor: 'transparent' }} onClick={this.showModal}>
                <ArrowsAltOutlined />
                </Button>
                <Modal
                    title={false}
                    visible={this.state.visible}
                   
                    width={1000}
                    onCancel={this.handleCancel}
                    footer={false}
                >
                
                    <div className='section-voir-plus-annonce'>



                        <div className='section1-voir-plus-annonce' style={{ display: 'flex', textAlign: "center" }}>

                       

                                <div >
                                    <img  className='section1-voir-plus-annonce-image' alt="maison" src={"http://localhost:5000/" + this.props.el.image}   />
                                </div>
                        
                        
                                <div  className='section2-voir-plus-annonce' style={{ width: "409px", textAlign: "center" }}>
                                    <p>Type de bien : {this.props.el.typeDeBien}</p>
                                    <p>Gouvernorat :{this.props.el.gouvernorat}</p>
                                    <p>Nombre de personne : {this.props.el.nombreDePersonne}</p>
                                    <p>Prix : {this.props.el.prix} DT </p>
                                    <p> Periode : {this.props.el.periode}</p>
                                </div>
                   
                        </div>

                      
                            <div    className='section3-voir-plus-annonce' style={{ width: "930px", textAlign: "center" }}>

                                <p>Description : {this.props.el.description}</p>

                                <p>Reservation ou contact :<br />
                        par email :  {this.props.el.emailAnnonce} <br />
                        par télephone :  {this.props.el.telephoneAnnonce}
                                </p>
                            </div>
                   


                    </div> 
                </Modal>
            </>
        );
    }
}

