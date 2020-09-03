
import React, { Component } from 'react'
import { Modal, Button, Form, Input, Checkbox, Drawer } from 'antd';
import { ArrowsAltOutlined } from '@ant-design/icons';

export default class VoirPlusProp extends Component {


    state = {
        placement: 'top',
        visible: false,
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

                <Button onClick={this.showDrawer}>
                    <ArrowsAltOutlined />
                </Button>
                <Drawer
                    title={false}
                    height={820}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    bodyStyle={{ paddingBottom: 80 }}
                    placement={this.state.placement}
                    footer={
                        false
                    }
                >


                    <div>
                        <br></br>
                        <div style={{ display: 'flex', textAlign: "center" }}>
                            <td>
                                <div style={{ width: "670px" }}>
                                    <img alt="maison" src={"http://localhost:5000/" + this.props.el.image} style={{ height: 250, width: "650px" }} />
                                </div>
                            </td>
                            <td >
                                <div style={{ width: "529px", textAlign: "center" }}>
                                    <p>Type de bien : {this.props.el.typeDeBien}</p>
                                    <p>Gouvernorat :{this.props.el.gouvernorat}</p>
                                    <p>Nombre de personne : {this.props.el.nombreDePersonne}</p>
                                    <p>Prix : {this.props.el.prix} DT </p>
                                    <p> Periode : {this.props.el.periode}</p>
                                </div>
                            </td>
                        </div>

                        <td>
                            <div style={{ width: "1220px", textAlign: "center" }}>

                                <p>Description : {this.props.el.description}</p>

                                <p>Reservation ou contact :<br />
                        par email :  {this.props.el.emailAnnonce} <br />
                        par télephone :  {this.props.el.telephoneAnnonce}
                                </p>
                            </div>
                        </td>


                    </div>
                </Drawer>
            </>
        );
    }
}

