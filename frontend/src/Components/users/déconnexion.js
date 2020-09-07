import React, { Component } from 'react'
import { Modal, Button, Form, Input, Checkbox, Alert } from 'antd';
import './users.css';




export default class Déconnexion extends Component {
    logout = () => {
        localStorage.clear();
        window.location.reload()

    }



    render() {
        
        return (
            <div className='container-page-déconnexion'>
            
                <Button className="btn-déconnexion" onClick={this.logout} >Déconnexion</Button>
            </div>
        )
    }
}
