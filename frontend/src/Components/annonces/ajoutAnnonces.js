import React, { Component } from 'react'
import "./annonces.css"
import { Modal, Button, Select, Input, Form, Upload } from 'antd';
import { getAnnonceFromApi, postAnnonceToApi } from "../../api/annoncesApi"
import { connect } from 'react-redux';
import axios from "axios"
import gouvernorat from '../../ressource/gouvernorat'
import TypeDeBien from '../../ressource/typeDeBien'
import { PlusOutlined } from '@ant-design/icons';
import jwt from 'jsonwebtoken';
const { TextArea } = Input;




var token = localStorage.getItem('token')
var decoded = jwt.decode(token,);
//console.log(decoded)




const { Option } = Select;
class AjoutAnnonces extends Component {
    state = {
        visible: false,


        prix: "",
        nombreDePersonne: "",
        gouvernorat: "",
        typeDeBien: "",
        periode: "",
        image: "",
        file: "",
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
        this.setState({ file: e.target.files })

    }

    handleOnSubmit() {

        const formData = new FormData();
        formData.append("file", this.state.file[0]);
        console.log(this.state.file[0]);
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
                    fontWeight: 'bold', backgroundColor: '#e00034', color: '#fff', borderColor: 'fff', margin: '25px 65px'
                }}>
                    <PlusOutlined /> Déposer une annonce
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
                    <Form enctype='multipart/form-data'>
                   

                        <div className='container-modal-section1'>
                            <Form.Item
                                name="select"
                                rules={[{
                                    required: true,
                                    message: 'SVP entrer votre Etat de bien ! ',
                                }]} >
                                <p>Etat de bien : </p>
                                <Select placeholder="Etat de bien " style={{ width: 150 }} onChange={(value) => { this.setState({ typeDeBien: value }) }} >
                                    {TypeDeBien.map(el => <Option value={el.value}>{el.contenue}</Option>)}
                                </Select>
                            </Form.Item>
                            <Form.Item
                                name="select"
                                rules={[{
                                    required: true,
                                    message: 'SVP entrer votre Période ! ',
                                }]}


                            >
                                <p>Période :</p>
                                <Select placeholder="Période" style={{ width: 150 }} onChange={(value) => { this.setState({ periode: value }) }}>
                                    <Option value="par jour">par jour</Option>
                                    <Option value="par mois">par mois</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item
                                name="select"

                                rules={[{
                                    required: true,
                                    message: 'SVP entrer votre Gouvernorats ! ',
                                }]}
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
                                <Form.Item name='' rules={[{
                                        required: true,
                                        message: 'SVP entrer votre prix ! ',
                                    }]}>
                                    <p>prix :</p>
                                    <Input placeholder="prix" style={{ width: 200 }} onChange={(e) => { this.setState({ prix: e.target.value }) }}  />
                                </Form.Item>
                            </span>

                            <span>
                                <Form.Item name=""rules={[{
                                        required: true,
                                        message: 'SVP entrer votre nombre de personne ! ',
                                    }]}>
                                    <p>nombre de personne :</p>
                                    <Input placeholder="nombre de personne" style={{ width: 200 }} onChange={(e) => { this.setState({ nombreDePersonne: e.target.value }) }} />
                                </Form.Item>
                            </span>
                        </div>
                        <br />
                        <div className='container-modal-section2'>
                            <Form.Item name=""rules={[{
                                        required: true,
                                        message: 'SVP entrer votre numéro de téléphone! ',
                                    }]}>
                                <p>téléphone :</p>

                                <Input type="tel" style={{ width: 200 }} pattern="\d*" placeholder=" votre numéro de téléphone" onChange={(e) => { this.setState({ telephoneAnnonce: e.target.value }) }} rules={[{
                                    required: true,
                                    message: 'SVP entrer votre prix ! ',
                                }]} />


                            </Form.Item>
                            <Form.Item name={['user', 'email']} rules={[{
                                type: 'email', required: true,
                                message: 'SVP entrer votre email ! ',
                            }]}    > <p>E-mail : </p>
                                <Input placeholder="E-mail" onChange={(e) => { this.setState({ emailAnnonce: e.target.value }) }} />
                            </Form.Item>

                        </div>


                        <Form.Item rules={[{
                                 required: true,
                                message: 'SVP entrer votre image ! ',
                            }]}>

                            <span>File</span>
                            <Input name="file" type="file" onChange={(e) => this.handleOnUploadFile(e)} />


                            <Button type="submit" class="btn" onClick={() => this.handleOnSubmit()}>Submit</Button>

                        </Form.Item>

            


                        <Form.Item name=""rules={[{
                                        required: true,
                                        message: 'SVP entrer votre description ! ',
                                    }]}>
                            <p>Description :</p>
                            <TextArea placeholder="description" allowClear onChange={(e) => { this.setState({ description: e.target.value }) }} />
                        </Form.Item>
                        <Form.Item >
                            <Button className='button-ajout' htmlType="submit" style={{
                                fontSize: 15,
                                fontFamily: 'Cormorant Infant serif',
                                fontWeight: 'bold', backgroundColor: '#e00034', color: '#fff'
                            }} 
                            onClick={
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
                                        "telephoneAnnonce": this.state.telephoneAnnonce,
                                        "emailUsers": decoded.user.email
                                    })
                            }
                            >
                                ajout
        </Button>
                        </Form.Item>
                    </Form>

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


