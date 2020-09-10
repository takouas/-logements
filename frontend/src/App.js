import React from 'react'
import Page from './Components/page/page'
import Home from './Components/page/home'
import bity from './image/logoBity.png'
import HomeAnnonces from './Components/annonces/homeAnnonces';
import GestionnaireAnnonces from './Components/gestionnaireAnnonces/gestionnaireAnnonces'
import ListAnnonceProp from './Components/annonces/listAnnonceProp';
import GestionnaireUsers from './Components/gestionnaireUsers/gestionnaireUsers';
import HomeGuest from './Components/annonces/homeGuest'
import NotFoundPage from'./Components/page/notFoundPage'
import { BrowserRouter as Router, Route, Link, Switch, Redirect, } from "react-router-dom";

export default function App() {
    return (
        <div>
            <Router>
            <Page />
                <Switch>
                  
                    <Route exact path="/" component={HomeGuest} />
                    <Route component={NotFoundPage} />
                    
                </Switch>
            </Router>


        </div>


    )
}

