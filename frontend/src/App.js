import React, { Component } from 'react'

import Home from './Components/page/linkHome'
import bity from './image/logoBity.png'
import HomeClient from './Components/annonces/homeClient';
import GestionnaireAnnonces from './Components/gestionnaireAnnonces/gestionnaireAnnonces'
import ListAnnonceProp from './Components/annonces/listAnnonceProp';
import GestionnaireUsers from './Components/gestionnaireUsers/gestionnaireUsers';
import HomeGuest from './Components/annonces/homeGuest'
import NotFoundPage from './Components/page/notFound 404/notFoundPage'
import Dashboard from './Components/users/dashboard'

import { BrowserRouter as Router, Route, Link, Switch, Redirect, } from "react-router-dom";
import Nav from './Components/page/navbar';
var token = localStorage.getItem('token')


export default class App extends Component {
    render() {
        if (token !== null) {
            return (

                <div>

                    <Router>


                        <Nav />


                        <Switch>
                            <Route exact path='/' render={() => <HomeGuest />} />
                            <Route exact path="/GestionnaireAnnonces" render={() => <GestionnaireAnnonces />} />
                            <Route exact path='/GestionnaireUsers' render={() => <GestionnaireUsers />} />
                            <Route exact path='/Dashboard' render={() => <Dashboard />} />
                            <Route exact path='/HomeAnnonces' render={() => <HomeClient />} />
                            <Route exact path='/ListAnnonceProp' render={() => <ListAnnonceProp />} />
                            <Route path="/404" component={NotFoundPage} />
                            <Redirect to="/404" /> :

                        </Switch>


                    </Router>




                </div>


            )
        }
        else {
            return (
                <div>

                    <Router>


                        <Nav />
                        <Switch>
                            <Route exact path='/' render={() => <HomeGuest />} />
                            <Route path="/404" component={NotFoundPage} />
                            <Redirect to="/404" />
                        </Switch>
                    </Router>




                </div>


            )
        }

    }
}

