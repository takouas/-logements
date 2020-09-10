import React, { Component } from 'react'
import PrivePage from './privePage';
import NavPublicPage from './navPublicPage';


const Page = () => {
    var token = localStorage.getItem('token')

    if (token !== null) { return <PrivePage /> }

    else {
        return <NavPublicPage />

    }


}
export default Page;