import React, { Component } from 'react'
import "./annonces.css"
import { Modal, Button, Select, Input, Form, Upload } from 'antd';
import { patchAnnonceToApi, getAnnonceFromApi } from "../../api/annoncesApi"
import { FormOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import gouvernorat from '../../ressource/gouvernorat'
import TypeDeBien from '../../ressource/typeDeBien'
import axios from "axios"
const { TextArea } = Input;





const { Option } = Select;
class ModifierAnnonces extends Component {
    state = {
        visible: false,
        _id: this.props.stateAnnonces._id,
        prix: this.props.stateAnnonces.prix,
        nombreDePersonne: this.props.stateAnnonces.nombreDePersonne,
        gouvernorat: this.props.stateAnnonces.gouvernorat,
        typeDeBien: this.props.stateAnnonces.typeDeBien,
        periode: this.props.stateAnnonces.periode,
        image: this.props.stateAnnonces.image,
        description: this.props.stateAnnonces.description
        // files: ""
    };
    componentDidMount() {
        this.props.getAnnonceFromApi()
    }

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


                <Button className="" onClick={this.showModal} style={{ backgroundColor: 'transparent' }} >
                    <FormOutlined className='page-list-annonces-propritaire-button-edite' />
                </Button>
                <Modal
                    visible={visible}
                    title="modifier"
                    onCancel={this.handleCancel}
                    footer={false} style={{
                        fontSize: 15,
                        fontFamily: 'Cormorant Infant serif',
                        fontWeight: 'bold',
                    }}
                >

                    <Form enctype='multipart/form-data' >

                        <div className='container-modal-section1'>
                            <Form.Item
                                name="select" >
                                <p>Etat de bien : </p>
                                <Select placeholder="Etat de bien " style={{ width: 150 }} value={this.state.typeDeBien} onChange={(value) => { this.setState({ typeDeBien: value }) }} defaultValue={this.props.stateAnnonces.typeDeBien}>
                                    {TypeDeBien.map(el => <Option value={el.value}>{el.contenue}</Option>)}
                                </Select>
                            </Form.Item>
                            <Form.Item
                                name="select"



                            >
                                <p>Période :</p>
                                <Select placeholder="Période" style={{ width: 150 }} onChange={(value) => { this.setState({ periode: value }) }} defaultValue={this.props.stateAnnonces.periode}>
                                    <Option value="par jour">par jour</Option>
                                    <Option value="par mois">par mois</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item
                                name="select"


                            >
                                <p> Gouvernorats :</p>
                                <Select placeholder="Gouvernorats" style={{ width: 150 }}

                                    onChange={(value) => { this.setState({ gouvernorat: value }) }} defaultValue={this.props.stateAnnonces.gouvernorat}
                                >
                                    {gouvernorat.map(el => <Option value={el.value}>{el.contenue}</Option>)}
                                </Select>
                            </Form.Item>
                        </div>

                        <div className='container-modal-section2'>
                            <span>
                                <p>prix :</p>
                                <Input placeholder="prix" style={{ width: 200 }} onChange={(e) => { this.setState({ prix: e.target.value }) }} defaultValue={this.props.stateAnnonces.prix} />
                            </span>

                            <span>
                                <p>nombre de personne :</p>
                                <Input placeholder="nombre de personne" style={{ width: 200 }} onChange={(e) => { this.setState({ nombreDePersonne: e.target.value }) }} defaultValue={this.props.stateAnnonces.nombreDePersonne} />
                            </span>
                        </div>


                        <br />
                        <div className='container-modal-section2'>
                            <span> <p>téléphone :</p>

                                <Input type="tel" style={{ width: 200 }} pattern="\d*" placeholder=" votre numéro de téléphone" onChange={(e) => { this.setState({ telephoneAnnonce: e.target.value }) }}
                                    defaultValue={this.props.stateAnnonces.telephoneAnnonce} />

                            </span>

                            <Form.Item name={['user', 'email']} rules={[{ type: 'email' }]}    > <p>E-mail : </p>
                                <Input placeholder="E-mail" onChange={(e) => { this.setState({ emailAnnonce: e.target.value }) }} defaultValue={this.props.stateAnnonces.emailAnnonce} />
                            </Form.Item>

                        </div>


                        <Form.Item>

                            <span>File</span>
                            <Input name="file" type="file" onChange={(e) => this.handleOnUploadFile(e)} />


                            <Button type="submit" class="btn" onClick={() => this.handleOnSubmit()}>Submit</Button>

                        </Form.Item>


                    
                        <p>Description :</p>
                        <TextArea placeholder="description" allowClear onChange={(e) => { this.setState({ description: e.target.value }) }} defaultValue={this.props.stateAnnonces.description} />


                        <Form.Item>
                            <Button className='button-ajout' onClick={() => this.props.patchAnnonceToApi({
                                _id: this.state._id, prix: this.state.prix, 
                                image:this.state.image,nombreDePersonne: this.state.nombreDePersonne, gouvernorat: this.state.gouvernorat, typeDeBien: this.state.typeDeBien, periode: this.state.periode, description: this.state.description, telephoneAnnonce: this.state.telephoneAnnonce, emailAnnonce: this.state.emailAnnonce

                            })} htmlType="submit" style={{
                                fontSize: 15,
                                fontFamily: 'Cormorant Infant serif',
                                fontWeight: 'bold',
                            }} >
                                modifier
        </Button>
                        </Form.Item>
                    </Form>

                </Modal>
            </>
        );
    }
}
const mapStateToProps = () => ({
})
const mapDispatchToProps = (dispatch) => ({

    patchAnnonceToApi: (elemnt) => dispatch(patchAnnonceToApi(elemnt)),
    getAnnonceFromApi: () => dispatch(getAnnonceFromApi())
})
export default connect(mapStateToProps, mapDispatchToProps)(ModifierAnnonces)

