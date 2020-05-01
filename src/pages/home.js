import React, { Fragment } from 'react'

import NavbarPage from '../components/navbar.component'
import Header from '../components/header.component'
import HoriCard from '../components/HoriCard.component'

function home() {
    return (
        <Fragment>
            <NavbarPage />
            <Header />
            <HoriCard />
        </Fragment>
    )
}

export default home
