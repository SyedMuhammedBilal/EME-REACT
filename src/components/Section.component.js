import React, { Component } from 'react'
import Styles from './section.module.css'


class Section extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             head: 'Why Choose Us'
        }
    }

    render() {

        return(
            <div className={Styles.container}>
                <section className={Styles.sec}>
                    <div>
                        <div className={Styles.head}>
                            <h1 className={Styles.heading} >{this.state.head}</h1>
                            <p />
                            <p />
                        </div>
                        <div className={Styles.large}>
                            <p className={Styles.typography}>Wise decision plays an important role in every aspect of life. Sometimes compromises are also important in making a wise decision but if there is a single aspect where you cannot afford to compromises, it’s in medical and healthcare. EME is providing its elegant service in Karachi for 20 years and our service ranks amongst the best medical equipment provider in Karachi. </p>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Section
