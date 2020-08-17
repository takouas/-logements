import React, { Component } from 'react'
import "./annonces.css"
import { connect } from 'react-redux';
import Filtre from './filtre';
import ListAnnonces from './listAnnonces';
import Introduction from './introduction';


class HomeAnnonces extends Component {

state={
    filterTypeDeBien:""   ,searchTypeDeBien:"",
}


    //  handleChange=(e)=> {
    //         this.setState({
    //           ...this.state,
    //           [event.target.name]: event.target.value,
    //         });

    //       }





    render() {
        return (

            <div className="container-home-annonces">
                <Introduction />

                <Filtre />



                <ListAnnonces />


{/* 

                {this.state.stateAnnonces.filter(
                    this.state.filterType=== "typeDeBien" && this.state.searchTypeDeBien !== ""
                        ? (el) => el.typeDeBien.includes(this.state.searchTypeDeBien.toLowerCase())
                        : (el) => (el).map((el) => (
                            <ListAnnonces />)))}
 */}



            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    stateAnnonces: state.stateAnnonces


});

const mapDispatchToProps = (dispatch) => ({



});


export default connect(mapStateToProps, mapDispatchToProps)(HomeAnnonces)