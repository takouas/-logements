import React, { Component } from 'react'
import gouvernorat from '../../ressource/gouvernorat'

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
                        <Form.Item  >
                            <Select placeholder="Gouvernorats" style={{ width: 200 }}>
                                {gouvernorat.map(el => <Option value={el.value}>{el.contenue}</Option>)}
                            </Select>
                        </Form.Item>

                    </div>

                    <div>
                        <Form.Item >
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
