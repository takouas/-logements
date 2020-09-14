
import React, { Component } from 'react'
import { Modal, Button, Form, Input, Checkbox, Drawer } from 'antd';
import { ArrowsAltOutlined } from '@ant-design/icons';
import bity from '../../image/logoBity.png'
export default class VoirPlus extends Component {


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



                        <div className='section1-voir-plus-annonce' style={{ display: 'flex' }}>



                            <div >
                                <img className='section1-voir-plus-annonce-image' alt="maison" src={"http://localhost:5000/" + this.props.el.image} />
                            </div>


                            <div className='section2-voir-plus-annonce' style={{ width: "409px", paddingLeft: '50px' }}>
                                <p><span style={{ fontWeight:'bold' }}>Type de bien :</span> {this.props.el.typeDeBien}</p>
                                <p><span style={{ fontWeight:'bold' }}>Gouvernorat :</span>{this.props.el.gouvernorat}</p>
                                <p><span style={{ fontWeight:'bold' }}>Nombre de personne :</span> {this.props.el.nombreDePersonne}</p>
                                <p><span style={{ fontWeight:'bold' }}>Prix :</span> {this.props.el.prix} DT </p>
                                <p><span style={{ fontWeight:'bold' }}>Periode :</span>  {this.props.el.periode}</p>
                                <p><span style={{ fontWeight:'bold' }}>Contact par email : </span>{this.props.el.emailAnnonce} <br /> <br/>
                                    <span style={{ fontWeight:'bold' }}>Contact  par télephone : </span>  {this.props.el.telephoneAnnonce}
                                </p>
                                <div style={{ width: "400px", height: '100px', overflow: 'scroll',overflowX: 'hidden'}}>

                                    <p><span style={{ fontWeight:'bold' }}>Description :</span> {this.props.el.description}</p>


                                </div>
                            </div>

                        </div>
                        <br />





                    </div>
                </Modal>
            </>
        );
    }
}

