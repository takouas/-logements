import React, { Component } from 'react'
import "./annonces.css"
import { Modal, Button, Select, Input, Form, Upload } from 'antd';

const { TextArea } = Input;

const onChange = e => {
    console.log(e);
};





const { Option } = Select;
export default class AjoutAnnonces extends Component {
    state = {
        visible: false,
        files: ""
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOnUploadFile = () => {

    };


    handleCancel = () => {
        this.setState({ visible: false });
    };

    render() {
        const { visible } = this.state;
        return (
            <>


                <Button className="" onClick={this.showModal}>
                    ajout
            </Button>
                <Modal
                    visible={visible}
                    title="ajout"

                    onCancel={this.handleCancel}
                    footer={[


                    ]}
                >
                    <div>

                        <div className='container-modal-section1'>
                            <Form.Item
                                name="select" >
                                <Select placeholder="Etat de bien " style={{ width: 150 }}>
                                    <Option value="maison">maison</Option>
                                    <Option value="chambre">chambre</Option>
                                    <Option value="foyer privé">foyer privé</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                name="select"

                                hasFeedback

                            >
                                <Select placeholder="Période" style={{ width: 150 }}>
                                    <Option value="par jour">par jour</Option>
                                    <Option value="par mois">par mois</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item
                                name="select"


                            >
                                <Select placeholder="Gouvernorats" style={{ width: 150 }}>
                                    <Option value="Ariana">Ariana</Option>
                                    <Option value="Béja">Béja</Option>
                                    <Option value="Ben Arous">Ben Arous</Option>
                                    <Option value="Bizerte">Bizerte</Option>
                                    <Option value="Gabès">Gabès</Option>
                                    <Option value="Gafsa">Gafsa</Option>
                                    <Option value="Jendouba">Jendouba</Option>
                                    <Option value="Kairouan">Kairouan</Option>
                                    <Option value="Kasserine">Kasserine</Option>
                                    <Option value="Kef">Kef</Option>
                                    <Option value="Mahdia">Mahdia</Option>
                                    <Option value="Manouba">Manouba</Option>
                                    <Option value="Médenine">Médenine</Option>
                                    <Option value="Monastir">Monastir</Option>
                                    <Option value="Nabeul">Nabeul</Option>
                                    <Option value="Sfax">Sfax</Option>
                                    <Option value="Sidi Bouzid">Sidi Bouzid</Option>
                                    <Option value="Siliana">Siliana</Option>
                                    <Option value="Sousse">Sousse</Option>
                                    <Option value="Tataouine">Tataouine</Option>
                                    <Option value="Tozeur">Tozeur</Option>
                                    <Option value="Tunis">Tunis</Option>
                                    <Option value="Zaghouan">Zaghouan</Option>
                                </Select>
                            </Form.Item>
                        </div>

                        <div className='container-modal-section2'>
                            <Input placeholder="prix" style={{ width: 200 }}/>



                            <Input placeholder="nombre de personne" style={{ width: 200 }}/>
                        </div>

                        <Input placeholder="adress" />

                        <TextArea placeholder="description" allowClear onChange={onChange} />




                    </div>
                </Modal>
            </>
        );
    }
}




