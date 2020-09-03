
import React from 'react'
import { getAnnonceFromApi, deleteAnnonceFromApi } from "../../api/annoncesApi"
import { DeleteOutlined } from '@ant-design/icons';
import { Modal, Button } from 'antd';
class DeleteAnnonce extends React.Component {
    state = { visible: false };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };


    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <>
                <Button style={{ backgroundColor: 'transparent' }} onClick={this.showModal}>
                    <DeleteOutlined className='page-list-annonces-propritaire-button-delete' />
                </Button>
                <Modal
                    title={false}
                    visible={this.state.visible}

                    onCancel={this.handleCancel}
                    footer={false}
                >
                    <Button style={{ backgroundColor: 'red' }}
                     onClick={() => this.props.deleteAnnonceFromApi(el)}>
                        supprimer

                                    </Button>
                </Modal>
            </>
        );
    }
}
const mapStateToProps = (state) => ({



});

const mapDispatchToProps = (dispatch) => ({



    deleteAnnonceFromApi: (el) => dispatch(deleteAnnonceFromApi(el))
});


export default connect(mapStateToProps, mapDispatchToProps)()