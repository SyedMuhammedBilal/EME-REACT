import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Styles from './info.module.css'


class Info extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             head: 'Why EME is best place to buy?',
             head2: 'Learn more'
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
                            <p className={Styles.typography}>Have questions about carriers, payments, or anything else? Just say the word.</p>
                        </div>
                    </div>
                    <div>
                        <Link className={Styles.learn_more} >{this.state.head2}</Link>
                    </div>
                </section>
            </div>
        )
    }
}

export default Info
