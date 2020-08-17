import React, { Component } from 'react'

import './gestionnaireUsers.css'
import { Modal, Button, Form, Input, Checkbox, Select, Tooltip } from 'antd';
const { Search } = Input;



export default class FiltreForAdmin extends Component {

    render() {
        return (




            <div className="container-page-admin-barre-recherche" >
                <Search placeholder="Nom" name="nom" style={{ width: 200 }} />
                <Search placeholder="Role" name="role" style={{ width: 200 }} />
            </div>





        )
    }
}
