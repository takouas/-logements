import React, { Component } from 'react'
import "./annonces.css"
import { connect } from 'react-redux';
import Filtre from './filtre';
import ListAnnonces from './listAnnonces';
import Introduction from './introduction';
import FiltreTypeDeBien from './filtre/filtreTypeDeBien';
import FiltrePrix from './filtre/filtrePrix';
import FiltrePériode from './filtre/filtreParPériode';
import FiltreGouvernorats from './filtre/filtreGouvernorats';



class HomeAnnonces extends Component {
    state = {
        typeDeBien: "",
        searchTypeDeBien: "",
        filterTypeDeBien: ""

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

                <div className="container-home-annonces-barre-recherche">
                    <FiltreTypeDeBien />
                    <FiltrePrix />
                    <FiltreGouvernorats />
                    <FiltrePériode />
                </div>



                <Introduction />
                <ListAnnonces />

                {/* {this.state.filter === "typeDeBien"
                    ? this.state.stateAnnonces
                        .filter((el) => el.typeDeBien.includes(this.state.search))
                        .map((el) => (
                            <ListAnnonces />
                        )): <ListAnnonces />}



                {this.state.stateAnnonces.filter(
                    this.state.filterTypeDeBien === "typeDeBien" && this.state.searchTypeDeBien !== ""
                        ? (el) => el.typeDeBien.includes(this.state.searchTypeDeBien)
                        : (el) => (el).map((el) => (
                            <ListAnnonces />)))} */}


{/* 
                {this.state.stateAnnonces.filter(

                    (this.state.filterTypeDeBien === "typeDeBien" && this.state.searchTypeDeBien !== "") ?
                        el => el.typeDeBien.includes(state.searchTypeDeBien.toLowerCase()) : el => el
                ).map((el) => (
                <ListAnnonces />))

                } */}



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