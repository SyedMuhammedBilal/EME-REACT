import React, { Component } from 'react';
import Styles from './HoriCart.module.css';
import pic01 from '../img/f-icon1.png'
import pic02 from '../img/f-icon2.png'
import pic03 from '../img/f-icon3.png'
import pic04 from '../img/f-icon4.png'

class HoriCard extends Component {
    render() {
        return (
            <div className={Styles.container}>
                <div className={Styles.box}>
                    <div className={Styles.column}>
                        <img src={pic01} className={Styles.pic1} alt='pic1'/>
                        <p style={{color:'black'}}></p>
                    </div>
                    <div className={Styles.column}>
                        <img src={pic02} className={Styles.pic1} alt='pic2'/>
                        <p style={{color:'black'}}>hihibdhs jncjabvbv wbvjwabn</p>
                    </div>
                    <div className={Styles.column}>
                        <img src={pic03} className={Styles.pic1} alt='pic3'/>
                        <p style={{color:'black'}}>hihibdhs jncjabvbv wbvjwabn</p>
                    </div>
                    <div className={Styles.column}>
                        <img src={pic04} className={Styles.pic1} alt='pic4'/>
                        <p style={{color:'black'}}>hihibdhs jncjabvbv wbvjwabn</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default HoriCard
