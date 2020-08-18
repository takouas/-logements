import React, { Component } from 'react'
import "./annonces.css"
import { Modal, Button, Select, Input, Form, Upload } from 'antd';
import { getAnnonceFromApi, postAnnonceToApi } from "../../api/annoncesApi"
import { connect } from 'react-redux';
import axios from "axios"
import gouvernorat from '../../ressource/gouvernorat'
const { TextArea } = Input;






const { Option } = Select;
class AjoutAnnonces extends Component {
    state = {
        visible: false,


        prix: "",
        nombreDePersonne: "",
        gouvernorat: "",
        typeDeBien: "",
        periode: "",
        image: [],
        description: "",
        emailAnnonce: "",
        telephoneAnnonce: ""
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    //upload picture
    handleOnUploadFile(e) {
        this.setState({ image: e.target.files[0].name });

    }

    handleOnSubmit() {

        const formData = new FormData();
        formData.append("file", this.state.image);
        // console.log(this.state.image);
        // console.log(formData)

        axios
            .post("http://localhost:5000/image", formData)
            .then(res => console.log(res))
            .catch(err => console.error(err));
    };


    handleCancel = () => {
        this.setState({ visible: false });
    };

    render() {
        const { visible } = this.state;
        return (
            <>


                <Button className="" onClick={this.showModal} style={{
                    fontSize: 15,
                    fontFamily: 'Cormorant Infant serif',
                    fontWeight: 'bold',
                }}>
                    Déposer une annonce
            </Button>
                <Modal
                    visible={visible}
                    title="Déposez  votre annonce pour  louer votre appartement, maison ..."

                    onCancel={this.handleCancel}
                    footer={false}
                    style={{
                        fontSize: 15,
                        fontFamily: 'Cormorant Infant serif',
                        fontWeight: 'bold',
                    }}
                >
                    <div>

                        <div className='container-modal-section1'>
                            <Form.Item
                                name="select" >
                                <p>Etat de bien : </p>
                                <Select placeholder="Etat de bien " style={{ width: 150 }} onChange={(value) => { this.setState({ typeDeBien: value }) }}>
                                    <Option value="maison">maison</Option>
                                    <Option value="chambre">chambre</Option>
                                    <Option value="foyer privé">foyer privé</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                name="select"



                            >
                                <p>Période :</p>
                                <Select placeholder="Période" style={{ width: 150 }} onChange={(value) => { this.setState({ periode: value }) }}>
                                    <Option value="par jour">par jour</Option>
                                    <Option value="par mois">par mois</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item
                                name="select"


                            >
                                <p> Gouvernorats :</p>
                                <Select placeholder="Gouvernorats" style={{ width: 150 }}

                                    onChange={(value) => { this.setState({ gouvernorat: value }) }}
                                >
                                    {gouvernorat.map(el => <Option value={el.value}>{el.contenue}</Option>)}

                                </Select>
                            </Form.Item>
                        </div>

                        <div className='container-modal-section2'>
                            <span>
                                <p>prix :</p>
                                <Input placeholder="prix" style={{ width: 200 }} onChange={(e) => { this.setState({ prix: e.target.value }) }} />
                            </span>

                            <span>
                                <p>nombre de personne :</p>
                                <Input placeholder="nombre de personne" style={{ width: 200 }} onChange={(e) => { this.setState({ nombreDePersonne: e.target.value }) }} />
                            </span>
                        </div>
                        <br />
                        <div className='container-modal-section2'>
                            <span> <p>téléphone :</p>

                                <Input type="tel" style={{ width: 200 }} pattern="\d*" placeholder=" votre numéro de téléphone" onChange={(e) => { this.setState({ telephoneAnnonce: e.target.value }) }} />

                            </span>

                            <Form.Item name={['user', 'email']} rules={[{ type: 'email' }]}    > <p>E-mail : </p>
                                <Input placeholder="E-mail" onChange={(e) => { this.setState({ emailAnnonce: e.target.value }) }} />
                            </Form.Item>

                        </div>


                        <div >

                            <span>File</span>
                            <Input name="file" type="file" onChange={(e) => this.handleOnUploadFile(e)} />

                        </div>
                        <Button type="submit" class="btn" onClick={() => this.handleOnSubmit()}>Submit</Button>




                        <p>Adress : </p>
                        <Input placeholder="adress" onChange={(e) => { this.setState({ adress: e.target.onChange }) }} />





                        <p>Description :</p>
                        <TextArea placeholder="description" allowClear onChange={(e) => { this.setState({ description: e.target.value }) }} />

                        <Form.Item>
                            <Button className='button-ajout' htmlType="submit" style={{
                                fontSize: 15,
                                fontFamily: 'Cormorant Infant serif',
                                fontWeight: 'bold',
                            }} onClick={
                                () =>
                                    this.props.postAnnonceToApi({
                                        "prix": this.state.prix,
                                        "nombreDePersonne": this.state.nombreDePersonne,
                                        "gouvernorat": this.state.gouvernorat,
                                        "typeDeBien": this.state.typeDeBien,
                                        "periode": this.state.periode,
                                        "image": this.state.image,
                                        "description": this.state.description,
                                        "emailAnnonce": this.state.emailAnnonce,
                                        "telephoneAnnonce": this.state.telephoneAnnonce
                                    })
                            }>
                                ajout
        </Button>
                        </Form.Item>
                    </div>

                </Modal>
            </>
        );
    }
}
const mapStateToProps = () => {

}
const mapDispatchToProps = (dispatch) => ({
    postAnnonceToApi: (el) => dispatch(postAnnonceToApi(el))

})

export default connect(mapStateToProps, mapDispatchToProps)(AjoutAnnonces)


