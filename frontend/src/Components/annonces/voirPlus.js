
// import React, { Component } from 'react'
// import { Modal, Button, Form, Input, Checkbox } from 'antd';
// export default class VoirPlus extends Component {


//     state = {

//         visible: false,
//     };

//     showModal = () => {
//         this.setState({
//             visible: true,
//         });
//     };


//     handleCancel = () => {
//         this.setState({ visible: false });
//     };

//     render() {
//         const { visible } = this.state;
//         return (
//             <>
//                 <Button className="" onClick={this.showModal} style={{
//                     float: "right",
//                     fontSize: 15,
//                     fontFamily: 'Cormorant Infant serif',
//                     fontWeight: 'bold',
//                 }} >
//                     voir plus
//                 </Button>
//                 <Modal
//                     visible={visible}
//                     title=" voir plus"
//                     onCancel={this.handleCancel}
//                     footer={false}
//                     style={{
//                         fontSize: 15,
//                         fontFamily: 'Cormorant Infant serif',
//                         fontWeight: 'bold',
//                     }}
//                 >
//                     <div>
//                         <p>Nombre de personne : {this.props.nombreDePersonne}</p>

//                         <p>Description : {this.props.description}</p>

//                         <p>Contactez votre logement Par tél ou mail:<br />
//                         par email :  {this.props.emailAnnonce} <br />
//                         par télephone :  {this.props.telephoneAnnonce}
//                         </p>



//                     </div>
//                 </Modal>
//             </>
//         );
//     }
// }

