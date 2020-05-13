import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import Cover from '../img/About.jpg';
import Styles from './AboutHeader.module.css';   

class AboutHeader extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             MainName: 'About Us',
             Slogan: 'Our Story'
        }
    }

    static propTypes = {
        MainName: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.array
        ])
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
                        height: '500px', 
                        filter: 'brightness(60%)',
                        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.7), 0 6px 20px 0 rgba(0, 0, 0, 0.15)' 
                    }} />
                    <div className={Styles.centered}>
                        <h1 style={{
                            fontSize: '75px',
                            fontWeight: '500',
                            marginTop: '-80px',
                        }}>
                            {this.state.MainName}
                        </h1>
                        <p className={Styles.line}>{this.state.Slogan}</p>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default AboutHeader