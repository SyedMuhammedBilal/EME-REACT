import React, { Component } from 'react'
import ProductsList from '../components/ProductsList.component'
import Navbar from '../components/navbar.component'

export class Products extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <ProductsList />
            </div>
        )
    }
}

export default Products
