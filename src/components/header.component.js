import React, { Component } from 'react';
import Cover from '../img/1.jpg';
import Styles from './header.module.css';   

class Header extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             MainName: 'EME',
             Slogan: 'Working together for a healthier Pakistan',
        }
    }
    
    clickHandler() {
        console.log('Increment Clicked')
    }

    render() { 
        return ( 
            <div className={Styles.wrap}>
                <div className={Styles.container}>
                    <img src={Cover} alt="cover"
                    style={{
                        width: "100%",
                        height: '530px',
                        /*filter: 'blur(2px)',
                        webkitFilter: 'blur(2px)',*/  
                        filter: 'brightness(60%)',
                        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.7), 0 6px 20px 0 rgba(0, 0, 0, 0.15)'
                        
                    }} />
                    <button onClick={this.clickHandler} className={Styles.btn}>Shop Now</button>
                    <div className={Styles.centered}>
                        <h1 style={{
                            fontSize: '85px',
                            fontWeight: '500',
                            marginTop: '-80px',
                            fontFamily: 'Copperplate',
                        }}>
                            {this.state.MainName}
                        </h1>
                        <p>Electro Medical Enterprises</p>
                        {/*<p>EME is serving their services since 2000</p>*/}
                        <span style={{
                            fontSize: '30px',
                            fontFamily: 'Geneva'
                        }}><b>
                            {this.state.Slogan}
                        </b></span>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Header