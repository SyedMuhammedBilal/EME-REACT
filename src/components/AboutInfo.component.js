import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Styles from './AboutInfo.module.css'


class AboutInfo extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             head: 'Who is EME?',
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
                            <p className={Styles.typography}>Wise decision plays an important role in every aspect of life. 
                            Sometimes compromises are also important in making a wise decision but if there is a single aspect where you cannot afford to compromises, 
                            it’s in medical and healthcare. 
                            EME is providing its elegant service in Karachi for 20 years and our service ranks amongst the best medical equipment provider in Karachi.</p>
                            <p className={Styles.typography}>Biomedical engineering (BME) or medical engineering is the application of engineering principles and design concepts to medicine and biology for healthcare purposes (e.g. diagnostic or therapeutic). 
                            This field seeks to close the gap between engineering and medicine, combining the design and problem solving skills of engineering with medical biological sciences to advance health care treatment, including diagnosis, monitoring, and therapy. 
                            Also included under the scope of a biomedical engineer is the management of current medical equipment within hospitals while adhering to relevant industry standards.</p>
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

export default AboutInfo
