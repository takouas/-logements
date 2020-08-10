import React, { Component } from 'react'


import { Modal, Button, Form, Input, Checkbox, Select, Tooltip } from 'antd';
const { Search } = Input;


const { Option } = Select;
export default class Filtre extends Component {

    render() {
        return (
            <div>
                <div className="container-home-annonces-barre-recherche">
                    <div> <Search
                        placeholder="Type de bien"

                        style={{ width: 200 }}
                    />


                    </div>

                    <div><Search
                        placeholder="prix en dinar"

                        style={{ width: 200 }}
                    />

                    </div>


                    <div>
                        <Form.Item
                            name="select"

                            hasFeedback

                        >
                            <Select placeholder="Gouvernorats" style={{ width: 200 }}>
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

                    <div>
                        <Form.Item
                            name="select"

                            hasFeedback

                        >
                            <Select placeholder="Période" style={{ width: 200 }}>
                                <Option value="par jour">par jour</Option>
                                <Option value="par mois">par mois</Option>
                            </Select>
                        </Form.Item>
                    </div>

                </div>
            </div>
        )
    }
}
