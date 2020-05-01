import React, { Component, Fragment } from 'react'
import ICUcover from '../img/ICUcover.jpeg'
import Styles from './ImgCover.module.css'

class ImgCover extends Component {

    state = {
        Heading: "All machines imported from JAPAN"
    }

    render() {
        return (
            <Fragment>
                <div className={Styles.container}>
                    <center><img src={ICUcover} alt="icucover"
                    style={{
                        width: "80%",
                        height: '200px',
                        marginLeft: '180',
                        marginRight: 'auto'
                  }} /></center>
                    <div className={Styles.centered}>
                        <h1 style={{
                            fontSize: '25px',  
                        }}>
                            {this.state.Heading}
                        </h1>
                        {/*<span style={{
                            fontSize: '30px'
                        }}>
                            {this.state.Slogan}
                        </span>*/}
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default ImgCover
