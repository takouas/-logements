import React, { Component } from 'react'
import { Modal, Button, Form, Input, Checkbox } from 'antd';
import './users.css';
export default class Déconnexion extends Component {
    logout = () => {
        window.localStorage.clear();
        window.location.reload()

    }



    render() {
        return (
            <div>
                <Button className="btn-déconnexion" onClick={this.logout} >Déconnexion</Button>
            </div>
        )
    }
}
