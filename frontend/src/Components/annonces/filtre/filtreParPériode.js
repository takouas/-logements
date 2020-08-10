import React, { Component } from 'react'


import { Form, Select } from 'antd';



const { Option } = Select;
export default class FiltrePériode extends Component {

    render() {
        return (
            <div>
            

                    <div>
                        <Form.Item
                            name="select"

                          

                        >
                            <Select placeholder="Période" style={{ width: 200 }}>
                                <Option value="par jour">par jour</Option>
                                <Option value="par mois">par mois</Option>
                            </Select>
                        </Form.Item>
                    </div>

            
            </div>
        )
    }
}
