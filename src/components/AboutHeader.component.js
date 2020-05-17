import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

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
          PropTypes.string
        ])
      }
    
    clickHandler() {
        console.log('Increment Clicked')
    }

    render() { 
        return ( 
            <div className={Styles.wrap}>
                <div className={Styles.container}>
                    <section className={Styles.sec}>
                        <div>
                            <div className={Styles.head}>
                                <h1 className={Styles.heading} >{this.state.MainName}</h1>
                                <p />
                                <p />
                                <p className={Styles.slogan}>{this.state.Slogan}</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}
 
export default AboutHeader