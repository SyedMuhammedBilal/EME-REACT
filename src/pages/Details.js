import React, { Component } from 'react'
import Detail from '../components/Detail.component'
import Navbar from '../components/navbar.component'

class Details extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Detail />
            </div>
        )
    }
}

export default Details
