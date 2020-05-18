import React, { Component, Fragment } from 'react';
import { storeProducts } from "../data";
import { ProductConsumer } from '../context'
import Product from './Product.component';
import styled from "styled-components";
import Title from './Title.component'

class ProductsList extends Component {
    state = {
        products: storeProducts
      };
    render() {
        return (
            // <Product />
            <Fragment>
                <ProductWrapper className="py-5">
                    <div className="container">
                        <Title name="our" title="products" />
                        <div className="row">
                        <ProductConsumer>
                            {value => {
                            return value.products.map(product => {
                                return <Product key={product.id} product={product} />;
                            });
                            }}
                        </ProductConsumer>
                        </div>
                    </div>
                </ProductWrapper>
            </Fragment>
        )
    }
}

const ProductWrapper = styled.section``;

export default ProductsList
