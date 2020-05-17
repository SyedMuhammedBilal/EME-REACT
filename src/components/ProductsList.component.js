import React, { Component, Fragment } from 'react';

import { ProductConsumer } from '../context'
import Product from './Product.component';
import Title from './Title.component'

class ProductsList extends Component {

    render() {
        return (
            // <Product />
            <Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title title="Our Products"/>
                        <div className="row">
                            <ProductConsumer>
                                {value => {
                                    console.log(value);
                                    return(
                                        value.products.map( product => {
                                            return <Product 
                                                    key={product.id} 
                                                    product={product} />
                                        })
                                    )
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default ProductsList
