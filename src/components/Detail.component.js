import React, { Component } from 'react'
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'
import { ButtonContainer } from './Button.component'

class Detail extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { 
                        id, 
                        company, 
                        img, 
                        info, 
                        price, 
                        title, 
                        inCart 
                        } = value.detailProduct;
                    
                    return(
                        <div className="container py-5">
                        {/*title*/}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                        {/*end title*/}
                        
                        {/* Product info */}
                        <div className="row">
                            <div className="col-10 mx-auto col-md-6 my-3" >
                                <img src={img} style={{
                                filter: 'opacity(1)'}} className="img-fluid" alt="" />
                            </div>
                            {/* Product text */}
                            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <h2>model: {title}</h2>
                                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                    made by: <span className="text-uppercase">{company}</span> 
                                </h4>
                                <h4 className="text-blue">
                                    <strong>
                                        price: <span>RS</span>
                                        {price}
                                    </strong>
                                </h4>
                                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                    info about product
                                </p>
                                <p style={{fontSize: '19px'}} className="text-muted lead">{info}</p>
                                <div>
                                    <Link to="/products"><ButtonContainer>Back to Product</ButtonContainer></Link>
                                    <ButtonContainer 
                                        cart
                                        disabled={inCart ? true: false}
                                        onClick={() => {
                                            value.addToCart(id);
                                        }}
                                    >
                                        {inCart?'inCart': 'add to cart'}
                                    </ButtonContainer>
                                </div>
                            </div>
                        </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}

export default Detail
