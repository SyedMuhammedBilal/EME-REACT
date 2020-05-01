import React, { Component, Fragment } from 'react';
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
                        filter: 'brightness(60%)'
                        
                    }} />
                    <button onClick={this.clickHandler} className={Styles.btn}>Shop Now</button>
                    <div className={Styles.centered}>
                        <h1 style={{
                            fontSize: '85px',
                            fontWeight: '500',
                            marginTop: '-80px',
                            fontFamily: 'Copperplate'
                        }}>
                            {this.state.MainName}
                        </h1>
                        <span style={{
                            fontSize: '30px',
                            fontFamily: 'Geneva'
                        }}>
                            {this.state.Slogan}
                        </span>
                    </div>
                </div>

            </div>
        );
    }
}
 
export default Header