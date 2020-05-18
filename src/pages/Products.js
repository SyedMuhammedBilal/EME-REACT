import React, { Component } from 'react'
import ProductsList from '../components/ProductsList.component'
import Navbar from '../components/navbar.component'
import Footer from '../components/Footer.component'

export class Products extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <ProductsList />
                <Footer />
            </div>
        )
    }
}

export default Products
