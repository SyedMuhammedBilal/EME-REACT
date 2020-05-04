import React, { Component } from 'react';
import Styles from './HoriCart.module.css';
import pic01 from '../img/f-icon1.png'
import pic02 from '../img/f-icon2.png'
import pic03 from '../img/f-icon3.png'
import pic04 from '../img/f-icon4.png'

class HoriCard extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name1: "Free Delivery",
             name2: "Return Policy",
             name3: "24/7 Support",
             name4: "Secure Payment"
        };
    }

    render() {
        const desc1 = "Free Delivery all over Pakistan"

        return (
            <div className={Styles.container}>
                <div className={Styles.box}>
                    <div className={Styles.column}>
                        <img src={pic01} className={Styles.pic1} alt='pic1'/>
                        <p></p>
                        <span style={{
                            color: 'black',
                            fontWeight: '400px'
                        }}>{this.state.name1}</span>
                        <p></p>
                        <span className={Styles.des}>{desc1}</span>
                    </div>
                    <div className={Styles.column}>
                        <img src={pic02} className={Styles.pic1} alt='pic2'/>
                        <p></p>
                        <span style={{
                            color: 'black',
                            fontWeight: '400px'
                        }}>{this.state.name2}</span>
                        <p></p>
                        <span className={Styles.des}>{desc1}</span>
                    </div>
                    <div className={Styles.column}>
                        <img src={pic03} className={Styles.pic1} alt='pic3'/>
                        <p></p>
                        <span style={{
                            color: 'black',
                            fontWeight: '400px'
                        }}>{this.state.name3}</span>
                        <p></p>
                        <span className={Styles.des}>{desc1}</span>
                    </div>
                    <div className={Styles.column}>
                        <img src={pic04} className={Styles.pic1} alt='pic4'/>
                        <p></p>
                        <span style={{
                            color: 'black',
                            fontWeight: '400%'
                        }}>{this.state.name4}</span>
                        <p></p>
                        <span className={Styles.des}>{desc1}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default HoriCard
