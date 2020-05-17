import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";
import { ProductConsumer } from '../context'
import styled from "styled-components"

class Product extends Component {
    render() {

        const {id, title, img, price, inCart} = this.props.product;

        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <div className="img-container p-5" onClick={() => console.log("clicked")}>
                        <Link to="/details">
                            <img src={img} alt="product" className="card-img-top" />
                        </Link>

                        {/* Cart button */}
                        <button className="cart-btn" disabled={inCart? true: false}
                            onClick={() => {console.log('added to cart')}}>
                            {inCart?(
                                <p className='text-capitalize mb-0' disabled>
                                {" "}
                            in cart</p>
                            ):(
                                <i className="fas fa-cart-plus"/>
                                )}
                        </button>

                    </div>
                    
                    {/* Cart Footer */}
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                            {title}
                        </p>
                        <h5 className="font-italic mb-0">
                            <span className="mr-1">RS</span>
                            {price}
                        </h5>
                    </div>
                </div>
            </ProductWrapper>
        )
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
}

const ProductWrapper = styled.div`
.card {
    border-color:transparent;
    transition: all 1 linear;
}

.card-footer{
    background: transparent;
    background-top: transparent;
    transition: all 1 linear;
}
&:hover {
    .card {
        border: 0.04rem solid rgba(0,0,0,0.2);
        box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer {
        background: rgba(247, 247, 247);
    }
}

.img-container {
    position: relative;
    overflow: hidden;
}
.card-img-top {
    transition: all 1 linear
}
.img-container:hover .card-img-top {
    transform: scale(1.2);
}
.cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: linear-gradient(to right, #0d469b, #78379d, #b90083, #e10055, #eb2212);
    border: none;
    color: white;
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 0.7s linear;
}
.img-container:hover .cart-btn {
    transform: translate(0, 0);
}
.cart-btn:hover {
    color: blue;
    cursor: pointer;
}
`

export default Product
